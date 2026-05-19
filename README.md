# mrchl.com

Minimal login-style splash for **mrchl.com** (GitHub Pages).

## GitHub Pages

1. GitHub repo → **Settings** → **Pages**
2. **Build and deployment** → Source: **Deploy from a branch**
3. Branch: `main` / Folder: `/ (root)`

If you use a custom domain, update `CNAME`.

## Error behavior

This is a static site: the login form is intentionally non-functional.
Any submit routes to a missing path so GitHub Pages serves `404.html`.
