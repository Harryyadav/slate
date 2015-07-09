# Users

## Get All Users

```http
GET /api/v2/users/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [{
        "id": 682,
        "email": "frank@sdelements.com",
        "first_name": "Frank",
        "last_name": "Developer",
        "role": "Project Lead",
        "last_login": "2014-12-15T20:10:51.900775Z",
        "date_joined": "2014-04-16T19:43:47.883319Z",
        "is_active": true,
        "is_superuser": false
    }]
}
```

This endpoint returns a list of User resources.

**`GET /api/v2/users/`**










## Get a Specific User

```http
GET /api/v2/users/599/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": 599,
    "email": "user@example.com",
    "first_name": "Bob",
    "last_name": "Smith",
    "last_login": "2015-06-05T02:55:54.231254Z",
    "date_joined": "2015-06-05T02:55:54.231254Z",
    "is_active": true,
    "is_superuser": false,
    "role": "No Role",
    "groups": []
}
```

This endpoint returns a specific User resource.

**`GET /api/v2/users/{user_id}/`**

### URL Parameters

Parameter | Description
--------- | -----------
user_id   | The ID of the User to retrieve










## Create a User

```http
POST /api/v2/users/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "email": "user@example.com",
    "first_name": "Bob",
    "last_name": "Smith"
}
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": 599,
    "email": "user@example.com",
    "first_name": "Bob",
    "last_name": "Smith",
    "last_login": "2015-06-05T02:55:54.231254Z",
    "date_joined": "2015-06-05T02:55:54.231254Z",
    "is_active": true,
    "is_superuser": false,
    "role": "No Role",
    "groups": []
}
```

Create a User resource.

**`POST /api/v2/users/`**










## Update a specific User

```http
PUT /api/v2/users/599/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "email": "user@example.com",
    "first_name": "Bob",
    "last_name": "Smith",
    "groups":["G64"],
    “role”:”UR5”
}
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": 599,
    "email": "user@example.com",
    "first_name": "Bob",
    "last_name": "Smith",
    "last_login": "2015-06-05T02:55:54.231254Z",
    "date_joined": "2015-06-05T02:55:54.231254Z",
    "is_active": true,
    "is_superuser": false,
    "role": "Project Lead",
    "groups": ["Group2"]
}
```

Update a specific User resource.

**`PUT /api/v2/users/{user_id}/`**

### URL Parameters

Parameter | Description
--------- | -----------
user_id   | The ID of the User to update










## Delete a User

```http
DELETE /api/v2/users/599/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 204 NO CONTENT
```

This endpoint deletes a single User resource, as specified by the id parameter.

**`DELETE /api/v2/users/{user_id}/`**

### URL Parameters

Parameter | Description
--------- | --------------
user_id   | The id of the User to delete
