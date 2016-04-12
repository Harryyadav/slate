# Projects

## Get All Projects

```http
GET /api/v2/projects/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [{
        "id": 1936,
        "slug": "project-test",
        "url": "http://example.com/bunits/bu-test/app-test/project-test",
        "application": 1280,
        "profile" : {
            "id": "P9",
            "name": "Android App"
        },
        "archived": false,
        "name": "Project Test",
        "creator": 1,
        "description": "API Project",
        "tags": ["foo", "bar"],
        "created": "2015-04-15T19:30:04.132712Z",
        "updated": "2015-04-15T19:57:15.042353Z",
        "parent": null,
        "users": [{
            "id": "1",
            "email": "test@example.com",
            "role": "PR4",
            "first_name": "Admin",
            "last_name": "Testerton"
        }],
        "groups": [{
            "id": "G1",
            "name": "Devs",
            "role": "PR4"
        }],
        "custom_attributes": {
          "slug": "value"
        }
    }]
}
```

This endpoint retrieves a list of Project resources.

**`GET /api/v2/projects/`**

### Query Parameters

The following parameters may be used to filter the application resources in the response.

Parameter   | Description
------------|-------------
application | Returns a list of project resources that belong to the specified application id.
id          | Returns the project resource with the specified id.
name        | Returns the project resource with the specified name.
slug        | Returns the project resource with the specified slug.
---

### Include Parameters

```http
GET /api/v2/projects/1/tasks/?include=permissions HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [{
        "id": 1936,
        "slug": "project-test",
        "url": "http://example.com/bunits/bu-test/app-test/project-test",
        "application": 1280,
        "profile" : {
            "id": "P9",
            "name": "Android App"
        },
        "archived": false,
        "name": "Project Test",
        "creator": 1,
        "description": "API Project",
        "tags": ["foo", "bar"],
        "created": "2015-04-15T19:30:04.132712Z",
        "updated": "2015-04-15T19:57:15.042353Z",
        "parent": null,
        "users": [{
            "id": "1",
            "email": "test@example.com",
            "role": "PR4",
            "first_name": "Admin",
            "last_name": "Testerton"
        }],
        "groups": [{
            "id": "G1",
            "name": "Devs",
            "role": "PR4"
        }],
        "custom_attributes": {
          "slug": "value"
        },
        "permissions": [
            "edit_project_details",
            "assign_task",
            "mark_task",
            "create_project_specific_task",
            "archive_project",
            "verify_task",
            "edit_project_membership",
            "view_project",
            "write_task_note",
            "sync_with_alm",
            "edit_project_survey"
        ]
    }]
}
```

See the [Include Parameters](#include-parameters) section for more details.

Parameter     | Description
--------------|---------------------
permissions   | Includes a list of permissions the requesting user has for the project
=======










## Get a Specific Project

```http
GET /api/v2/projects/1936/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": 1936,
    "slug": "project-test",
    "url": "http://example.com/bunits/bu-test/app-test/project-test",
    "application": 1280,
    "profile" : {
        "id": "P9",
        "name": "Android App"
    },
    "archived": false,
    "name": "Project Test",
    "creator": 1,
    "description": "API Project",
    "tags": ["foo", "bar"],
    "created": "2015-04-15T19:30:04.132712Z",
    "updated": "2015-04-15T19:57:15.042353Z",
    "parent": 1935,
    "users": [{
        "id": "1",
        "email": "test@example.com",
        "role": "PR4",
        "first_name": "Admin",
        "last_name": "Testerton"
    }],
    "groups": [{
        "id": "G1",
        "name": "Devs",
        "role": "PR4"
    }],
    "custom_attributes": {
      "slug": "value"
    }
}
```

This endpoint retrieves a specific Project resource, as specified by the id parameter.

**`GET /api/v2/projects/{project_id}/`**

### URL Parameters

Parameter         | Description
----------------- | -----------
project_id        | The id of the Project to retrieve










## Create a New Project

```http
POST /api/v2/projects/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "application": 1280,
    "name": "API Test",
    "profile": "P9",
    "users": [{"email": "test@example.com", "role": "PR4"}],
    "groups": [{"id": "G1", "role": "PR4"}]
}
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": 1936,
    "slug": "project-test",
    "url": "http://example.com/bunits/bu-test/app-test/project-test",
    "application": 1280,
    "profile" : {
        "id": "P9",
        "name": "Android App"
    },
    "archived": false,
    "name": "Project Test",
    "creator": 1,
    "description": "API Project",
    "tags": ["foo", "bar"],
    "created": "2015-04-15T19:30:04.132712Z",
    "updated": "2015-04-15T19:57:15.042353Z",
    "parent": null,
    "users": [{
        "id": "1",
        "email": "test@example.com",
        "role": "PR4",
        "first_name": "Admin",
        "last_name": "Testerton"
    }],
    "groups": [{
        "id": "G1",
        "name": "Devs",
        "role": "PR4"
    }],
    "custom_attributes": {
    }
}
```

Fields      | Required | Description
------------|----------|-------------
application | Yes      | The ID of the application the project should be created under.
groups      | No       | A list of dictionaries per group that are to be assigned to the project. Each dictionary should contain the group's id and the desired role.
name        | Yes      | The name of the new project.
profile     | No       | The ID of the desired profile for the project.
users       | No       | A list of dictionaries per user that are to be assigned to the project. Each dictionary should contain the user's email and the desired role.










## Update a Project

```http
PUT /api/v2/projects/1936/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "application": 1,
    "name": "This is the project's new name!"
}
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": 1936,
    "slug": "project-test",
    "url": "http://example.com/bunits/bu-test/app-test/project-test",
    "application": 1,
    "profile" : {
        "id": "P9",
        "name": "Android App"
    },
    "archived": false,
    "name": "This is the project's new name!",
    "creator": 1,
    "description": "API Project",
    "tags": ["foo", "bar"],
    "created": "2015-04-15T19:30:04.132712Z",
    "updated": "2015-07-23T15:52:14.482992Z",
    "parent": null,
    "users": [{
        "id": "1",
        "email": "test@example.com",
        "role": "PR4",
        "first_name": "Admin",
        "last_name": "Testerton"
    }],
    "groups": [{
        "id": "G1",
        "name": "Devs",
        "role": "PR4"
    }],
    "custom_attributes": {
      "slug": "value"
    }
}
```

Update a single project by specifying a new name and a new application. The project to update is identified by the id.

**`PUT /api/v2/projects/{project_id}/`**

### URL Parameters

Parameter  | Description
---------  | -----------
project_id | The id of the Project to update










## Delete a Project

```http
DELETE /api/v2/projects/10/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 204 NO CONTENT
```

This endpoint deletes a specific project, specified by the project id.

**`DELETE /api/v2/projects/{project_id}/`**

### URL Parameters

Parameter         | Description
----------------- | -----------
project_id        | The id of the Project to delete

