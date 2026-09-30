---
name: gh-pr
description: Open or inspect a GitHub pull request using the gh CLI directly instead of an MCP server. Use when asked to create a PR, check PR status, or read PR comments.
---

# GitHub PR via gh

Use the `gh` CLI. Do not load a GitHub MCP server for this.

- Create: `gh pr create --fill --base main`
- Status: `gh pr status` and `gh pr checks`
- Comments: `gh pr view --comments`

Before creating a PR: `npm test` must pass and `git status` must be clean.
Never merge a PR without being asked.
