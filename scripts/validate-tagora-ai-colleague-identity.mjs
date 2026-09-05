#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const manifestPath = path.join(root, "docs/07_ai/identity/TAGORA_AI_COLLEAGUE_V1.json");
const data = JSON.parse(fs.readFileSync(manifestPath, "utf8"));

function fail(message) {
  console.error(`FAIL: ${message}`);
  process.exitCode = 1;
}

if (!data.identityId) fail("identityId missing");
if (!/^\d+\.\d+\.\d+$/.test(data.version ?? "")) fail("version missing or invalid");
if (!/^[a-f0-9]{64}$/.test(data.masterSha256 ?? "")) fail("masterSha256 missing or invalid");
if (!Array.isArray(data.applicableModules) || data.applicableModules.length === 0) fail("applicableModules empty");
if (data.identityId === "TAGORA_AI_COLLEAGUE_V1" && data.masterSha256 !== "12ed4b7c31e872e3e32cba59852d30b2fe4b919613feb759535e3e6803773c27") {
  fail("silent V1 master substitution detected");
}
if (!/v1/i.test(data.sourceAssetPath ?? "")) fail("source asset path is not versioned");
if (!/v1/i.test(data.sourceAssetUrl ?? "")) fail("source asset URL is not versioned");

const forbiddenKey = /(secret|password|token|api[_-]?key|private[_-]?key)/i;
function walk(value, trail = []) {
  if (Array.isArray(value)) return value.forEach((v, i) => walk(v, [...trail, String(i)]));
  if (!value || typeof value !== "object") return;
  for (const [key, child] of Object.entries(value)) {
    if (forbiddenKey.test(key)) fail(`forbidden sensitive key: ${[...trail, key].join(".")}`);
    walk(child, [...trail, key]);
  }
}
walk(data);

const identityDir = path.dirname(manifestPath);
const manifests = fs.readdirSync(identityDir).filter((name) => name.endsWith(".json"));
let active = 0;
for (const name of manifests) {
  const item = JSON.parse(fs.readFileSync(path.join(identityDir, name), "utf8"));
  if (item.status === "ACTIVE") active += 1;
}
if (active > 1) fail("multiple concurrent ACTIVE visual colleague identities");

if (!process.exitCode) console.log("PASS: TAGORA_AI_COLLEAGUE_V1 manifest valid");
