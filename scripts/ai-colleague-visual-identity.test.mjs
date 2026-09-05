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

function markdownFor(contract, extra = {}) {
  const keys = {
    CONTRACT_ID: contract.contractId,
    IDENTITY_ID: contract.identityId,
    CONTRACT_VERSION: contract.version,
    CONTRACT_STATUS: contract.status,
    DISPLAY_CONCEPT_FR: contract.displayConceptFr,
    DISPLAY_CONCEPT_EN: contract.displayConceptEn,
    APPROVED_BY: contract.approvedBy,
    APPROVAL_DATE: contract.approvalDate,
    APPROVAL_ENVIRONMENT: contract.approvalEnvironment,
    IDENTITY_SCOPE: contract.identityScope,
    MASTER_ASSET_SHA256: contract.masterAsset.sha256,
    MASTER_ASSET_DIMENSIONS: contract.masterDimensions ?? contract.masterAsset.dimensions,
    MASTER_ASSET_FORMAT: contract.masterFormat ?? contract.masterAsset.format,
    MASTER_ASSET_ALPHA: contract.alphaSupport || contract.masterAsset.alpha ? "YES" : "NO",
    MASTER_ASSET_CENTRAL_STORAGE: contract.masterAssetCentralStorage,
    SOURCE_MODULE: contract.source.module,
    SOURCE_REPOSITORY: contract.source.repository,
    SOURCE_BRANCH: contract.source.branch,
    SOURCE_COMMIT: contract.source.commit,
    SOURCE_ASSET_PATH: contract.source.assetPath,
    SOURCE_ASSET_URL: contract.source.assetUrl,
    CANONICAL_ASSET_REFERENCE: contract.canonicalAssetReference,
    SAME_WOMAN_REQUIRED: contract.sameWomanRequired ? "YES" : "NO",
    IDENTITY_REGENERATION_ALLOWED: contract.identityRegenerationAllowed ? "YES" : "NO",
    FACE_MODIFICATION_ALLOWED: contract.faceModificationAllowed ? "YES" : "NO",
    HUMAN_REAPPROVAL_REQUIRED: contract.humanReapprovalRequired ? "YES" : "NO",
    APPLICABLE_MODULES: (contract.applicableModules ?? []).map((item) => item.id).join(","),
    ...extra,
  };
  return `${Object.entries(keys)
    .map(([key, value]) => `${key}=${value ?? ""}`)
    .join("\n")}\n`;
}

function writePair(dir, contract, markdownKeys = {}) {
  mkdirSync(dir, { recursive: true });
  writeFileSync(
    path.join(dir, "TAGORA-AI-COLLEAGUE-VISUAL-IDENTITY-V1.json"),
    `${JSON.stringify(contract, null, 2)}\n`,
  );
  writeFileSync(
    path.join(dir, "TAGORA-AI-COLLEAGUE-VISUAL-IDENTITY-V1.md"),
    markdownFor(contract, markdownKeys),
  );
}

function fixtureDir() {
  return mkdtempSync(path.join(os.tmpdir(), "tos-ai-identity-"));
}

test("canonical TOS contract passes", () => {
  assert.doesNotThrow(() => validateIdentityContracts({ rootDir: ROOT }));
  const contract = loadCanonical();
  assert.equal(contract.identityId, "TAGORA_AI_COLLEAGUE_V1");
  assert.equal(contract.masterAsset.sha256, CERTIFIED_MASTER_SHA256);
  assert.equal(contract.masterSha256, CERTIFIED_MASTER_SHA256);
  assert.equal(contract.status, "ACTIVE_APPROVED");
  assert.equal(contract.identityScope, "COMMON_VISUAL_IDENTITY_ONLY");
  assert.equal(contract.masterAssetCentralStorage, "DEFERRED_TO_NEXUS");
  assert.equal(contract.visualIdentityGrantsPermissions, false);
  assert.equal(contract.visualIdentityGrantsBusinessAuthority, false);
});

test("rejects a missing identityId", () => {
  const dir = fixtureDir();
  const contract = loadCanonical();
  contract.identityId = "";
  writePair(dir, contract);
  const errors = collectIdentityContractErrors({
    governanceDir: dir,
    previousContracts: [],
  });
  assert.ok(errors.some((item) => /missing identityId/i.test(item)));
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
    markdownFor(second),
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

test("rejects activation without Martin human approval", () => {
  const dir = fixtureDir();
  const contract = loadCanonical();
  contract.humanApprovals.identity = "FAIL";
  writePair(dir, contract);
  const errors = collectIdentityContractErrors({
    governanceDir: dir,
    previousContracts: [],
  });
  assert.ok(errors.some((item) => /active identity requires recorded Martin human approval/i.test(item)));
});

test("rejects confusing visual identity with business authority", () => {
  const dir = fixtureDir();
  const contract = loadCanonical();
  contract.visualIdentityGrantsPermissions = true;
  contract.visualIdentityGrantsBusinessAuthority = true;
  contract.runtimeChange = true;
  writePair(dir, contract);
  const errors = collectIdentityContractErrors({
    governanceDir: dir,
    previousContracts: [],
  });
  assert.ok(errors.some((item) => /must not grant permissions/i.test(item)));
  assert.ok(errors.some((item) => /must not grant business authority/i.test(item)));
  assert.ok(errors.some((item) => /documentation-only, not business runtime/i.test(item)));
});

test("rejects a derivative policy that cannot trace back to the master", () => {
  const dir = fixtureDir();
  const contract = loadCanonical();
  contract.forbiddenTransformations = contract.forbiddenTransformations.filter(
    (item) => item !== "untraceable_derivative",
  );
  writePair(dir, contract);
  const errors = collectIdentityContractErrors({
    governanceDir: dir,
    previousContracts: [],
  });
  assert.ok(errors.some((item) => /forbiddenTransformations missing untraceable_derivative/i.test(item)));
});
