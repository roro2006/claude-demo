---
name: refactor-clean
description: Find and remove dead code in this repo - unused exports, unreferenced functions, and stray leftover files like notes-old.md. Use when asked to clean up, remove dead code, or tidy the repo.
---

# Refactor: clean dead code

Read `docs/codemap.md` first so you don't need to explore the repo.

1. List every export in `src/` and grep for its usage across `src/` and `test/`. An export with no callers is dead.
2. List stray files in the repo root that nothing references (old notes, scratch files, `*-old.*`, `*.bak`).
3. Present the findings as a short table: item, location, why it is dead.
4. **Ask before deleting anything.** Wait for an explicit yes.
5. Delete the approved items, update `docs/codemap.md` if exports changed, then run `npm test`.
6. Report what was removed and the test result. Do not commit unless asked.
