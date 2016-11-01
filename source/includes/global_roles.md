# Global Roles

## Get All Global Roles

```http
GET /api/v2/global-roles/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [
        {
            "id": "UR4",
            "name": "Administrator",
            "description": "An administrator can create new..."
        },
        {
            "id": "UR5",
            "name": "No Role",
            "description": "This role confers no permissions."
        },
        {
            "id": "UR2",
            "name": "Project Lead",
            "description": "A project lead has permission to..."
        },
        {
            "id": "UR1",
            "name": "User",
            "description": "A regular SD Elements user has..."
        }
    ]
}
```

This endpoint returns a list of Global Role resources.










## Get a Specific Global Role

```http
GET /api/v2/global-roles/UR4/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": "UR4",
    "name": "Administrator",
    "description": "An administrator can create new..."
}
```

This endpoint returns a specific Global Role resource as specified by the id parameter.

**`GET /api/v2/global-roles/{global_role_id}/`**

### URL Parameters

Parameter      | Description
-------------- | ---------------
global_role_id | The id of the Global Role to retrieve










## Create a New Global Role

```http
POST /api/v2/global-roles/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "name": "Global Role",
    "description": "Can participate in projects.",
    "inherit_from": "UR1"
}
```

```http
HTTP/1.1 201 CREATED
Content-Type: application/json

{
    "id": "CUR1",
    "name": "Global Role",
    "description": "Can participate in projects.",
    "permissions": [
        "modify_self"
    ],
    "is_default": false
}
```

```http
POST /api/v2/global-roles/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "name": "New Global Role",
    "description": "Can create new applications and projects.",
    "permissions": [
        "add_project",
        "add_application"
    ],
    "is_default": true
}
```

```http
HTTP/1.1 201 CREATED
Content-Type: application/json

{
    "id": "CUR2",
    "name": "New Global Role",
    "description": "Can create new applications and projects.",
    "permissions": [
        "add_project",
        "add_application"
    ],
    "is_default": true
}
```

Fields       | Required | Description
-------------|----------|-------------
name         | Yes      | The name of the Global Role.
description  | Yes      | A description of the Global Role.
permissions  | No       | The permissions given to users who are assigned this Global Role.
inherit_from | No       | If inherit_from field is passed, then the permissions field gets set with the permissions of the parent Global Role.
is_default   | No       | Passing is_default as True will set the newly created Global Role as default role for the current organization.










## Update a Global Role

```http
PATCH /api/v2/global-roles/CUR2/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "permissions": [
        "archive_application",
        "add_project",
        "add_application"
    ],
    "is_default": true
}
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": "CUR2",
    "name": "New Global Role",
    "description": "Can create new applications and projects.",
    "permissions": [
        "archive_application",
        "add_project",
        "add_application"
    ],
    "is_default": true
}
```

**`PATCH /api/v2/global-roles/{global_role_id}/`**

### URL Parameters

Parameter       | Description
--------------- | -----------
global_role_id | The id of the Global Role to update

### Payload

Fields        | Required | Description
--------------|----------|---------------
name          | No       | The name of the Global Role.
description   | No       | Global Role description.
permissions   | No       | The permissions given to users who are assigned this Global Role.
is_default    | No       | Passing is_default as True will set the Global Role as default role for the current organization.










## Delete a Global Role

``` http
DELETE /api/v2/global-roles/CUR1/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "replacement": "UR1"
}
```

``` http
HTTP/1.1 204 NO CONTENT
```

**`DELETE /api/v2/global-roles/{global_role_id}/`**

### URL Parameters

Parameter       | Description
--------------- | -----------
global_role_id | The id of the Global Role to delete

### Payload

Fields        | Required | Description
--------------|----------|---------------
replacement   | Yes      | The id of the Global Role to replace the one to be deleted.
