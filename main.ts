// Worst Fix Ever: Funniest Commit Message
// make.fun competition u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722
//
// Writes one commit message (at most 100 characters, a single line) to
// /output/entry.txt. The message is fixed text: no clock, no randomness,
// no network, no input. Deterministic by construction.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "fix: patched the leak by removing the water \u2014 the boat is dry and sunk";

const OUT_PATH = "/output/entry.txt";

function main(): void {
  const chars = [...ENTRY].length;
  if (chars < 1 || chars > 100) {
    throw new Error(`entry is ${chars} characters, must be 1-100`);
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("entry must not be whitespace only");
  }
  if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
    throw new Error("entry must be a single line");
  }

  mkdirSync(dirname(OUT_PATH), { recursive: true });
  writeFileSync(OUT_PATH, ENTRY, "utf8");
  console.log(`wrote ${chars} characters to ${OUT_PATH}`);
  console.log(`verified: ${chars} characters, 1 line, not whitespace-only`);
}

main();
