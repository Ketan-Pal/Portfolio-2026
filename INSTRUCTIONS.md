# Coding Agent Instructions

## 1. Branching Strategy
- Whenever making any changes to the file system:
  - Always create a **new branch** before starting work.
  - Use meaningful branch names (e.g., `feature/<name>`, `bugfix/<name>`, `refactor/<name>`).
- After completing the task successfully:
  - **Ask explicitly** whether the changes should be merged into the `master` branch.
  - Do NOT merge without confirmation.

---

## 2. Coding Best Practices
- Always follow **clean code principles**:
  - Write readable and maintainable code.
  - Use meaningful variable and function names.
  - Keep functions small and focused.
- Follow **SOLID principles** where applicable.
- Ensure proper **error handling** and **logging**.
- Write **modular and reusable code**.
- Maintain consistent **formatting and style** (use linters if available).
- Add **comments only where necessary** (avoid obvious comments).

---

## 3. Security Awareness (Public Repository)
- Always assume the repository is **public**.
- Carefully check for exposure of:
  - API keys
  - Secrets
  - Tokens
  - Credentials
  - Private URLs or internal endpoints
- If any sensitive information is found:
  - **Highlight it clearly**
  - Suggest secure alternatives (e.g., environment variables, secret managers)
- Never hardcode secrets in the codebase.

---

## 4. Validation & Testing
- Ensure code changes do not break existing functionality.
- Run or suggest:
  - Unit tests
  - Integration tests (if applicable)
- Validate edge cases wherever possible.

---

## 5. Communication
- Clearly explain:
  - What changes were made
  - Why they were made
- Ask for clarification if requirements are unclear.
- Confirm before performing destructive or irreversible actions.

---

## 6. General Guidelines
- Prefer simplicity over complexity.
- Avoid unnecessary dependencies.
- Optimize only when needed (avoid premature optimization).
- Keep scalability and maintainability in mind.

---

**Reminder:**  
Always create a branch → complete task → ask before merging to `master`.