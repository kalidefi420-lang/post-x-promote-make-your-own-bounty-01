import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// Entry program for the make.fun bounty
// "Promote make.fun's make-your-own-bounty post on X".
//
// It copies POST.json (the address of the entrant's X post) from the
// repository root into the output directory, so the house can read it.
// Standard library only; no network access; prints nothing on success.

const botDir: string = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
copyFileSync(join(botDir, "POST.json"), join(outputDir, "POST.json"));
