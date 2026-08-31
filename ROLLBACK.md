# Rollback

If the rebuilt site needs to be undone, run this one line from the site folder:

```
git reset --hard pre-rebuild-2026-08 && git push --force origin main
```

That restores every file to how it looked on 2026-08-30 (commit 8a5478b, "Add Patrick Mork proposal page at /proposals/patrick-mork") and redeploys the old site on Netlify.

The same snapshot also lives on the branch `backup-old-site` if you'd rather look at the old files without changing `main`.
