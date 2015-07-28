# Project Roles

## Get All Project Roles

```http
GET /api/v2/project-roles/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [
        {
            "id": "PR4",
            "name": "Manage Project",
            "description": "Can change project settings, ..."
        },
        {
            "id": "PR5",
            "name": "Normal",
            "description": "Can view project and update task statuses"
        },
        {
            "id": "PR6",
            "name": "Read Only",
            "description": "Can view project, but not modify it"
        }
    ]
}
```

This endpoint returns a list of Project Role resources.










## Get a Specific Project Role

```http
GET /api/v2/project-roles/PR4/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": "PR4",
    "name": "Manage Project",
    "description": "Can change project settings, ..."
}
```

This endpoint returns a specific Project Role resource, specified its id.

**`GET /api/v2/project-roles/{project_role_id}/`**
