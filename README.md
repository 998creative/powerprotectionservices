# Power Protection Services Website (WordPress)

This repository now deploys a **WordPress theme** (not the legacy Next.js app).

## Active Build

- Active theme source: `wordpress-theme/power-protection-services/`
- Theme package (for manual upload): `wordpress-theme/power-protection-services.zip`

## Deployment (998 Toolkit Theme Deploy)

Theme deployment is handled through your **998 Toolkit deploy method** using the GitHub repo secrets you added.

Workflow file:

- `.github/workflows/wp-theme-deploy.yml`

Expected secrets:

- `WP_DEPLOY_URL`
- `WP_DEPLOY_TOKEN`

Deploy behavior:

1. Changes are pushed to the repo.
2. Your deploy workflow/job packages the theme and calls the 998 deploy endpoint.
3. The deploy step posts **only** `wordpress-theme/power-protection-services/` as a zip upload to `WP_DEPLOY_URL`, authenticated with `WP_DEPLOY_TOKEN`.

The workflow is path-filtered so deployments only run when these change:

- `wordpress-theme/power-protection-services/**`
- `.github/workflows/wp-theme-deploy.yml`

Example deploy request (matches `998-site-toolkit` endpoint):

```bash
curl --request POST "$WP_DEPLOY_URL" \
  --header "x-wp-deploy-token: $WP_DEPLOY_TOKEN" \
  --form "theme_zip=@wordpress-theme/power-protection-services.zip;type=application/zip" \
  --form "theme_slug=power-protection-services" \
  --form "commit_sha=$GITHUB_SHA"
```

## Important: Ignore Legacy Next.js App for Deploy

The Next.js codebase remains in this repository for historical/reference purposes, but it is **not** part of live WordPress deployment.

Do not deploy from these paths:

- `app/`
- `components/`
- `lib/`
- `public/`
- `scripts/`
- `package.json`, `next.config.ts`, Tailwind/TS configs, etc.

Only deploy:

- `wordpress-theme/power-protection-services/**`

Recommended GitHub Actions filter:

```yaml
on:
  push:
    branches: [main]
    paths:
      - "wordpress-theme/power-protection-services/**"
      - ".github/workflows/**"
```

## WordPress Theme Setup

For page templates, slugs, manuals notes, and install details, see:

- `wordpress-theme/power-protection-services/README.md`
