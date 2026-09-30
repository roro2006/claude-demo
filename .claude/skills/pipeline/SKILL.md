---
name: pipeline
description: Run a multi-phase feature pipeline - research, plan, implement, review, verify - with each phase handled by a separate agent and handing off through files. Use for features bigger than a single edit.
---

# Feature pipeline

State lives in `.claude/pipeline/<feature>/`. Each phase reads the previous file and writes its own.

| Phase | Agent | Reads | Writes |
| --- | --- | --- | --- |
| 1. Research | `explorer` | the request | `01-research.md` |
| 2. Plan | `planner` | `01-research.md` | `02-plan.md` |
| 3. Implement | main session | `02-plan.md` | code + tests, `03-implement.md` |
| 4. Review | `code-reviewer` | `git diff`, `02-plan.md` | `04-review.md` |
| 5. Verify | main session | `04-review.md` | `05-verify.md` (`npm test` output) |

Rules:
- Do not start a phase until the previous file exists.
- If review finds blocking issues, loop back to phase 3.
- Stop after phase 5 and summarize; do not commit unless asked.
