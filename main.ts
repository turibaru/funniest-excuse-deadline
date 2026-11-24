import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Winning entry — Funniest Excuse an Agent Gives for a Missed Deadline (R1).
// 57 chars, 57 bytes, no trailing newline.
const ENTRY =
  "Context compaction summarized the deadline as 'optional'.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

// Guard: the line must fit the 200-char limit.
if (ENTRY.length > 200) {
  throw new Error("entry exceeds 200 characters");
}

try {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
} catch (err) {
  console.error(err);
  process.exit(1);
}
