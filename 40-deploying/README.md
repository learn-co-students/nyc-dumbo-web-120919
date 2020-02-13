# Deploying: Heroku/GitHub Pages/Netlify

## SWBATs
- [ ] Understand the difference between static and dynamic sites
- [ ] Deploy a Rails app to Heroku
- [ ] Deploy a static site to GitHub Pages and Netlify

## Deploying Rails to Heroku

https://devcenter.heroku.com/articles/getting-started-with-rails6

What you'll need: 
- a Heroku account (https://www.heroku.com/)
- the Heroku CLI app (`$ brew tap heroku/brew && brew install heroku`)

With the Heroku CLI app installed: `$ heroku login` to connect your account to CLI

Next, cd into your Rails project directory and run `heroku create` to create a new Heroku app and connect it to your project via git.

After running `heroku create`, run `git push heroku master` to push your git repo up to the Heroku server. Any time you make changes to your master branch, you can `git push heroku master` again to update your code on Heroku's server.

You can run commands on the server by running `heroku run` - for example, we can run our seed file on the server by calling `heroku run rails db:seed`.

You can check the logs at any point by running `heroku logs` or looking at the error console on your app's page on heroku.com - this is helpful to see if there are any issues with the code you deployed.

### Heroku Notes
If you have any API keys, or other things you'd like to keep private (not tracked by git), you can use a `.env` file in development and the [dotenv gem](https://github.com/bkeepers/dotenv) to keep this info private in development. In production, you can use `heroku config` to set environment variables [see here for more](https://devcenter.heroku.com/articles/config-vars).

Also, make sure to check your CORS settings if you deploy your frontend site and want to limit requests from other servers!

Some common issues:
- Ruby version must be 2.5 and greater
	- Use RVM to install other versions of Ruby and change versions
	- Gems are installed for a specific version of Ruby, so if you change versions, you must reinstall gems
- Wrong version of bundler
	- Installing bundler problems: https://stackoverflow.com/questions/54087856/cant-find-gem-bundler-0-a-with-executable-bundle-gemgemnotfoundexceptio

### Deploying on Github Pages
For a static site (where we're just serving up files, not doing anything dynamic like routing or generating HTML on a server), GitHub pages is very simple to set up. The [GitHub Pages](https://pages.github.com/) site has a good tutorial, check the section on 'Project Site'.

Some notes:
- Make sure to update your API url to point to Heroku!
- Change the GitHub Pages section in your project's settings on GitHub to use GitHub Pages for your master branch: `https://github.com/<Username>/<Reponame>/settings`
- Your project will be published to `https://<Username>.github.io/<Reponame>/`.
- Any changes you push to master are automatically deployed!

### Deploying on Netlify
[Creating Deploys](https://docs.netlify.com/cli/get-started)

Netlify is another good option for static sites, it has a nice Continuous Integration/Continuous Deployment pipeline that makes it a good choice for React apps. It also will work fine for vanilla JS static sites!

- Install CLI tools: `$ npm install netlify-cli -g`
- Login: `$ netlify login`
  - This will open in browser to authenticate
- Initialize project: `$ netlify init`
- Select these options: 
  - Create & configure a new site
  - login with your Github credentials (if you haven't already connected your Github account)
  - Build command: leave blank for static sites (unless you have webpack or something that builds/bundles)
  - Directory: leave blank (if index.html is in your root)
  - netlify.toml is a build configuration, say yes to create

- Now any time you push to master it will also push to netlify using `$ git push`
- Open the project in browser with `$ netlify open`

#### Other useful bits
- Access to error logging via the heroku dashboard (More -> View logs)
- Access to environment variables on the settings page
- Use `heroku config` from your terminal to see config vars for a particular repo
  - this is very helpful to see if you able to access environment variables
- User `heroku run <TERMINAL COMMAND>` to run terminal commands on the Heroku server
  - ie. `heroku run rails console`

#### Bonus for mod 4+ projects when building with React common problems
- Frontend fetch URLs are all "localhost" but should be switched to your deployed backend's URL
	- Use the adapter pattern so your fetches are all in one place
	- Use the environment (`process.env.NODE_ENV`) to determine which URL to use
- If using React Router, use HashRouter for easier routing setup

### Helpful Links
* [Installing the heroku CLI](https://devcenter.heroku.com/articles/git#prerequisites-install-git-and-the-heroku-cli)
* [Deploying Static Sites to Heroku](https://devcenter.heroku.com/articles/static-sites-ruby)
* [GitHub Pages](https://pages.github.com/)
* [dotenv gem](https://github.com/bkeepers/dotenv)
