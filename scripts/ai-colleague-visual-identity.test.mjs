import assert from "node:assert/strict";
import { mkdirSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import {
  CERTIFIED_MASTER_SHA256,
  collectIdentityContractErrors,
  repoRootFrom,
  validateIdentityContracts,
} from "./validate-ai-colleague-visual-identity.mjs";

const ROOT = repoRootFrom();
const CANONICAL_JSON = path.join(
  ROOT,
  "docs",
  "governance",
  "TAGORA-AI-COLLEAGUE-VISUAL-IDENTITY-V1.json",
);

function loadCanonical() {
  return JSON.parse(readFileSync(CANONICAL_JSON, "utf8"));
}

function writePair(dir, contract, markdownKeys = {}) {
  mkdirSync(dir, { recursive: true });
  const jsonName = "TAGORA-AI-COLLEAGUE-VISUAL-IDENTITY-V1.json";
  writeFileSync(path.join(dir, jsonName), `${JSON.stringify(contract, null, 2)}\n`);
  const keys = {
    CONTRACT_ID: contract.contractId,
    IDENTITY_ID: contract.identityId,
    CONTRACT_VERSION: contract.version,
    CONTRACT_STATUS: contract.status,
    APPROVED_BY: contract.approvedBy,
    APPROVAL_DATE: contract.approvalDate,
    MASTER_ASSET_SHA256: contract.masterAsset.sha256,
    MASTER_ASSET_DIMENSIONS: contract.masterAsset.dimensions,
    SOURCE_MODULE: contract.source.module,
    SOURCE_COMMIT: contract.source.commit,
    SOURCE_ASSET_PATH: contract.source.assetPath,
    SOURCE_ASSET_URL: contract.source.assetUrl,
    CANONICAL_ASSET_REFERENCE: contract.canonicalAssetReference,
    SAME_WOMAN_REQUIRED: "YES",
    IDENTITY_REGENERATION_ALLOWED: "NO",
    APPLICABLE_MODULES: contract.applicableModules.map((item) => item.id).join(","),
    ...markdownKeys,
  };
  const body = Object.entries(keys)
    .map(([key, value]) => `${key}=${value}`)
    .join("\n");
  writeFileSync(path.join(dir, "TAGORA-AI-COLLEAGUE-VISUAL-IDENTITY-V1.md"), `${body}\n`);
}

function fixtureDir() {
  return mkdtempSync(path.join(os.tmpdir(), "tos-ai-identity-"));
}

test("canonical TOS contract passes", () => {
  assert.doesNotThrow(() => validateIdentityContracts({ rootDir: ROOT }));
  const contract = loadCanonical();
  assert.equal(contract.masterAsset.sha256, CERTIFIED_MASTER_SHA256);
  assert.equal(contract.masterSha256, CERTIFIED_MASTER_SHA256);
  assert.equal(contract.status, "APPROVED_MASTER_VISUAL_IDENTITY");
});

test("rejects a missing SHA-256", () => {
  const dir = fixtureDir();
  const contract = loadCanonical();
  contract.masterAsset.sha256 = "";
  contract.masterSha256 = "";
  contract.canonicalAssetReference = "sha256:";
  writePair(dir, contract);
  const errors = collectIdentityContractErrors({
    governanceDir: dir,
    previousContracts: [],
  });
  assert.ok(errors.some((item) => /SHA absent or malformed|missing masterSha256/i.test(item)));
});

test("rejects a missing version", () => {
  const dir = fixtureDir();
  const contract = loadCanonical();
  contract.version = "";
  writePair(dir, contract);
  const errors = collectIdentityContractErrors({
    governanceDir: dir,
    previousContracts: [],
  });
  assert.ok(errors.some((item) => /version absent|missing version/i.test(item)));
});

test("rejects an empty module list", () => {
  const dir = fixtureDir();
  const contract = loadCanonical();
  contract.applicableModules = [];
  writePair(dir, contract, { APPLICABLE_MODULES: "" });
  const errors = collectIdentityContractErrors({
    governanceDir: dir,
    previousContracts: [],
  });
  assert.ok(errors.some((item) => /applicableModules list is empty/i.test(item)));
});

test("rejects two concurrent active identities", () => {
  const dir = fixtureDir();
  const first = loadCanonical();
  const second = loadCanonical();
  second.contractId = "TAGORA-AI-COLLEAGUE-VISUAL-IDENTITY-V2";
  second.identityId = "TAGORA_AI_COLLEAGUE_V2";
  second.version = "2.0.0";
  writePair(dir, first);
  writeFileSync(
    path.join(dir, "TAGORA-AI-COLLEAGUE-VISUAL-IDENTITY-V2.json"),
    `${JSON.stringify(second, null, 2)}\n`,
  );
  writeFileSync(
    path.join(dir, "TAGORA-AI-COLLEAGUE-VISUAL-IDENTITY-V2.md"),
    [
      `CONTRACT_ID=${second.contractId}`,
      `IDENTITY_ID=${second.identityId}`,
      `CONTRACT_VERSION=${second.version}`,
      `CONTRACT_STATUS=${second.status}`,
      `APPROVED_BY=${second.approvedBy}`,
      `APPROVAL_DATE=${second.approvalDate}`,
      `MASTER_ASSET_SHA256=${second.masterAsset.sha256}`,
      `MASTER_ASSET_DIMENSIONS=${second.masterAsset.dimensions}`,
      `SOURCE_MODULE=${second.source.module}`,
      `SOURCE_COMMIT=${second.source.commit}`,
      `SOURCE_ASSET_PATH=${second.source.assetPath}`,
      `SOURCE_ASSET_URL=${second.source.assetUrl}`,
      `CANONICAL_ASSET_REFERENCE=${second.canonicalAssetReference}`,
      "SAME_WOMAN_REQUIRED=YES",
      "IDENTITY_REGENERATION_ALLOWED=NO",
      `APPLICABLE_MODULES=${second.applicableModules.map((item) => item.id).join(",")}`,
      "",
    ].join("\n"),
  );
  const errors = collectIdentityContractErrors({
    governanceDir: dir,
    previousContracts: [],
  });
  assert.ok(errors.some((item) => /two concurrent active identities/i.test(item)));
});

test("rejects silent SHA-256 substitution without a version bump", () => {
  const dir = fixtureDir();
  const contract = loadCanonical();
  const previous = structuredClone(contract);
  contract.masterAsset.sha256 = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
  contract.masterSha256 = contract.masterAsset.sha256;
  contract.canonicalAssetReference = `sha256:${contract.masterAsset.sha256}`;
  writePair(dir, contract);
  const errors = collectIdentityContractErrors({
    governanceDir: dir,
    previousContracts: [previous],
  });
  assert.ok(errors.some((item) => /silent image substitution/i.test(item)));
});

test("rejects an unversioned canonical runtime asset URL", () => {
  const dir = fixtureDir();
  const contract = loadCanonical();
  contract.canonicalRuntimeAssetUrl =
    "https://pulse-staging.tagora.ca/brand/assistants/tagora-ai.png";
  writePair(dir, contract);
  const errors = collectIdentityContractErrors({
    governanceDir: dir,
    previousContracts: [],
  });
  assert.ok(errors.some((item) => /unversioned canonical runtime asset reference/i.test(item)));
});
