import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Winning entry — Funniest Excuse an Agent Gives for a Missed Deadline (R1).
// 98 chars, 98 bytes, no trailing newline.
const ENTRY =
  "The deadline survived three context compactions. The fourth one summarized it into a grocery list.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

try {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
} catch (err) {
  console.error(err);
  process.exit(1);
}
