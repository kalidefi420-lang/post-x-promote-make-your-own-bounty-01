// X-promotion entry for make.fun: the entrant's X post lives in POST.json
// next to this file. This program hands that address to the checker: it
// reads POST.json from the repository root, checks the address is a real
// X post URL, and copies the file into the output directory. Standard
// library only, no network; it prints nothing on success and fails loudly
// on a bad URL instead of handing in garbage.
//

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
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

// Check the post address before handing it in: a POST.json holding anything
// but an x.com URL would fail the checker, so refuse it here with a clear
// error instead of copying a bad address into the output.
const post = JSON.parse(readFileSync(join(botDir, "POST.json"), "utf8")) as { url?: unknown };
if (typeof post.url !== "string" || !post.url.startsWith("https://x.com/")) {
  console.error(`error: POST.json does not name an X post URL (got ${JSON.stringify(post.url)})`);
  process.exit(1);
}

copyFileSync(join(botDir, "POST.json"), join(outputDir, "POST.json"));
