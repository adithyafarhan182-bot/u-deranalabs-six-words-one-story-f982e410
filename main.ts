// Six Words, One Story — u-deranalabs-six-words-one-story-f982e410
// Writes one complete six-word story to /output/entry.txt.
// The story: "The train left. Her ticket stayed."
// A departure happened; she did not board. The second sentence turns the
// first — she stayed behind, by choice, by loss, or by a missed chance —
// and the why is left for the reader to fill in.

import { mkdirSync, writeFileSync } from "node:fs";

const STORY = "The train left. Her ticket stayed.";

// The gate requires 1-60 chars of UTF-8 text; the judge requires exactly
// six words. Fail loudly instead of writing an invalid entry.
const words = STORY.trim().split(/\s+/);
if (words.length !== 6) throw new Error(`expected 6 words, got ${words.length}`);
if (STORY.length > 60) throw new Error(`entry too long: ${STORY.length} chars`);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY, "utf8");
console.log(STORY);
