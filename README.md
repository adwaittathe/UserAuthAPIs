# User Authentication REST Api

User authentication API can be used to easily authenticate users for mobile applications. The application returns JWT token after login/signup which is used later for the as a header for remaining APIs.\
API's are hosted on EC2.

## Table of content
* [Get Started](#get-started)
    * [Login](#login)
    * [SignUp](#signup)
    * [Get User Details](#get-user-details)
    * [Update User](#update-user)
    * [Delete User](#delete-user)
* [References](#references)

## Get Started
User-Authentication-API can be used to login, signup user and get user specific information.
> In the examples on this page, you would replace [TOKEN] with the token returned by this API after user SignUp/Login.
### Login 
> POST [server URL]/api/user/login
* Request Payload - 
   ```
   {
     "email" : "chandler@gmail.com",
     "password" : "123456"
   }
   ```
* Response Payload- 
   ```{
       "status": 200,
       "id": "5d8b97164dfcab1a47b215ed",
       "token":"[TOKEN]",
       "name": "Chandler Bing",
       "email": "chandler@gmail.com"
   }
   ```

* Status codes -
   * 200 - success
   * 400 - Invalid email/password


### Signup 
> POST [server URL]/api/user/signUp
* Request payload - 
   ```
   {
     "firstName":"Chandler",
     "lastName" : "Bing",
     "gender" : "Male",
     "contactNo" : "7047059630",
     "age" : "25",
     "email" : "chandler@gmail.com",
     "password" : "123456"
   }
   ```
* Response Payload -
   ```
   {
       "status": 200,
       "token": [TOKEN],
       "userId": "5d8b97164dfcab1a47b215ed",
       "name": "Chandler Bing",
       "email": "chandler@gmail.com",
       "contactNo": "7047059630"
   }
   ```
   
* Status codes -
   * 200 - success
   * 400 - Bad request(Some input parameter is not provided)


### Get user details 
> GET [server URL]/api/user/details
* Request Payload(Header) -
```
“token” :[TOKEN]
```
* Response Payload- 
```
{
    "status": 200,
    "userId": "5d8b97164dfcab1a47b215ed",
    "firstName": "Chandler",
    "lastName": "Bing",
    "email": "chandler@gmail.com",
    "gender": "Male",
    "contactNo": "7047059630",
    "age": "25",
    "createdAt": "2019-09-25T16:34:30.203Z"
}
```

* Status codes - 
   * 200 - success
   * 400 - Access denied. Token not provided
   * 401 - Invalid token

### Update user
> PUT [server URL]/api/user/update
* Request Payload -
```
{
  "firstName":"Joey",
  "lastName" : "Tribbiani",
  "gender" : "Male",
  "contactNo" : "7048763263",
  "age" : "20"
}
```

   * Header - 
   ```
   “token” : [TOKEN]
   ```
   
* Response Payload - 
```
{
    "status": 200,
    "message": "User details updated successfully"
}
```

* Status codes - 
   * 200 - success
   * 400 - User not found in the database
   * 401 - Invalid token

### Delete user
> DELETE [server URL]/api/user/delete

* Request Payload -

   * Header - “token” : [TOKEN]

* Response Payload - 
   ```
   {
    "status": 200,
    "message": "User details deleted successfully"
   }
   ```
* Status codes - 
   * 200 - success
   * 400 - Access Denied. Token Not provided / User not found in the database
   * 401 - Invalid token

## References
- [JWT](https://jwt.io) - Decode, Verify, and generate JWT
- [Node.js](https://nodejs.org/en/) - JavaScript runtime
- [Express](https://expressjs.com) - Node.js web application framework
- [@hapi/joi](https://www.npmjs.com/package/@hapi/joi) - Data validation
