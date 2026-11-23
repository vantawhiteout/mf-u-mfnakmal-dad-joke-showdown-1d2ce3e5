import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';

// The whole entry is this one joke, told the way a dad would tell it at the
// table: plain setup, a kid who misses it, and a straight-faced pun to finish.
const JOKE =
  "I told my son a joke about a roof. He said, 'I don't get it.' I said, 'It went right over your head.'";

const OUTPUT_PATH = '/output/entry.txt';
const MAX_CHARS = 200;

function writeEntry(joke: string): void {
  const text = joke.trim();

  // The gate needs UTF-8 text of 1..200 characters that is not only whitespace.
  if (text.length < 1 || text.length > MAX_CHARS || text.trim().length === 0) {
    throw new Error(`Joke must be 1-${MAX_CHARS} characters, got ${text.length}`);
  }

  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  // Write the joke exactly: no trailing newline, no decoration, no second text.
  writeFileSync(OUTPUT_PATH, text, 'utf8');
  console.log(`Wrote ${text.length} characters to ${OUTPUT_PATH}`);
}

writeEntry(JOKE);
