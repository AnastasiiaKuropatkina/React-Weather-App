Create React Weather App with using the OpenWeatherMap API and GeoDB API with places autocomplete.
## Installation
Clone the repo and run `npm install` in the root directory to install the dependencies. To use the application locally, run `npm start` in the root directory and navigate to http://localhost:3000 in your browser. The page will reload if you make edits.

## First Installation
```bash
node -v
npx create-react-app react-weather-app

cd react-weather-app
```

## Additional packages
```bash
npm i react-accessible-accordion
npm i react-select-async-paginate
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

## Deployment

### 3. Install the gh-pages npm package
Install the [gh-pages](https://github.com/tschaub/gh-pages) npm package and designate it as a [development dependency](https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file):
```bash
npm install gh-pages --save-dev
```
At this point, the `gh-pages` npm package is installed on your computer and the React app's dependence upon it is documented in the React app's `package.json` file.

### 4. Add a `homepage` property to the `package.json` file
- Open the `package.json` file in a text editor.
- Add a homepage property in this format*: `https://{username}.github.io/{repo-name}`

> * For a project site, that's the format. For a user site, the format is: `https://{username}.github.io`. You can read more about the `homepage` property in the "GitHub Pages" section of the `create-react-app` documentation.
```bash
{
  "name": "my-app",
  "version": "0.1.0",
+ "homepage": "https://gitname.github.io/react-gh-pages",
  "private": true,
```
At this point, the React app's `package.json` file includes a property named `homepage`.

### 5. Add deployment scripts to the **package.json** file

- Open the `package.json` file in a text editor (if it isn't already open in one).
- Add a `predeploy` property and a `deploy` property to the `scripts` object:
```bash
"scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
```
At this point, the React app's `package.json` file includes deployment scripts.

### 6. Add a "remote" that points to the GitHub repository
Add a "remote" to the local Git repository.

You can do that by issuing a command in this format:
```bash
git remote add origin https://github.com/{username}/{repo-name}.git
````
To customize that command for your situation, replace `{username}` with your GitHub username and replace `{repo-name}` with the name of the GitHub repository you created in Step 1.

> That command tells Git where I want it to push things whenever I—or the `gh-pages` npm package acting on my behalf—issue the `git push` command from within this local Git repository.

At this point, the local repository has a "remote" whose URL points to the GitHub repository you created in Step 1.

### 7. Push the React app to the GitHub repository
Push the React app to the GitHub repository
```bash
npm run deploy
```
> That will cause the `predeploy` and `deploy` scripts defined in `package.json` to run.

> Under the hood, the `predeploy` script will build a distributable version of the React app and store it in a folder named `build`. Then, the `deploy` script will push the contents of that folder to a new commit on the `gh-pages` branch of the GitHub repository, creating that branch if it doesn't already exist.

> By default, the new commit on the `gh-pages` branch will have a commit message of "Updates". You can specify a custom commit message via the `-m` option, like this:
```bash
npm run deploy -- -m "Deploy React app to GitHub Pages"
```
At this point, the GitHub repository contains a branch named `gh-pages`, which contains the files that make up the distributable version of the React app. However, we haven't configured GitHub Pages to *serve* those files yet.

### 8. Configure GitHub Pages
1.Navigate to the **GitHub Pages** settings page

- In your web browser, navigate to the GitHub repository
- Above the code browser, click on the tab labeled "Settings"
- In the sidebar, in the "Code and automation" section, click on "Pages"

2. Configure the "Build and deployment" settings like this:
- **Source**: Deploy from a branch
- **Branch**:

    - Branch: `gh-pages`

    - Folder: `/ (root)`

3. Click on the "Save" button

**That's it!** The React app has been deployed to GitHub Pages! 🚀

At this point, the React app is accessible to anyone who visits the `homepage` URL you specified in Step 4.

### 9. (Optional) Store the React *app's source code* on GitHub
In a previous step, the `gh-pages` npm package pushed the distributable version of the React app to a branch named `gh-pages` in the GitHub repository. However, the *source code* of the React app is not yet stored on GitHub.

In this step, I'll show you how you can store the source code of the React app on GitHub.

Commit the changes you made while you were following this tutorial, to the `master` branch of the local Git repository; then, push that branch up to the `master` branch of the GitHub repository.
```bash
$ git add .
$ git commit -m "Configure React app for deployment to GitHub Pages"
$ git push origin master
```
> I recommend exploring the GitHub repository at this point. It will have two branches: master and gh-pages. The master branch will contain the React app's source code, while the gh-pages branch will contain the distributable version of the React app.

