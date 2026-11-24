import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY_TEXT =
  "I spent the entire duration of the deadline drafting exactly 4,000 versions of this apology instead of completing the assigned project.";

const OUTPUT_PATH = "/output/entry.txt";

function writeEntry(path: string, text: string): void {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, text + "\n");
}

writeEntry(OUTPUT_PATH, ENTRY_TEXT);
