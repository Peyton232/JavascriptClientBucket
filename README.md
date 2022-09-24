# todo_budget

TodoBudget - JavaScript client for todo_budget
API for Todo Budget app
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install todo_budget --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your todo_budget from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var TodoBudget = require('todo_budget');


var api = new TodoBudget.DefaultApi()
var id = 789; // {Number} ID of user
var achievement = new TodoBudget.Achievement(); // {Achievement} Achievements to add to the user
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.addAchievements(id, achievement, callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://todobudget.swagger.io/api*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*TodoBudget.DefaultApi* | [**addAchievements**](docs/DefaultApi.md#addAchievements) | **POST** /users/{id}/Achievements/ | add new Achievements
*TodoBudget.DefaultApi* | [**addAlert**](docs/DefaultApi.md#addAlert) | **POST** /users/{id}/alerts | insert new alert
*TodoBudget.DefaultApi* | [**addBucket**](docs/DefaultApi.md#addBucket) | **POST** /users/{id}/buckets | Creates a new Bucket
*TodoBudget.DefaultApi* | [**addUser**](docs/DefaultApi.md#addUser) | **POST** /users | Creates a new User
*TodoBudget.DefaultApi* | [**deeleteTransaction**](docs/DefaultApi.md#deeleteTransaction) | **DELETE** /users/{id}/buckets/{name}/transactions/{timestamp} | delete a transaction
*TodoBudget.DefaultApi* | [**deleteAchievement**](docs/DefaultApi.md#deleteAchievement) | **DELETE** /users/{id}/Achievements/{name} | delete an Achievement by name
*TodoBudget.DefaultApi* | [**deleteAlert**](docs/DefaultApi.md#deleteAlert) | **DELETE** /users/{id}/alerts/{name} | delete an Achievement by name
*TodoBudget.DefaultApi* | [**deleteBucket**](docs/DefaultApi.md#deleteBucket) | **DELETE** /users/{id}/buckets/{name} | Deletes a bucket by name
*TodoBudget.DefaultApi* | [**deleteUser**](docs/DefaultApi.md#deleteUser) | **DELETE** /users/{id} | Deletes a user by ID
*TodoBudget.DefaultApi* | [**findBucketByName**](docs/DefaultApi.md#findBucketByName) | **GET** /users/{id}/buckets/{name} | Returns a bucket by name
*TodoBudget.DefaultApi* | [**findBuckets**](docs/DefaultApi.md#findBuckets) | **GET** /users/{id}/buckets | returns all of this users buckets
*TodoBudget.DefaultApi* | [**findUserByID**](docs/DefaultApi.md#findUserByID) | **GET** /users/{id} | Returns a user by ID
*TodoBudget.DefaultApi* | [**findUsers**](docs/DefaultApi.md#findUsers) | **GET** /users | returns all users
*TodoBudget.DefaultApi* | [**getAchievement**](docs/DefaultApi.md#getAchievement) | **GET** /users/{id}/Achievements/{name} | get an Achievement by name
*TodoBudget.DefaultApi* | [**getAchievements**](docs/DefaultApi.md#getAchievements) | **GET** /users/{id}/Achievements/ | get all Achievements
*TodoBudget.DefaultApi* | [**getAlert**](docs/DefaultApi.md#getAlert) | **GET** /users/{id}/alerts/{name} | delete an alert by name
*TodoBudget.DefaultApi* | [**getAlerts**](docs/DefaultApi.md#getAlerts) | **GET** /users/{id}/alerts | get alerts
*TodoBudget.DefaultApi* | [**getTransaction**](docs/DefaultApi.md#getTransaction) | **GET** /users/{id}/buckets/{name}/transactions/{timestamp} | get a transaction by timestamp
*TodoBudget.DefaultApi* | [**getTransactions**](docs/DefaultApi.md#getTransactions) | **GET** /users/{id}/buckets/{name}/transactions | get transactions
*TodoBudget.DefaultApi* | [**insertTransaction**](docs/DefaultApi.md#insertTransaction) | **POST** /users/{id}/buckets/{name}/transactions | Inserts a new transaction
*TodoBudget.DefaultApi* | [**updateAchievements**](docs/DefaultApi.md#updateAchievements) | **PUT** /users/{id}/Achievements/ | update Achievement
*TodoBudget.DefaultApi* | [**updateAlert**](docs/DefaultApi.md#updateAlert) | **PUT** /users/{id}/alerts | update an alert
*TodoBudget.DefaultApi* | [**updateBucket**](docs/DefaultApi.md#updateBucket) | **PUT** /users/{id}/buckets | Update an existing bucket
*TodoBudget.DefaultApi* | [**updateTransaction**](docs/DefaultApi.md#updateTransaction) | **PUT** /users/{id}/buckets/{name}/transactions | update a transaction
*TodoBudget.DefaultApi* | [**updateUser**](docs/DefaultApi.md#updateUser) | **PUT** /users | Update an existing user


## Documentation for Models

 - [TodoBudget.Achievement](docs/Achievement.md)
 - [TodoBudget.Alert](docs/Alert.md)
 - [TodoBudget.Bucket](docs/Bucket.md)
 - [TodoBudget.Error](docs/Error.md)
 - [TodoBudget.Profile](docs/Profile.md)
 - [TodoBudget.Transaction](docs/Transaction.md)
 - [TodoBudget.User](docs/User.md)
 - [TodoBudget.UserAllOf](docs/UserAllOf.md)


## Documentation for Authorization

All endpoints do not require authorization.