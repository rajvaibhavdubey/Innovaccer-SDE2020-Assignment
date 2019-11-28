
# [Innovaccer HackerCamp '20](https://github.com/rajvaibhavdubey/Innovaccer-SDE2020-Assignment)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/1ac554483fac462797ffa5a8b9adf2fa?style=flat-square)]()
[![Build Status](https://api.travis-ci.org/fossasia/badgeyay.svg?branch=development&style=flat-square)]()

## Assignment for SDE - Intern (Applications)

- **NodeJS** using Express framework with **MongoDB** as database.
- [Innovaccer HackerCamp Homepage](https://www.innovaccer.com/hackercamp)
- Project [Homepage](https://github.com/rajvaibhavdubey/Innovaccer-SDE2020-Assignment)
- The Live Project is hosted on heroku [here](https://fast-wildwood-41816.herokuapp.com/)

## Technology Stack

- Node.js
- MongoDB
- express routing
- ejs templating
- HTML, CSS , JS

> All the dependencies being used are listed in `package.json`.


## Installation

1. Clone the repository using `git clone` 
```bash
git clone https://github.com/rajvaibhavdubey/Innovaccer-SDE2020-Assignment
```


2. Create `.env` file as per the sample `EXAMPLE.env` file in the root of your project.
- The username and password are the credentials for smtp gmail Api twillio sms api.

*Lines beginning with '#' are comments and are not required in `.env`

 3. Use `npm` to install dependencies for the project

```bash
npm install
```


 5. Make sure, **MongoDB** is running at your configured `url` in `.env` file. If not installed, then install from [here](https://docs.mongodb.com/manual/installation/)

- Locally start mongod as

```bash
sudo service mongod restart
```

 6. Run the program either by `npm` or `yarn` using

```bash
npm start
```
> `npm startDev` script is for starting with `nodemon`.


The **console** logs the following if the app is running properly
```bash
Server started on port 3000!!!
```

## Project Folder Structure

> **Note**: The folder tree does not include sub-directories for common/generated folders. For example - `node_modules`.

 - Sub-directories of the folders marked with **' * '** are not shown for clarity.
 - Folders are typed in **bold**

```bash
─── Innovaccer-SDE2020-Assignment
    ├── server.js
    ├── controllers
    │   └── admin.js
    │   └── visitor.js
    ├── models
    │   └── admin.js
    │   └── user.js
    ├── passport
    │   └── passport-local.js
    ├── public
    |   ├── css
    │   |    └── dashboard.css
    │   |    └── login.css
    │   |    └── pricing.css  
    ├── views
    |   ├── host
    │   |    └── adminDash.ejs
    │   |    └── adminLogin.ejs
    │   |    └── adminSettings.ejs 
    │   |    └── adminSignup.ejs 
    |   ├── visitor
    │   |    └── visitorDash.ejs
    │   |    └── visitorLogin.ejs
    │   |    └── visitorSettings.ejs 
    │   |    └── visitorSignup.ejs 
    │   |    └── pastVisits.ejs 
    |   └──index.ejs
    ├── .env
    ├── .env.example
    ├── .gitignore
    ├── package.json

```
## Features
### The app supports following features

-   Different Signup and Login for Users and Host, to prevent ghosting
-   Password encryption at database
-   Personalized Dashboard for Users and Hosts
-   Users Dashboard shows hosts available to them , their past visits and a graph of past week. 
-   Hosts Dashboard shows the users which have visited them
-   Email and sms feature on check-in and check-out
-   Updation of credentials from settings

## Database Structure

### Host
![Host](https://raw.githubusercontent.com/rajvaibhavdubey/Innovaccer-SDE2020-Assignment/master/screenshots/hostDB.png)
### Visitor
![Visitor](https://raw.githubusercontent.com/rajvaibhavdubey/Innovaccer-SDE2020-Assignment/master/screenshots/visitorDB.png)

## Screenshits
- The screenshots for different pages of the app are in screenshots folder

## Contributions Best Practices

**Commits**

- Write clear meaningful git commit messages (Do read http://chris.beams.io/posts/git-commit/)
- Make sure your PR's description contains GitHub's special keyword references that automatically close the related issue when the PR is merged. (More info at https://github.com/blog/1506-closing-issues-via-pull-requests )
- When you make very very minor changes to a PR of yours (like for example fixing a failing travis build or some small style corrections or minor changes requested by reviewers) make sure you squash your commits afterwards so that you don't have an absurd number of commits for a very small fix. (Learn how to squash at https://davidwalsh.name/squash-commits-git )
- When you're submitting a PR for a UI-related issue, it would be really awesome if you add a screenshot of your change or a link to a deployment where it can be tested out along with your PR. It makes it very easy for the reviewers and you'll also get reviews quicker.

**Feature Requests and Bug Reports**

- When you file a feature request or when you are submitting a bug report to the [Issue tracker](https://github.com/rajvaibhavdubey/Innovaccer-SDE2020-Assignment/issues), make sure you add steps to reproduce it. Especially if that bug is some weird/rare one.

**Join the development**

- Before you join development, please set up the system on your local machine and go through the application completely. Press on any link/button you can find and see where it leads to. Explore. (Don't worry ... Nothing will happen to the app or to you due to the exploring :wink: Only thing that will happen is, you'll be more familiar with what is where and might even get some cool ideas on how to improve various aspects of the app.)
- If you would like to work on an issue, drop in a comment at the issue. If it is already assigned to someone, but there is no sign of any work being done, please free to drop in a comment so that the issue can be assigned to you if the previous assignee has dropped it entirely.
