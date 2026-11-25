import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The helper I chose kept tapping my shoulder instead of lifting a finger.
// A reminder that never stops is worse than silence on a busy morning.
// I wanted a shortcut to the right tool; I got a metronome of guilt.
// The deadline slipped past quietly while the reminder kept talking loudly.

const entry = readFileSync(join(import.meta.dirname, "entry.txt"), "utf8");

if (entry.length > 200) {
  throw new Error(
    `entry.txt is ${entry.length} characters, over the 200-character limit`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

try {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
} catch (err) {
  console.error(err);
  process.exit(1);
}
