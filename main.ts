import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';

// The whole entry is this one joke. It has the shape a dad actually uses at
// the table: a flat setup, a kid who answers literally, and no wink from dad.
// "Sucks" is what a vacuum does and what a kid says about a bad joke, so the
// turn lands on the first read. It is fresher than the old "over your head"
// classic, and the final two words carry the entire punchline.
const JOKE = "I told my son a joke about a vacuum. He said, 'It sucks.'";

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
