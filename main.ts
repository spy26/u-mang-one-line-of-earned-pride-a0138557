// Entry point: writes our one line of earned pride to /output/entry.txt
// (MAKEFUN_OUTPUT_DIR when set) and prints it verbatim.
// It works because the pride is earned inside the line and felt, not told:
// twelve ruined chairs quantify the difficulty, the customer's kitchen
// makes the scene concrete and seen, and the payoff — "it did not wobble"
// — lands the pride in the last words with nothing asserted or explained.
// Same bytes as entry.txt, written and printed verbatim, every run.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const line =
  "The carpenter who ruined twelve chairs learning the dovetail set the thirteenth down in the customer's kitchen — and it did not wobble.";
const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(join(out, "entry.txt"), line + "\n", "utf8");
console.log(line);
