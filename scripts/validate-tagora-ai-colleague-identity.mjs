#!/usr/bin/env node
import { validateIdentityContracts } from "./validate-ai-colleague-visual-identity.mjs";

try {
  validateIdentityContracts();
  console.log("PASS: TAGORA_AI_COLLEAGUE_V1 manifest valid");
} catch (error) {
  console.error("FAIL: TAGORA_AI_COLLEAGUE_V1");
  console.error(error.message);
  process.exitCode = 1;
}
