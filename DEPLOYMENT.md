# GitHub Pages Deployment Setup

## Automatic Deployment

This repository is configured for automatic deployment to GitHub Pages using GitHub Actions. Every push to the `main` branch will trigger a new deployment.

## Repository Settings

To enable GitHub Pages for this repository, follow these steps:

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Select "gh-pages" as the branch
6. Select "/ (root)" as the folder
7. Click "Save"

## First Deployment

After pushing the code with the GitHub Actions workflow:

1. The workflow will run automatically on push to `main`
2. It will build the project and deploy to the `gh-pages` branch
3. GitHub Pages will serve the content from the `gh-pages` branch
4. Your app will be available at: https://mikelyons.github.io/study-game

## Manual Deployment

You can also deploy manually using:

```bash
npm run deploy
```

This command will:
1. Build the project (`npm run build`)
2. Deploy the `dist` folder to the `gh-pages` branch using `gh-pages` package

## Configuration Files

The deployment setup includes:

- **.github/workflows/deploy.yml** - GitHub Actions workflow for automatic deployment
- **vite.config.ts** - Vite configuration with correct base path (`/study-game`)
- **package.json** - Homepage URL and deploy scripts
- **README.md** - Updated with link to live app

## Troubleshooting

If the deployment fails:

1. Check the Actions tab in your GitHub repository for error logs
2. Ensure the repository has GitHub Pages enabled
3. Verify that the `main` branch protection rules (if any) allow the workflow to run
4. Make sure the build completes successfully locally with `npm run build`