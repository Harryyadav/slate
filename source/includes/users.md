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
        ],
        "password_reset_in_progress": false
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
    "groups": [],
    "password_reset_in_progress": false
}
```

This endpoint returns a specific User resource.

**`GET /api/v2/users/{user_id}/`**

### URL Parameters

Parameter | Description
--------- | -----------
user_id   | The ID of the User to retrieve










## Get the Current User

```http
GET /api/v2/users/me/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "email": "user@example.com",
    "first_name": "Bob",
    "last_name": "Smith",
}
```

This endpoint returns the current User resource.










## Update the Current User

```http
PATCH /api/v2/users/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "email": "user@example.com",
    "first_name": "Bob",
    "last_name": "Smith",
}
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "email": "user@example.com",
    "first_name": "Bob",
    "last_name": "Smith",
}
```

Update the current User resource.
Note: only users with "Manage users & groups" can change email addresses.

**`PATCH /api/v2/users/me/`**

Fields        | Required | Description
--------------|----------|-------------
email         | No       | User's email
first_name    | No       | First name of the user
last_name     | No       | Last name of the user










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
    ],
    "password_reset_in_progress": true
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
PATCH /api/v2/users/599/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "email": "user@example.com",
    "first_name": "Bob",
    "last_name": "Smith",
    "groups": ["G2"],
    "role": "UR2"
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
    ],
    "password_reset_in_progress": true
}
```

Update a specific User resource.

**`PATCH /api/v2/users/{user_id}/`**

### URL Parameters

Parameter | Description
--------- | -----------
user_id   | The ID of the User to update










## Get Password Reset Info

```http
GET /api/v2/users/1/reset-password/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "expiry_date": "2016-09-30T14:51:55.889Z",
    "reset_url": "http://example.com/accounts/new-password/12e33fbfc0f5774"
}
```

This endpoint returns the password reset information for a specific user.
This endpoint only uses either basic or session authentication.

Note: If the returned fields are null, then there is no password reset in progress.

**`GET /api/v2/users/{user_id}/reset-password/`**










## Reset Password

```http
POST /api/v2/users/1/reset-password/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
```

Request a password reset for a specific user.

**`POST /api/v2/users/{user_id}/reset-password/`**










## Change Password

```http
POST /api/v2/users/me/password/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "current_password": "hunter2",
    "new_password": "superstrongpassword123"
}
```

```http
HTTP/1.1 200 OK

{"last_password_change":"2016-12-14T18:47:04.544Z"}
```

Changes the password for the current user.

This endpoint only uses either basic or session authentication.

**`POST /api/v2/users/me/password/`**










## Get Password Metadata

```http
GET /api/v2/users/me/password/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK

{"last_password_change":"2016-12-14T18:47:04.544Z"}
```

Gets metadata regarding the password for the current user.

This endpoint only uses either basic or session authentication.

**`GET /api/v2/users/me/password/`**










## Get Password Reset Questions

```http
GET /api/v2/users/me/password-reset-questions/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "last_modified": "2017-01-24T22:23:23.448047Z",
    "questions": [
        {
          "id": 1,
          "question": "What was your childhood nickname?"
        },
        {
          "id": 2,
          "question": "What is the street name of the house you grew up in?"
        },
        {
          "id": 3,
          "question": "What is your mothers middle name?"
        }
    ]
}
```

Get the password reset questions for the current user.
Note: answers will not be returned.

**`GET /api/v2/users/me/password-reset-questions/`**










## Change Password Reset Questions

```http
PATCH /api/v2/users/me/password-reset-questions/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "current_password": "superstrongpassword123",
    "questions": [
        {
            "question": "What was your childhood nickname?",
            "answer": "Hunter2"
        },
        {
            "question": "What is the street name of the house you grew up in?",
            "answer": "Younge"
        },
        {
            "question": "What is your mothers middle name?",
            "answer": "Jane"
        }
    ]
}
```

```http
HTTP/1.1 200 OK

{
    "last_modified": "2017-01-24T22:23:23.448047Z",
    "questions": [
        {
          "id": 1,
          "question": "What was your childhood nickname?"
        },
        {
          "id": 2,
          "question": "What is the street name of the house you grew up in?"
        },
        {
          "id": 3,
          "question": "What is your mothers middle name?"
        }
    ]
}
```

Changes the password reset questions for the current user.

Note: Any existing question not included will be overwritten. To exclude
a question from being overwritten/deleted, include it without a new answer.

**`PATCH /api/v2/users/me/password-reset-questions/`**
