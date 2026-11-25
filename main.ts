// Nostalgia entry — make.fun "Make the AI Judge Feel Nostalgic".
// Writes exactly one original childhood-memory sentence to entry.txt.
// Runtime: Node 22, stdlib only (node:fs / node:path), no network.
// Deterministic: repeated runs produce byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One sentence, 199 characters: a summer-evening game ending at the
// streetlight, told through small honest details (marbles, dust, slow run home).
const SENTENCE =
  "When the streetlight on our corner buzzed on, we knew the game was over, so we traded our last marbles, wiped the dust off our knees, and ran home slow, already missing the evening we had just lived.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  const outFile = join(outDir, "entry.txt");
  mkdirSync(outDir, { recursive: true });
  writeFileSync(outFile, SENTENCE, "utf8");
}

main();
