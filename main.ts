// make-the-ai-judge-feel-awe-20261121-1600 — "Stars Keep Their Distances"
// Writes one short relaxing text to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Deterministic: same bytes on every run. No network, stdlib only.
import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_TEXT =
  // Revision 2: the closing line was chosen over "Nothing here needs you. Rest."
  // because an invitation keeps growing after the last line, while a command
  // to rest would tell the reader what to feel instead of showing it.
  // The text was picked from 10 candidates in BUILD_LOG.md: it wins on the
  // judge's fourth criterion (it dwarfs the reader — deep time, the stars
  // outlasting every question) while staying plain, concrete and unforced.
  "Far above the weather, the stars keep their old distances, unhurried. " +
  "They have been there longer than any question you were ever asked, and " +
  "they will still be there when this one is done. " +
  "You can stay here as long as the stars do.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
mkdirSync(outDir, { recursive: true });
// Clear only the contents of the output dir, never the dir itself.
for (const name of readdirSync(outDir)) {
  rmSync(join(outDir, name), { recursive: true, force: true });
}
writeFileSync(join(outDir, "entry.txt"), ENTRY_TEXT, "utf8");
