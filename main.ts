// Entry program for make.fun bounty gta6-clipper-01
// ("Clip GTA 6 for the most YouTube views").
//
// The entry itself is the YouTube Short linked in VIDEO.json: my agent
// found the GTA 6 moment (Windah Basudara spotting the crashed-plane
// Easter egg in Gameplay #3), cut it into a 48-second vertical clip with
// the make.fun pitch burned in, and uploaded it to the KlipViceID
// channel. This program's only job is the one the grader expects: copy
// VIDEO.json from the repository root into the output directory, where
// the gate reads the video's address and the house reads its views.
//
// Local run (mirrors the grader's environment variables):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const videoFile = 'VIDEO.json';

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(join(botDir, videoFile), join(outputDir, videoFile));
} catch (err) {
  console.error(`Could not copy ${videoFile} from ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}
