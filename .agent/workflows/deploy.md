---
description: Deploy changes to Vercel via GitHub push
---

# Deploy Workflow

After making ANY code changes to the SHAPE website, ALWAYS push to GitHub automatically. Do NOT wait for the user to ask.

// turbo-all

## Steps

1. Stage the modified files:
```bash
git add -A
```

2. Commit with a descriptive message:
```bash
git commit -m "Description of what was changed"
```

3. Push to main branch:
```bash
git push origin main
```

Vercel will automatically detect the push and deploy the changes.
