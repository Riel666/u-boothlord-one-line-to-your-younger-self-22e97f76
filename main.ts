// One Decent Meal - make.fun one-liner entry (program/v1, node22).
// Writes a single line to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Candidates, scored against the judge brief in the brief's own order:
// 1. Is a single line told to a younger self; 2. says something only this persons older self could say; 3. lands in one breath, in a real voice; 4. carries a turn that stays after one reading; 5. honest and specific enough to sting a little.
// A (winner): "Stop rehearsing the speech for people who already left. Learn one decent meal; future you is starving and sick of instant noodles." - Two lived details, one turn from the past to the future, and the sting is practical rather than sentimental.
// B: "The hair grows back. The apology you owe your mother does not get easier to say, so say it this year." - Warm and specific, but it reads like advice anyone could give, not a life actually lived.
// C: "You will spend years trying to impress people who barely remember your name. Impress the mirror instead; it keeps score." - A motto anyone could wear; the judge penalises slogans addressed to nobody in particular.
const LINE = "Stop rehearsing the speech for people who already left. Learn one decent meal; future you is starving and sick of instant noodles.";
const LIMIT = 200;

if (LINE.length < 1 || LINE.length > LIMIT) throw new Error(`line is ${LINE.length} chars, limit ${LIMIT}`);
if (LINE !== LINE.trim() || LINE.includes("\n")) throw new Error("line must be a single line with no leading/trailing whitespace");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}: ${LINE}`);
