#User API Spec

##Register User API

Endpoint : POST/api/users

Request Body : 

```json
{
"username" : "Doni",
"password" : "rahasia",
"name" : "Don"
}
```
Response Body Succes : 
```json
{
    "data" : "Doni",
    "name" : "Don"
}
```

Response Body Error : 
```json 
{
    "errors" : "Username already registered"
}
```
##Login User API

Endpoint : POST/api/useres/login

Request Body :
```json
{
    "username" : "Doni",
    "password" : "rahasia"
}
```

Response Body Succes :
```json
{
    "data" : {
        "token" : "unique-token"
    }
}
```

Response Body Errors : 
```json
{
    "errors" : "Username or password wrong"
}
```
##Update User API

Endpoint : PATCH/api/users/current 
/* pakai patch karena ingin mengganti parsial kalau put semua ditimpa */

Headers : 

- Authorization : token

Request Body :

```json
{
    "name" : "Doni Aji", // optional
    "password" : "new password" //optional
}
```

Response Body Succes : 

```json
{
    "data" : {
        "username" : "Don",
        "name" : "Doni Aji" 
    }
}
```
Response Body Error : 
```json
{
    "errors" : "Name Length Max 100"
}
```

##Get User API

Endpoint : GET/api/users/current

Headers:
- Authorization : token

Response Body Succes : 
```json
{
    "data" : {
        "username" : "Don",
        "name" : "Doni"
    }
}
```
Response Body Error : 
```json
{
    "errors" : "Unauthorized"
}
```

##Logout User API

Endpoint : DELETE/api/users/logout

Headers : 
- Authorization : token

Response Body Succes : 
```json
{
    "data" : "OK"
}
```

Response Body Error : 
```json
{
    "errors" : "Unauthorized"
}
```