# Deploying Your Portfolio to GitHub Pages

This guide will walk you through deploying your customized portfolio website to GitHub Pages.

**Step 1: Update `package.json` with Your Details**
*   Open the `package.json` file in the root of your project.
*   Find the line that looks like this:
    ```json
    "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPONAME/"
    ```
*   **Replace `YOUR_USERNAME` with your actual GitHub username.**
*   **Replace `YOUR_REPONAME` with the name of the GitHub repository where this portfolio is hosted.**
    For example, if your username is `jane-doe` and your repository is `my-portfolio`, the line should become:
    ```json
    "homepage": "https://jane-doe.github.io/my-portfolio/"
    ```
*   Save the `package.json` file.

**Step 2: Install Dependencies (if you haven't already)**
*   Open your terminal in the project's root directory.
*   If you haven't installed all the project packages yet (including `gh-pages`), run:
    ```bash
    npm install
    ```
    (or `yarn install` if you're using Yarn).

**Step 3: Deploy to GitHub Pages**
*   In your terminal, run the following command:
    ```bash
    npm run deploy
    ```
*   This command executes two main actions:
    1.  `predeploy` script (`npm run build`): This bundles your application into a static `build` folder.
    2.  `deploy` script (`gh-pages -d build`): This pushes the contents of the `build` folder to a new branch named `gh-pages` in your GitHub repository.

**Step 4: Configure GitHub Repository Settings**
*   Navigate to your repository on GitHub.com.
*   Click on the **Settings** tab.
*   In the left sidebar, select **Pages** (under the "Code and automation" section).
*   Under the "Build and deployment" section:
    *   For **Source**, choose **"Deploy from a branch"**.
    *   For **Branch**, ensure it is set to `gh-pages` with the folder as `/ (root)`. GitHub should automatically detect the `gh-pages` branch after you've run `npm run deploy`. If not, you might need to select it manually.
*   Your site should be live at the URL provided by GitHub Pages (e.g., `https://YOUR_USERNAME.github.io/YOUR_REPONAME/`) within a few minutes.

**Important Notes:**
*   **Commit Changes:** Before running `npm run deploy`, it's good practice to commit any changes you've made (like updating `package.json` or personalizing `src/portfolio.js`) to your main branch.
*   **Repository:** This guide assumes your project code is already hosted in a GitHub repository. If not, create a repository on GitHub and push your code first.
*   **Custom Domain:** If you own a custom domain and want to use it, you can configure it in the GitHub Pages settings for your repository after the site is successfully deployed.
