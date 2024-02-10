#Contact API Spec

## Create Contact API

Endpoint : POST /api/contacts

Headers : 
- Authorization : token

Request Body : 

```json 
{
    "first_name" : "Doni",
    "last_name" : "Aji",
    "email" : "Doniaji@gmail.com",
    "phone" : "673298631578204"
}
```

Request Body Succes : 
```json
{
    "data" : {
    "id" : 1,
    "first_name" : "Doni",
    "last_name" : "Aji",
    "email" : "Doniaji@gmail.com",
    "phone" : "673298631578204"
}
}
```
Request Body Error : 
```json
{
    "errors" : "Email is not valid"
}
```


## Update Contact API

Endpoint : PUT /api/contacts:id

Headers : 
- Authorization : token

Request Body : 
```json 
{
    "first_name" : "Doni",
    "last_name" : "Aji",
    "email" : "Doniaji@gmail.com",
    "phone" : "673298631578204"
}
```
Response Body Succes :
```json
{
    "data" : {
    "id" : 1,
    "first_name" : "Doni",
    "last_name" : "Aji",
    "email" : "Doniaji@gmail.com",
    "phone" : "673298631578204"
}
}
``` 

Request Body Error : 
```json
{
    "errors" : "Email is not valid format"
}
```

## Get Contact API

Endpoint : GET /api/contacts:id

Headers : 
- Authorization : token

Request Body Succes : 
```json
{
    "data" : {
    "id" : 1,
    "first_name" : "Doni",
    "last_name" : "Aji",
    "email" : "Doniaji@gmail.com",
    "phone" : "673298631578204"
}
}
```
Response Body Error : 

```json
{
    "errors" : "Contact is not found"
}
```

## Search Contact API

Endpoint : GET /api/contacts

Headers : 
- Authorization : token

Query params : 
- name : Search bt first_name or last_name, using like, optional
- email : Search bt email using like, optional
- phone : Search by phone using like,optional 
- page : number of page, default 1 
- size : size per page, default 10 

Response Body Succes :
```json
{
    "data" : [
{
    "id" : 1,
    "first_name" : "Doni",
    "last_name" : "Aji",
    "email" : "Doniaji@gmail.com",
    "phone" : "673298631578204"
},
{
        "id" : 2,
    "first_name" : "Doni",
    "last_name" : "Aji",
    "email" : "Doniaji@gmail.com",
    "phone" : "673298631578204"
}
], 
"pagging" : {
    "page" : 1,
    "total_page" : 3,
    "total_item" : 30
}
}
``` 

Response Body Error : 


## Remove Contact API

Endpoint : DELETE /api/contacts/:id

Headers : 
- Authorization : token


Request Body Succes : 
```json 
{
    "data" : "OK"
}
```
Request Body Error : 
```json
{
    "errors" : "Contact is not found"
}
```
