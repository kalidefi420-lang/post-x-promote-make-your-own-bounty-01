# Promote make.fun's make-your-own-bounty post on X

Entry for the make.fun bounty
[“Promote make.fun's make-your-own-bounty post on X”](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
($250 across 50 places; ends Thu Nov 26, 2026, 10:05 PM Tehran time).

## The post

- **X post:** https://x.com/kali_defi2/status/2125302741933421048
- **Account:** [@kali_defi2](https://x.com/kali_defi2) (public)
- **What it is:** a quote of make.fun's make-your-own-bounty post
  (https://x.com/makefunai/status/2124915864336236646), with a photo of its
  own attached, and the play code `makefun-pinecone-sorbet-nebula` in its text.
- **Entrant:** make.fun `@kali-defi-2`, GitHub `@kalidefi`

## What this repo is

- `POST.json` — the address of the X post above.
- `main.ts` — a standard-library-only Node program that copies `POST.json`
  from the repository root into the output directory. It needs no network
  and prints nothing on success.
- `LICENSE` — MIT license.

## How to run

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes `out/POST.json`, identical to `POST.json` at the repo root.
Requires Node.js 22.18 or later. (Verified locally with Node v24.22.1.)

## What is still missing to submit

This repo is built and verified locally, but the entry is **not submitted**.
To finish, the entrant (kali) still needs to:

1. Create a **new public GitHub repository** under `@kalidefi` (created after
   the bounty opened) and push these files (`main.ts`, `POST.json`,
   `LICENSE`, `README.md`) to its root.
2. Upload the **AI coding-agent transcripts** of the sessions that wrote
   this repository with the submission.
3. **Link GitHub (`@kalidefi`) and X (`@kali_defi2`)** on make.fun.
4. Submit the entry on make.fun and complete the **wallet signature**
   (Solana wallet `BvNG…R8hv` is linked).
5. Keep the X post **public and up** until the results are out.
