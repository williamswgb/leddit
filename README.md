# Leddit

This is a reddit-clone app that follows the subreddit view and actions.
This is just purely front-end part without having connection to any back-end server.
You can view it here https://leddit.herokuapp.com.

## Table of Contents

1. [Technology](#technology)
2. [Folder Structure](#folder-structure)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Test](#test)
6. [Build](#build)
7. [Process of Creation](#process-of-creation)

## Implementation

### Technology
- [ReactJS](https://github.com/facebook/react) (Web Front-End Framework)
- [React-router](https://github.com/ReactTraining/react-router) (Declarative routing for React)
- [Redux](https://github.com/reactjs/redux) (Predictable Single State Container)
- [Redux-thunk](https://github.com/gaearon/redux-thunk) (Thunk middleware for redux)
- [Jest](https://github.com/facebook/jest) (Testing library)
- [Enzyme](https://github.com/airbnb/enzyme) (JavaScript Testing utilities for React)

### Folder Structure
    .
    ├── config                # Configuration files
    ├── public                # Assets files
    ├── scripts               # Scripts files
    ├── src                   # Source files
        ├── components            # Basic Components
        ├── scenes                # Basic scenes (pages)
        ├── services              # Basic services (util)
        ├── src                   # Source files
        ├── App.js                # Main app for rendering scenes
        ├── index.js              # Index file for rendering App.js
        ├── store.js              # Redux store configuration file
        └── style.css             # Main app style file
    ├── .travis.yml           # Travis CI configuration file
    ├── .eslinrc.json         # Linter eslint configuration file
    ├── .gitignore            # git ignore configuration file
    ├── package-lock.json     # Installed Package activity history file
    ├── package.json          # Installed Package list
    └── README.md             # Readme file

The structure of the folder and file in src are built by separating every files as much as possible.
Every components will be separated into 2 component, presentational (View) and container (index) component.
The principle of building with this structure are for scalability and maintainability purpose.

### Installation
Clone the repository and run this command
```sh
npm install
```

### Usage
After installing all the packages, run this command
```sh
npm start
```
Your default browser will automatically opens with the app. You can also access it from http://localhost:3000/

### Test
Testing is done using [Jest](https://github.com/facebook/jest) which is built-in library framework from **create-react-app**, and [Enzyme](https://github.com/airbnb/enzyme).

To run the test, run this command in terminal
```sh
npm test
```
You can run the test in the new terminal while running the app. Testing can be done without running your app

Optionally, you can also generate a coverage report for the whole test results.
```sh
npm test -- --coverage
```

### Build
To build the app for production, run this command
```sh
npm run build
```
This will generate the build folder for production

### Process of Creation
- I used [create-react-app](https://github.com/facebookincubator/create-react-app) to generate the app initially.
- All files inside folder config, public, scripts are all generated automatically by **create-react-app**.
- Everything inside the src folder are originally written by me (except for registerServiceWorker.js in src/services, that file is also generated by **create-react-app** as well)
- I use the ES6/ES7 syntax as much as possible.
- I only include the unit testing for all parts of the app. The tests cover mostly for the basic components as well as Redux reducer and action. The rest of components and scenes are just covered with basic test.
- I deploy the app to the [Heroku](https://www.heroku.com) server. (https://leddit.herokuapp.com)
- I use continuous integration for development of this project using [Travis CI](https://travis-ci.org/). It runs all the test suites every time I push some changes to the git repository.
