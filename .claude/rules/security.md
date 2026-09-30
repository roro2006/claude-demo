# Security
- Never read or write outside the repo working directory.
- No `eval`, `Function(...)`, or `child_process` with user input.
- Validate ids from the CLI with `Number()` and reject `NaN` before use.
- Never commit secrets, tokens, or `.env` files.
