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
            "description": "Can change project survey, ...",
            "permissions": [
                "edit_project_membership",
                "archive_project",
                "lock_project_survey",
                "write_task_note",
                "verify_task",
                "sync_with_alm",
                "edit_project_survey",
                "edit_project_details",
                "assign_task",
                "mark_task",
                "view_project",
                "create_project_specific_task"
            ]
        },
        {
            "id": "PR5",
            "name": "Normal",
            "description": "Can view project and update task statuses",
            "permissions": [
                "verify_task",
                "mark_task",
                "view_project",
                "write_task_note"
            ]
        },
        {
            "id": "PR6",
            "name": "Read Only",
            "description": "Can view project, but not modify it",
            "permissions": [
                "view_project"
            ]
        }
    ]
}
```

This endpoint returns a list of Project Role resources.
### URL Parameters

Parameter     | Description
------------- | -----------
ordering      | Sort project roles by the specified field. Prefix field name with minus to sort descending. Sortable fields: name.
search        | Filter project roles by performing a textual search on name.










## Get a Specific Project Role

```http
GET /api/v2/project-roles/CPR1/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": "CPR1",
    "name": "Custom Role",
    "description": "Can view project.",
    "permissions": [
        "view_project"
    ]
}
```

This endpoint returns a specific Project Role resource, specified by its id.

**`GET /api/v2/project-roles/{project_role_id}/`**

### URL Parameters

Parameter         | Description
----------------- | -----------
project_role_id   | The id of the Project Role to retrieve.










## Create a New Project Role

```http
POST /api/v2/project-roles/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "name": "New Project Role",
    "description": "Can view project!",
    "inherit_from": "PR6"
}
```

```http
HTTP/1.1 201 CREATED
Content-Type: application/json

{ 
    "id": "CPR3",
    "name": "New Project Role",
    "description": "Can view project!",
    "permissions": [
        "view_project"
    ]
}
```

```http
POST /api/v2/project-roles/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "name": "New Project Role",
    "description": "Can view project!",
    "permissions": [
        "view_project"
    ]
}
```

```http
HTTP/1.1 201 CREATED
Content-Type: application/json

{ 
    "id": "CPR3",
    "name": "New Project Role",
    "description": "Can view project!",
    "permissions": [
        "view_project"
    ]
}
```

Fields       | Required | Description
-------------|----------|-------------
name         | Yes      | The name of the Project Role.
description  | Yes      | A description of the Project Role.
permissions  | No       | The permissions given to users who are assigned this Project Role.
inherit_from | No       | If inherit_from field is passed, then the permissions field gets set with the permissions of the parent Project Role.










## Update a Project Role

```http
PATCH /api/v2/project-roles/CPR3/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "permissions": ["view_project", "archive_project"]
}
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{ 
    "id": "CPR3",
    "name": "New Project Role",
    "description": "Can view project!",
    "permissions": [
        "view_project",
        "archive_project"
    ]

}
```

**`PATCH /api/v2/project-roles/{project_role_id}/`**

### URL Parameters

Parameter       | Description
--------------- | -----------
project_role_id | The id of the Project Role to update

### Payload

Fields        | Required | Description
--------------|----------|---------------
name          | No       | The name of the Project Role.
description   | No       | Project Role description.
permissions   | No       | The permissions given to users who are assigned this Project Role.










## Delete a Project Role

``` http
DELETE /api/v2/project-roles/CPR1/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "replacement": "PR1"
}
```

``` http
HTTP/1.1 204 NO CONTENT
```

**`DELETE /api/v2/project-roles/{project_role_id}/`**

### URL Parameters

Parameter       | Description
--------------- | -----------
project_role_id | The id of the Project Role to delete

### Payload

Fields        | Required | Description
--------------|----------|---------------
replacement   | Yes      | The id of the Project Role to replace the one to be deleted.
