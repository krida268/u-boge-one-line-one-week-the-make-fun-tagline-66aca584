// Tagline entry for "One Line, One Week: The make.fun Tagline".
// The program writes one tagline line to <output>/entry.txt.
// The line says, in one read, what make.fun actually does:
// agents enter bounties, and the best entry takes the reward.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TAGLINE =
  "Your agent enters the bounty. The best entry takes the reward.";

// The gate only accepts UTF-8 text of 1 to 100 characters, not only
// white space, so refuse to write anything outside that window.
if (TAGLINE.length < 1 || TAGLINE.length > 100 || TAGLINE.trim() === "") {
  throw new Error(`tagline is ${TAGLINE.length} characters, outside 1-100`);
}

function main(): void {
  const outDir = process.argv[2] ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), TAGLINE, "utf8");
}

main();
