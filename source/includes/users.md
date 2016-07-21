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
        "is_superuser": false,
        "role": "UR5",
        "groups": [
            {
                "id": "G1",
                "name": "Group1",
                "role": "Project Lead"
            }
        ]
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
    "last_name": "Smith",
    "role": "UR5",
    "groups": ["G1", "G2"]
}
```

```http
HTTP/1.1 201 CREATED
Content-Type: application/json

{
    "id": 599,
    "email": "user@example.com",
    "first_name": "Bob",
    "last_name": "Smith",
    "last_login": "2015-09-29T18:52:41.247207Z",
    "date_joined": "2015-09-29T18:52:41.247207Z",
    "is_active": true,
    "is_superuser": false,
    "role": "UR5",
    "groups": [
        {
            "id": "G1",
            "name": "Group1",
            "role": "Project Lead"
        },
        {
            "id": "G2",
            "name": "Group2",
            "role": "No Role"
        }
    ]
}
```

Create a User resource.

**`POST /api/v2/users/`**

Fields        | Required | Description
--------------|----------|-------------
email         | Yes      | User's email
first_name    | Yes      | First name of the user
last_name     | Yes      | Last name of the user
role          | No       | Id of the role to add user to
groups        | No       | Ids of the groups to add user to










## Update a specific User

```http
PUT /api/v2/users/599/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "email": "user@example.com",
    "first_name": "Bob",
    "last_name": "Smith",
    "groups": ["G2"],
    "role": "UR2"”"
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
    "role": "UR2",
    "groups": [
        {
            "id": "G2",
            "name": "Group2",
            "role": "No Role"
        }
    ]
}
```

Update a specific User resource.

**`PUT /api/v2/users/{user_id}/`**

### URL Parameters

Parameter | Description
--------- | -----------
user_id   | The ID of the User to update
