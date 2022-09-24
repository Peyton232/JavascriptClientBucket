# TodoBudget.DefaultApi

All URIs are relative to *http://todobudget.swagger.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addAchievements**](DefaultApi.md#addAchievements) | **POST** /users/{id}/Achievements/ | add new Achievements
[**addAlert**](DefaultApi.md#addAlert) | **POST** /users/{id}/alerts | insert new alert
[**addBucket**](DefaultApi.md#addBucket) | **POST** /users/{id}/buckets | Creates a new Bucket
[**addUser**](DefaultApi.md#addUser) | **POST** /users | Creates a new User
[**deeleteTransaction**](DefaultApi.md#deeleteTransaction) | **DELETE** /users/{id}/buckets/{name}/transactions/{timestamp} | delete a transaction
[**deleteAchievement**](DefaultApi.md#deleteAchievement) | **DELETE** /users/{id}/Achievements/{name} | delete an Achievement by name
[**deleteAlert**](DefaultApi.md#deleteAlert) | **DELETE** /users/{id}/alerts/{name} | delete an Achievement by name
[**deleteBucket**](DefaultApi.md#deleteBucket) | **DELETE** /users/{id}/buckets/{name} | Deletes a bucket by name
[**deleteUser**](DefaultApi.md#deleteUser) | **DELETE** /users/{id} | Deletes a user by ID
[**findBucketByName**](DefaultApi.md#findBucketByName) | **GET** /users/{id}/buckets/{name} | Returns a bucket by name
[**findBuckets**](DefaultApi.md#findBuckets) | **GET** /users/{id}/buckets | returns all of this users buckets
[**findUserByID**](DefaultApi.md#findUserByID) | **GET** /users/{id} | Returns a user by ID
[**findUsers**](DefaultApi.md#findUsers) | **GET** /users | returns all users
[**getAchievement**](DefaultApi.md#getAchievement) | **GET** /users/{id}/Achievements/{name} | get an Achievement by name
[**getAchievements**](DefaultApi.md#getAchievements) | **GET** /users/{id}/Achievements/ | get all Achievements
[**getAlert**](DefaultApi.md#getAlert) | **GET** /users/{id}/alerts/{name} | delete an alert by name
[**getAlerts**](DefaultApi.md#getAlerts) | **GET** /users/{id}/alerts | get alerts
[**getTransaction**](DefaultApi.md#getTransaction) | **GET** /users/{id}/buckets/{name}/transactions/{timestamp} | get a transaction by timestamp
[**getTransactions**](DefaultApi.md#getTransactions) | **GET** /users/{id}/buckets/{name}/transactions | get transactions
[**insertTransaction**](DefaultApi.md#insertTransaction) | **POST** /users/{id}/buckets/{name}/transactions | Inserts a new transaction
[**updateAchievements**](DefaultApi.md#updateAchievements) | **PUT** /users/{id}/Achievements/ | update Achievement
[**updateAlert**](DefaultApi.md#updateAlert) | **PUT** /users/{id}/alerts | update an alert
[**updateBucket**](DefaultApi.md#updateBucket) | **PUT** /users/{id}/buckets | Update an existing bucket
[**updateTransaction**](DefaultApi.md#updateTransaction) | **PUT** /users/{id}/buckets/{name}/transactions | update a transaction
[**updateUser**](DefaultApi.md#updateUser) | **PUT** /users | Update an existing user



## addAchievements

> Achievement addAchievements(id, achievement)

add new Achievements

post new Achievements

### Example

```javascript
import TodoBudget from 'todo_budget';

let apiInstance = new TodoBudget.DefaultApi();
let id = 789; // Number | ID of user
let achievement = new TodoBudget.Achievement(); // Achievement | Achievements to add to the user
apiInstance.addAchievements(id, achievement, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of user | 
 **achievement** | [**Achievement**](Achievement.md)| Achievements to add to the user | 

### Return type

[**Achievement**](Achievement.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addAlert

> Alert addAlert(id, alert)

insert new alert

insert new alert

### Example

```javascript
import TodoBudget from 'todo_budget';

let apiInstance = new TodoBudget.DefaultApi();
let id = 789; // Number | ID of user
let alert = new TodoBudget.Alert(); // Alert | Alert to add to the user
apiInstance.addAlert(id, alert, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of user | 
 **alert** | [**Alert**](Alert.md)| Alert to add to the user | 

### Return type

[**Alert**](Alert.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addBucket

> Bucket addBucket(id, bucket)

Creates a new Bucket

Creates a new bucket for a user

### Example

```javascript
import TodoBudget from 'todo_budget';

let apiInstance = new TodoBudget.DefaultApi();
let id = 56; // Number | user id
let bucket = new TodoBudget.Bucket(); // Bucket | bucket to add to the store
apiInstance.addBucket(id, bucket, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| user id | 
 **bucket** | [**Bucket**](Bucket.md)| bucket to add to the store | 

### Return type

[**Bucket**](Bucket.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addUser

> User addUser(user)

Creates a new User

Creates a new user in the datbase. Duplicates are allowed

### Example

```javascript
import TodoBudget from 'todo_budget';

let apiInstance = new TodoBudget.DefaultApi();
let user = new TodoBudget.User(); // User | user to add to the store
apiInstance.addUser(user, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**User**](User.md)| user to add to the store | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deeleteTransaction

> Transaction deeleteTransaction(id, name, timestamp)

delete a transaction

delete a transaction

### Example

```javascript
import TodoBudget from 'todo_budget';

let apiInstance = new TodoBudget.DefaultApi();
let id = 789; // Number | ID of user
let name = "name_example"; // String | name of bucket
let timestamp = "timestamp_example"; // String | timestamp of transaction
apiInstance.deeleteTransaction(id, name, timestamp, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of user | 
 **name** | **String**| name of bucket | 
 **timestamp** | **String**| timestamp of transaction | 

### Return type

[**Transaction**](Transaction.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteAchievement

> Achievement deleteAchievement(id, name)

delete an Achievement by name

delete an Achievement

### Example

```javascript
import TodoBudget from 'todo_budget';

let apiInstance = new TodoBudget.DefaultApi();
let id = 789; // Number | ID of user
let name = "name_example"; // String | name of Achievement
apiInstance.deleteAchievement(id, name, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of user | 
 **name** | **String**| name of Achievement | 

### Return type

[**Achievement**](Achievement.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteAlert

> Alert deleteAlert(id, name)

delete an Achievement by name

delete an Achievement

### Example

```javascript
import TodoBudget from 'todo_budget';

let apiInstance = new TodoBudget.DefaultApi();
let id = 789; // Number | ID of user
let name = "name_example"; // String | name of alert
apiInstance.deleteAlert(id, name, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of user | 
 **name** | **String**| name of alert | 

### Return type

[**Alert**](Alert.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteBucket

> deleteBucket(id, name)

Deletes a bucket by name

deletes a single bucket based on the name supplied

### Example

```javascript
import TodoBudget from 'todo_budget';

let apiInstance = new TodoBudget.DefaultApi();
let id = 789; // Number | ID of user to delete
let name = "name_example"; // String | name of bucket to fetch
apiInstance.deleteBucket(id, name, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of user to delete | 
 **name** | **String**| name of bucket to fetch | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteUser

> deleteUser(id)

Deletes a user by ID

deletes a single user based on the ID supplied

### Example

```javascript
import TodoBudget from 'todo_budget';

let apiInstance = new TodoBudget.DefaultApi();
let id = 789; // Number | ID of user to delete
apiInstance.deleteUser(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of user to delete | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findBucketByName

> Bucket findBucketByName(id, name)

Returns a bucket by name

Returns a bucket based on a name

### Example

```javascript
import TodoBudget from 'todo_budget';

let apiInstance = new TodoBudget.DefaultApi();
let id = 56; // Number | user id
let name = "name_example"; // String | name of bucket to fetch
apiInstance.findBucketByName(id, name, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| user id | 
 **name** | **String**| name of bucket to fetch | 

### Return type

[**Bucket**](Bucket.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findBuckets

> [Bucket] findBuckets(id)

returns all of this users buckets

Returns all buckets from a specific user

### Example

```javascript
import TodoBudget from 'todo_budget';

let apiInstance = new TodoBudget.DefaultApi();
let id = 56; // Number | user id
apiInstance.findBuckets(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| user id | 

### Return type

[**[Bucket]**](Bucket.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findUserByID

> User findUserByID(id)

Returns a user by ID

Returns a user based on a single ID

### Example

```javascript
import TodoBudget from 'todo_budget';

let apiInstance = new TodoBudget.DefaultApi();
let id = 789; // Number | ID of user to fetch
apiInstance.findUserByID(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of user to fetch | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findUsers

> [User] findUsers(opts)

returns all users

Returns all users from the system that the user has access to

### Example

```javascript
import TodoBudget from 'todo_budget';

let apiInstance = new TodoBudget.DefaultApi();
let opts = {
  'limit': 56 // Number | maximum number of results to return
};
apiInstance.findUsers(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| maximum number of results to return | [optional] 

### Return type

[**[User]**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAchievement

> Achievement getAchievement(id, name)

get an Achievement by name

get an Achievement

### Example

```javascript
import TodoBudget from 'todo_budget';

let apiInstance = new TodoBudget.DefaultApi();
let id = 789; // Number | ID of user
let name = "name_example"; // String | name of Achievement
apiInstance.getAchievement(id, name, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of user | 
 **name** | **String**| name of Achievement | 

### Return type

[**Achievement**](Achievement.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAchievements

> getAchievements(id)

get all Achievements

get all Achievements

### Example

```javascript
import TodoBudget from 'todo_budget';

let apiInstance = new TodoBudget.DefaultApi();
let id = 789; // Number | ID of user
apiInstance.getAchievements(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of user | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAlert

> Alert getAlert(id, name)

delete an alert by name

delete an alert

### Example

```javascript
import TodoBudget from 'todo_budget';

let apiInstance = new TodoBudget.DefaultApi();
let id = 789; // Number | ID of user
let name = "name_example"; // String | name of alert
apiInstance.getAlert(id, name, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of user | 
 **name** | **String**| name of alert | 

### Return type

[**Alert**](Alert.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAlerts

> getAlerts(id)

get alerts

show alerts

### Example

```javascript
import TodoBudget from 'todo_budget';

let apiInstance = new TodoBudget.DefaultApi();
let id = 789; // Number | ID of user
apiInstance.getAlerts(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of user | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTransaction

> Transaction getTransaction(id, name, timestamp)

get a transaction by timestamp

get a transaction by timestamp

### Example

```javascript
import TodoBudget from 'todo_budget';

let apiInstance = new TodoBudget.DefaultApi();
let id = 789; // Number | ID of user
let name = "name_example"; // String | name of bucket
let timestamp = "timestamp_example"; // String | timestamp of transaction
apiInstance.getTransaction(id, name, timestamp, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of user | 
 **name** | **String**| name of bucket | 
 **timestamp** | **String**| timestamp of transaction | 

### Return type

[**Transaction**](Transaction.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTransactions

> getTransactions(id, name)

get transactions

get transactions

### Example

```javascript
import TodoBudget from 'todo_budget';

let apiInstance = new TodoBudget.DefaultApi();
let id = 789; // Number | ID of user
let name = "name_example"; // String | name of bucket
apiInstance.getTransactions(id, name, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of user | 
 **name** | **String**| name of bucket | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## insertTransaction

> Transaction insertTransaction(id, name, transaction)

Inserts a new transaction

insert new transaction

### Example

```javascript
import TodoBudget from 'todo_budget';

let apiInstance = new TodoBudget.DefaultApi();
let id = 789; // Number | ID of user
let name = "name_example"; // String | name of bucket
let transaction = new TodoBudget.Transaction(); // Transaction | transaction to add to the user
apiInstance.insertTransaction(id, name, transaction, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of user | 
 **name** | **String**| name of bucket | 
 **transaction** | [**Transaction**](Transaction.md)| transaction to add to the user | 

### Return type

[**Transaction**](Transaction.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateAchievements

> Achievement updateAchievements(id, achievement)

update Achievement

update an Achievement

### Example

```javascript
import TodoBudget from 'todo_budget';

let apiInstance = new TodoBudget.DefaultApi();
let id = 789; // Number | ID of user
let achievement = new TodoBudget.Achievement(); // Achievement | Achievements to update on the user
apiInstance.updateAchievements(id, achievement, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of user | 
 **achievement** | [**Achievement**](Achievement.md)| Achievements to update on the user | 

### Return type

[**Achievement**](Achievement.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateAlert

> Alert updateAlert(id, alert)

update an alert

update an alert

### Example

```javascript
import TodoBudget from 'todo_budget';

let apiInstance = new TodoBudget.DefaultApi();
let id = 789; // Number | ID of user
let alert = new TodoBudget.Alert(); // Alert | Alert to update on the user
apiInstance.updateAlert(id, alert, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of user | 
 **alert** | [**Alert**](Alert.md)| Alert to update on the user | 

### Return type

[**Alert**](Alert.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateBucket

> Bucket updateBucket(id, bucket)

Update an existing bucket

Find a user and update their data

### Example

```javascript
import TodoBudget from 'todo_budget';

let apiInstance = new TodoBudget.DefaultApi();
let id = 56; // Number | user id
let bucket = new TodoBudget.Bucket(); // Bucket | Bucket to update
apiInstance.updateBucket(id, bucket, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| user id | 
 **bucket** | [**Bucket**](Bucket.md)| Bucket to update | 

### Return type

[**Bucket**](Bucket.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateTransaction

> Transaction updateTransaction(id, name)

update a transaction

update a transaction

### Example

```javascript
import TodoBudget from 'todo_budget';

let apiInstance = new TodoBudget.DefaultApi();
let id = 789; // Number | ID of user
let name = "name_example"; // String | name of bucket
apiInstance.updateTransaction(id, name, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of user | 
 **name** | **String**| name of bucket | 

### Return type

[**Transaction**](Transaction.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateUser

> User updateUser(user)

Update an existing user

Find a user and update their data

### Example

```javascript
import TodoBudget from 'todo_budget';

let apiInstance = new TodoBudget.DefaultApi();
let user = new TodoBudget.User(); // User | User to update
apiInstance.updateUser(user, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**User**](User.md)| User to update | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

