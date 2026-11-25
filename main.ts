// u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363
// Writes one short, original sentence to /output/entry.txt: a childhood
// memory that stirs nostalgia. Node 22, standard library only, no network.
// The text is fixed: two runs write byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "When the streetlight on our corner buzzed on, we knew the game was over, so we traded our last marbles, wiped the dust off our knees, and ran home slow, already missing the evening we had just lived.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
