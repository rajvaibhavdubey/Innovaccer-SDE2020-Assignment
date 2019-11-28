
# [Innovaccer HackerCamp '19](https://github.com/rajvaibhavdubey/Innovaccer-SDE2020-Assignment)

## Assignment for SDE - Intern (Applications)

- **NodeJS** using Express framework with **MongoDB** as database.
- [Innovaccer HackerCamp Homepage](https://www.innovaccer.com/hackercamp)
- Project [Homepage](https://github.com/rajvaibhavdubey/Innovaccer-SDE2020-Assignment)
- The Live Project is hosted on heroku [here](https://fast-wildwood-41816.herokuapp.com/)

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
