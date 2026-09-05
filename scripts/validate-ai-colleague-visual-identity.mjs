#!/usr/bin/env node
/**
 * Validates TOS AI colleague visual-identity contracts in docs/governance/.
 * This is not a second registry: it checks the canonical governance contract pair.
 */

import { execFileSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const ACTIVE_STATUSES = new Set([
  "ACTIVE_APPROVED",
  "APPROVED_MASTER_VISUAL_IDENTITY",
  "ACTIVE",
  "CANONICAL",
  "CURRENT",
]);

export const REQUIRED_HUMAN_APPROVALS = [
  "identity",
  "desktop",
  "mobile",
  "size",
  "premiumIntegration",
  "messageAvatar",
  "visualE2E",
];

export const REQUIRED_ACCENTS = {
  TAGORA_BASE: "#182643",
  NEXUS: "#008247",
  HORORA: "#1F79E0",
  PULS: "#55C558",
  DEPORA: "#00C1D5",
  MESSOR: "#DBDF5C",
  YORVA: "#BAC300",
  ETIOQ: "#F2F890",
};

export const REQUIRED_ALLOWED_DERIVATIVES = [
  "exact_copy",
  "resize",
  "non_destructive_crop",
];

export const REQUIRED_FORBIDDEN_TRANSFORMATIONS = [
  "generate_a_new_woman",
  "face_swap",
  "alter_the_face",
  "silent_master_replacement",
  "untraceable_derivative",
];

export const REQUIRED_SURFACES = [
  "NEXUS",
  "PULS",
  "HORORA",
  "DEPORA",
  "MESSOR",
  "YORVA",
  "ETIOQ",
  "TAGORA_WEBSITE",
];

export const CERTIFIED_MASTER_SHA256 =
  "12ed4b7c31e872e3e32cba59852d30b2fe4b919613feb759535e3e6803773c27";

const SHA256_RE = /^[a-f0-9]{64}$/;
const SECRET_RE =
  /(api[_-]?key|secret|token|password|private[_-]?key|BEGIN [A-Z ]+PRIVATE KEY|ghp_|github_pat_|xox[baprs]-|sk_live_|sk_test_|service_role|SUPABASE_SERVICE)/i;
const PRIVATE_URL_RE =
  /(localhost|127\.0\.0\.1|10\.\d+\.\d+\.\d+|192\.168\.\d+\.\d+|172\.(1[6-9]|2\d|3[0-1])\.\d+\.\d+)/i;
const FORBIDDEN_REPLACEMENT_NAMES = new Set(["tagora-ai.png"]);

export function repoRootFrom(fileUrl = import.meta.url) {
  return path.resolve(path.dirname(fileURLToPath(fileUrl)), "..");
}

function isPlainObject(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function walkStrings(value, visit) {
  if (typeof value === "string") {
    visit(value);
    return;
  }
  if (Array.isArray(value)) {
    for (const item of value) walkStrings(item, visit);
    return;
  }
  if (isPlainObject(value)) {
    for (const [key, nested] of Object.entries(value)) {
      visit(key);
      walkStrings(nested, visit);
    }
  }
}

function parseMarkdownKeys(markdown) {
  const keys = {};
  for (const line of markdown.split(/\r?\n/)) {
    const match = line.match(/^([A-Z][A-Z0-9_]*)=(.*)$/);
    if (match) keys[match[1]] = match[2].trim();
  }
  return keys;
}

function moduleIds(contract) {
  if (!Array.isArray(contract.applicableModules)) return [];
  return contract.applicableModules.map((item) =>
    typeof item === "string" ? item : item?.id,
  );
}

function hasHumanApproval(contract) {
  const approvals = isPlainObject(contract.humanApprovals)
    ? contract.humanApprovals
    : {};
  const allPass = REQUIRED_HUMAN_APPROVALS.every(
    (key) => String(approvals[key] ?? "").toUpperCase() === "PASS",
  );
  return (
    String(contract.approvedBy ?? "").toUpperCase() === "MARTIN" &&
    allPass &&
    Number(approvals.visualE2EPercent) === 100
  );
}

function isUnversionedCanonicalReference(value, sha256) {
  if (typeof value !== "string" || value.trim() === "") return false;
  const trimmed = value.trim();
  const base = path.posix.basename(trimmed.split("?")[0]);
  if (FORBIDDEN_REPLACEMENT_NAMES.has(base.toLowerCase())) return true;
  if (trimmed.startsWith("sha256:") && trimmed.slice(7) === sha256) return false;
  return !trimmed.toLowerCase().includes(sha256);
}

function loadPreviousFromGit(relativePath, rootDir) {
  try {
    return execFileSync(
      "git",
      ["show", `origin/main:${relativePath.replaceAll("\\", "/")}`],
      { cwd: rootDir, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] },
    );
  } catch {
    return null;
  }
}

export function collectIdentityContractErrors(options = {}) {
  const errors = [];
  const rootDir = options.rootDir ?? repoRootFrom();
  const governanceDir = options.governanceDir ?? path.join(rootDir, "docs", "governance");
  const previousContracts = options.previousContracts ?? null;

  if (!existsSync(governanceDir)) {
    return [`governance directory missing: ${governanceDir}`];
  }

  const jsonFiles = readdirSync(governanceDir)
    .filter((name) => /^TAGORA-AI-COLLEAGUE-VISUAL-IDENTITY-V.+\.json$/i.test(name))
    .sort();

  if (jsonFiles.length === 0) {
    return ["no AI colleague visual identity JSON contract found"];
  }

  const contracts = [];

  for (const jsonName of jsonFiles) {
    const jsonPath = path.join(governanceDir, jsonName);
    const mdName = jsonName.replace(/\.json$/i, ".md");
    const mdPath = path.join(governanceDir, mdName);
    let contract;

    try {
      contract = JSON.parse(readFileSync(jsonPath, "utf8"));
    } catch (error) {
      errors.push(`${jsonName}: invalid JSON (${error.message})`);
      continue;
    }

    const label = contract.contractId ?? jsonName;
    contracts.push({ jsonName, jsonPath, mdPath, contract });

    const sha = String(
      contract.masterAsset?.sha256 ?? contract.masterSha256 ?? "",
    ).toLowerCase();
    if (
      contract.masterAsset?.sha256 &&
      contract.masterSha256 &&
      String(contract.masterAsset.sha256).toLowerCase() !==
        String(contract.masterSha256).toLowerCase()
    ) {
      errors.push(`${label}: masterSha256 does not match masterAsset.sha256`);
    }
    const required = {
      identityId: contract.identityId,
      version: contract.version,
      status: contract.status,
      displayConceptFr: contract.displayConceptFr,
      displayConceptEn: contract.displayConceptEn,
      approvedBy: contract.approvedBy,
      approvalDate: contract.approvalDate,
      approvalEnvironment: contract.approvalEnvironment,
      sourceModule: contract.source?.module ?? contract.sourceModule,
      sourceRepository: contract.source?.repository ?? contract.sourceRepository,
      sourceBranch: contract.source?.branch ?? contract.sourceBranch,
      sourceCommit: contract.source?.commit ?? contract.sourceCommit,
      sourceAssetPath: contract.source?.assetPath ?? contract.sourceAssetPath,
      sourceAssetUrl: contract.source?.assetUrl ?? contract.sourceAssetUrl,
      masterSha256: contract.masterAsset?.sha256 ?? contract.masterSha256,
      masterDimensions:
        contract.masterDimensions ??
        contract.masterAsset?.dimensions ??
        contract.dimensions,
      masterFormat: contract.masterFormat ?? contract.masterAsset?.format ?? contract.format,
      alphaSupport: contract.alphaSupport ?? contract.masterAsset?.alpha ?? contract.alpha,
      applicableModules: contract.applicableModules,
      identityScope: contract.identityScope,
      immutableIdentityRules: contract.immutableIdentityRules,
      allowedDerivativeRules: contract.allowedDerivativeRules,
      forbiddenTransformations: contract.forbiddenTransformations,
      moduleAccentRules: contract.moduleAccentRules,
      TOSAuthority: contract.TOSAuthority,
      NexusAuthority: contract.NexusAuthority,
      moduleAuthority: contract.moduleAuthority,
      deprecationPolicy: contract.deprecationPolicy,
      replacementPolicy: contract.replacementPolicy,
      humanReapprovalRequired: contract.humanReapprovalRequired,
      nexusRegistryResponsibility: contract.nexusRegistryResponsibility,
      moduleConsumptionResponsibility: contract.moduleConsumptionResponsibility,
    };

    for (const [field, value] of Object.entries(required)) {
      const missing =
        value === undefined ||
        value === null ||
        (typeof value === "string" && value.trim() === "") ||
        (Array.isArray(value) && value.length === 0);
      if (missing) errors.push(`${label}: missing ${field}`);
    }

    if (!SHA256_RE.test(sha)) {
      errors.push(`${label}: SHA absent or malformed`);
    }

    if (!contract.version || String(contract.version).trim() === "") {
      errors.push(`${label}: version absent`);
    }

    const ids = moduleIds(contract).filter(Boolean);
    if (ids.length === 0) {
      errors.push(`${label}: applicableModules list is empty`);
    } else {
      for (const surface of REQUIRED_SURFACES) {
        if (!ids.includes(surface)) {
          errors.push(`${label}: applicableModules missing ${surface}`);
        }
      }
    }

    if (contract.source?.assetUrlRole !== "SOURCE_EVIDENCE_ONLY_NOT_CANONICAL_RUNTIME") {
      errors.push(`${label}: source.assetUrl must be evidence-only, not canonical runtime`);
    }

    if (isUnversionedCanonicalReference(contract.canonicalRuntimeAssetUrl, sha)) {
      errors.push(`${label}: unversioned canonical runtime asset reference`);
    }
    if (isUnversionedCanonicalReference(contract.canonicalAssetReference, sha)) {
      errors.push(`${label}: unversioned canonical asset reference`);
    }
    if (
      typeof contract.source?.assetUrl === "string" &&
      FORBIDDEN_REPLACEMENT_NAMES.has(
        path.posix.basename(contract.source.assetUrl.split("?")[0]).toLowerCase(),
      )
    ) {
      errors.push(`${label}: source.assetUrl uses forbidden replacement file tagora-ai.png`);
    }

    if (contract.identityRegenerationAllowed !== false) {
      errors.push(`${label}: identityRegenerationAllowed must be false`);
    }
    if (contract.faceModificationAllowed !== false) {
      errors.push(`${label}: faceModificationAllowed must be false`);
    }
    if (contract.sameWomanRequired !== true) {
      errors.push(`${label}: sameWomanRequired must be true`);
    }
    if (contract.identityScope !== "COMMON_VISUAL_IDENTITY_ONLY") {
      errors.push(`${label}: identityScope must be COMMON_VISUAL_IDENTITY_ONLY`);
    }
    if (contract.humanReapprovalRequired !== true) {
      errors.push(`${label}: humanReapprovalRequired must be true`);
    }
    if (contract.visualIdentityGrantsPermissions !== false) {
      errors.push(`${label}: visual identity must not grant permissions`);
    }
    if (contract.visualIdentityGrantsBusinessAuthority !== false) {
      errors.push(`${label}: visual identity must not grant business authority`);
    }
    if (contract.documentationOnly !== true || contract.runtimeChange !== false) {
      errors.push(`${label}: visual identity must remain documentation-only, not business runtime`);
    }
    if (contract.deprecationPolicy?.silentSubstitutionForbidden !== true) {
      errors.push(`${label}: silent substitution must be forbidden`);
    }
    if (contract.replacementPolicy?.newMasterRequiresNewVersion !== true) {
      errors.push(`${label}: replacementPolicy must require a new version for a new master`);
    }
    if (contract.moduleAccentRules?.recolorWomanForbidden !== true) {
      errors.push(`${label}: module accents must not recolor the woman`);
    }
    const accents = contract.moduleAccentRules?.accents ?? {};
    for (const [surface, hex] of Object.entries(REQUIRED_ACCENTS)) {
      if (String(accents[surface] ?? "").toUpperCase() !== hex) {
        errors.push(`${label}: moduleAccentRules.accents.${surface} must be ${hex}`);
      }
    }
    const allowed = Array.isArray(contract.allowedDerivativeRules)
      ? contract.allowedDerivativeRules
      : [];
    for (const rule of REQUIRED_ALLOWED_DERIVATIVES) {
      if (!allowed.includes(rule)) {
        errors.push(`${label}: allowedDerivativeRules missing ${rule}`);
      }
    }
    const forbidden = Array.isArray(contract.forbiddenTransformations)
      ? contract.forbiddenTransformations
      : [];
    for (const rule of REQUIRED_FORBIDDEN_TRANSFORMATIONS) {
      if (!forbidden.includes(rule)) {
        errors.push(`${label}: forbiddenTransformations missing ${rule}`);
      }
    }
    if (
      !Array.isArray(contract.TOSAuthority) ||
      contract.TOSAuthority.length === 0 ||
      !Array.isArray(contract.NexusAuthority) ||
      contract.NexusAuthority.length === 0 ||
      !Array.isArray(contract.moduleAuthority) ||
      contract.moduleAuthority.length === 0
    ) {
      errors.push(`${label}: TOS, Nexus and module authorities must be recorded`);
    }
    if ((contract.alphaSupport ?? contract.masterAsset?.alpha) !== true) {
      errors.push(`${label}: alphaSupport must be true`);
    }
    if (ACTIVE_STATUSES.has(contract.status) && !hasHumanApproval(contract)) {
      errors.push(`${label}: active identity requires recorded Martin human approval`);
    }
    const storage = String(
      contract.masterAssetCentralStorage ?? contract.masterAsset?.centralStorage ?? "",
    );
    if (storage !== "TOS" && storage !== "DEFERRED_TO_NEXUS") {
      errors.push(`${label}: masterAssetCentralStorage must be TOS or DEFERRED_TO_NEXUS`);
    }

    if (
      ACTIVE_STATUSES.has(contract.status) &&
      sha &&
      sha !== CERTIFIED_MASTER_SHA256
    ) {
      errors.push(`${label}: active master SHA-256 does not match the certified PULS master`);
    }

    walkStrings(contract, (text) => {
      if (SECRET_RE.test(text) && !/sourceGate|SOURCE_GATE|TOKEN=/i.test(text)) {
        if (
          /(api[_-]?key|password|private[_-]?key|BEGIN [A-Z ]+PRIVATE KEY|ghp_|github_pat_|xox[baprs]-|sk_live_|sk_test_|service_role|SUPABASE_SERVICE)/i.test(
            text,
          )
        ) {
          errors.push(`${label}: possible secret or credential material`);
        }
      }
      if (PRIVATE_URL_RE.test(text)) {
        errors.push(`${label}: private URL is not allowed`);
      }
    });

    if (!existsSync(mdPath)) {
      errors.push(`${label}: missing markdown twin ${mdName}`);
    } else {
      const mdKeys = parseMarkdownKeys(readFileSync(mdPath, "utf8"));
      const expected = {
        CONTRACT_ID: contract.contractId,
        IDENTITY_ID: contract.identityId,
        CONTRACT_VERSION: String(contract.version),
        CONTRACT_STATUS: contract.status,
        DISPLAY_CONCEPT_FR: contract.displayConceptFr,
        DISPLAY_CONCEPT_EN: contract.displayConceptEn,
        APPROVED_BY: contract.approvedBy,
        APPROVAL_DATE: contract.approvalDate,
        APPROVAL_ENVIRONMENT: contract.approvalEnvironment,
        IDENTITY_SCOPE: contract.identityScope,
        MASTER_ASSET_SHA256: sha,
        MASTER_ASSET_DIMENSIONS:
          contract.masterDimensions ??
          contract.masterAsset?.dimensions ??
          contract.dimensions,
        MASTER_ASSET_FORMAT:
          contract.masterFormat ?? contract.masterAsset?.format ?? contract.format,
        MASTER_ASSET_ALPHA:
          (contract.alphaSupport ?? contract.masterAsset?.alpha ?? contract.alpha)
            ? "YES"
            : "NO",
        MASTER_ASSET_CENTRAL_STORAGE:
          contract.masterAssetCentralStorage ?? contract.masterAsset?.centralStorage,
        SOURCE_MODULE: contract.source?.module ?? contract.sourceModule,
        SOURCE_REPOSITORY: contract.source?.repository ?? contract.sourceRepository,
        SOURCE_BRANCH: contract.source?.branch ?? contract.sourceBranch,
        SOURCE_COMMIT: contract.source?.commit ?? contract.sourceCommit,
        SOURCE_ASSET_PATH: contract.source?.assetPath ?? contract.sourceAssetPath,
        SOURCE_ASSET_URL: contract.source?.assetUrl ?? contract.sourceAssetUrl,
        CANONICAL_ASSET_REFERENCE: contract.canonicalAssetReference,
        SAME_WOMAN_REQUIRED: contract.sameWomanRequired ? "YES" : "NO",
        IDENTITY_REGENERATION_ALLOWED: contract.identityRegenerationAllowed ? "YES" : "NO",
        FACE_MODIFICATION_ALLOWED: contract.faceModificationAllowed ? "YES" : "NO",
        HUMAN_REAPPROVAL_REQUIRED: contract.humanReapprovalRequired ? "YES" : "NO",
        APPLICABLE_MODULES: ids.join(","),
      };
      for (const [key, value] of Object.entries(expected)) {
        if ((mdKeys[key] ?? "").toLowerCase() !== String(value ?? "").toLowerCase()) {
          errors.push(`${label}: markdown ${key} does not match JSON`);
        }
      }
    }
  }

  const active = contracts.filter((entry) => ACTIVE_STATUSES.has(entry.contract.status));
  if (active.length > 1) {
    errors.push(
      `two concurrent active identities are forbidden: ${active
        .map((entry) => entry.contract.identityId ?? entry.jsonName)
        .join(", ")}`,
    );
  }
  if (active.length === 0) {
    errors.push("no active AI colleague visual identity");
  }

  const previous =
    previousContracts ??
    contracts
      .map((entry) => {
        const relative = path.relative(rootDir, entry.jsonPath).replaceAll("\\", "/");
        const raw = loadPreviousFromGit(relative, rootDir);
        if (!raw) return null;
        try {
          return JSON.parse(raw);
        } catch {
          return null;
        }
      })
      .filter(Boolean);

  for (const current of contracts) {
    const contract = current.contract;
    const prior = previous.find(
      (item) => item.identityId === contract.identityId && item.version === contract.version,
    );
    if (
      prior &&
      String(prior.masterAsset?.sha256 ?? prior.masterSha256 ?? "").toLowerCase() !==
        String(contract.masterAsset?.sha256 ?? contract.masterSha256 ?? "").toLowerCase()
    ) {
      errors.push(
        `${contract.contractId ?? current.jsonName}: silent image substitution (SHA-256 changed without a new version)`,
      );
    }
  }

  return errors;
}

export function validateIdentityContracts(options = {}) {
  const errors = collectIdentityContractErrors(options);
  if (errors.length > 0) {
    const error = new Error(errors.map((item) => `- ${item}`).join("\n"));
    error.errors = errors;
    throw error;
  }
  return { ok: true };
}

function isDirectRun() {
  const entry = process.argv[1];
  if (!entry) return false;
  return path.resolve(fileURLToPath(import.meta.url)).toLowerCase() === path.resolve(entry).toLowerCase();
}

if (isDirectRun()) {
  try {
    validateIdentityContracts();
    console.log("PASS TAGORA-AI-COLLEAGUE-VISUAL-IDENTITY-V1");
  } catch (error) {
    console.error("FAIL TAGORA-AI-COLLEAGUE-VISUAL-IDENTITY-V1");
    console.error(error.message);
    process.exitCode = 1;
  }
}
