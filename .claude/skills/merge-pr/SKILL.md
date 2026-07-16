---
name: merge-pr
description: Rebase main into a PR branch, squash all commits into one, and keep PR open for review
effort: medium
---

# Squash and Prepare PR for Review

## Usage

Trigger this skill to clean up a PR branch by running `/merge-pr <pr_number>`.

## Workflow

1. **Fetch PR Info:** Use `gh pr view` to get the PR title and description.
2. **Checkout Branch:** Switch to the PR's source branch.
3. **Rebase Main Into Branch:** Rebase main into the current branch with `git rebase origin/main`.
4. **Squash Commits:** Reset to a temporary commit while keeping changes staged.
5. **Create Single Commit:** Create one commit using the PR title as the commit message, incorporating key details from the PR description.
6. **Verify:** Show the commit and ask for confirmation before pushing.
7. **Push:** Push the squashed commit to the branch (force push if necessary).
8. **Keep PR Open:** Leave the PR open for review and future merging.

## Rules

- Use the PR title as the primary commit message.
- Include relevant context from the PR description in the commit body if it adds clarity.
- Do NOT include testing plan or "What Changed" lists in the commit message — the commit message should explain the *why* and *what* concisely.
- Always ask for confirmation before pushing.
- Use force push only if rebasing has changed the history.
- Ensure the final commit message follows Conventional Commits format.
- The PR remains open after this skill completes — do NOT merge it.

## Example

PR Title: `feat: add authentication and component structure`

Resulting commit message:
```
feat: add authentication and component structure

- Integrated Neon Postgres with Drizzle ORM
- Implemented NextAuth-based sign in/sign out
- Created Header, Navigation, and User Dropdown components
- Added account dashboard with profile and security sections
```
