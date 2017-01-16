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
            "name": "Android App",
            "logo_url": "/static/images/android.png"
        },
        "archived": false,
        "name": "Project Test",
        "creator": 1,
        "description": "API Project",
        "tags": ["foo", "bar"],
        "created": "2015-04-15T19:30:04.132712Z",
        "updated": "2015-04-15T19:57:15.042353Z",
        "parent": null,
        "custom_attributes": {
          "slug": "value"
        },
        "locked_on": null,
        "locked_by": null,
        "locked": false
    }]
}
```

This endpoint retrieves a list of Project resources.

**`GET /api/v2/projects/`**

### Query Parameters

The following parameters may be used to filter the project resources in the response.

Parameter   | Description
------------|-------------
application | Filter projects by Application ID.
name        | Filter projects by name.
slug        | Filter projects by slug.
ordering    | Sort projects by the specified field. Prefix field name with minus to sort descending. Sortable fields: name, created, updated.
search      | Filter projects by performing a textual search on name and profile name.

### Include Parameters

```http
GET /api/v2/projects/1/?include=permissions,task_counts HTTP/1.1
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
            "name": "Android App",
            "logo_url": "/static/images/android.png"
        },
        "archived": false,
        "name": "Project Test",
        "creator": 1,
        "description": "API Project",
        "tags": ["foo", "bar"],
        "created": "2015-04-15T19:30:04.132712Z",
        "updated": "2015-04-15T19:57:15.042353Z",
        "parent": null,
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
        ],
        "task_counts": {
            "development": {
                "high": {
                    "na": 0,
                    "total": 16,
                    "complete": 2,
                    "incomplete": 14
                },
                "medium": {
                    "na": 0,
                    "total": 15,
                    "complete": 1,
                    "incomplete": 14
                },
                "low": {
                    "na": 0,
                    "total": 3,
                    "complete": 1,
                    "incomplete": 2
                }
            },
            "testing": {
                "high": {
                    "na": 0,
                    "total": 25,
                    "complete": 2,
                    "incomplete": 23
                },
                "medium": {
                    "na": 0,
                    "total": 33,
                    "complete": 1,
                    "incomplete": 32
                },
                "low": {
                    "na": 0,
                    "total": 14,
                    "complete": 2,
                    "incomplete": 12
                }
            },
            "requirements": {
                "high": {
                    "na": 0,
                    "total": 12,
                    "complete": 4,
                    "incomplete": 8
                },
                "medium": {
                    "na": 0,
                    "total": 26,
                    "complete": 0,
                    "incomplete": 26
                },
                "low": {
                    "na": 0,
                    "total": 10,
                    "complete": 2,
                    "incomplete": 8
                }
            },
            "architecture-design": {
                "high": {
                    "na": 0,
                    "total": 4,
                    "complete": 1,
                    "incomplete": 3
                },
                "medium": {
                    "na": 0,
                    "total": 3,
                    "complete": 1,
                    "incomplete": 2
                },
                "low": {
                    "na": 0,
                    "total": 1,
                    "complete": 1,
                    "incomplete": 0
                }
            }
        },
        "locked_on": null,
        "locked_by": null,
        "locked": false
    }]
}
```

See the [Include Parameters](#include-parameters) section for more details.

Parameter     | Description
--------------|---------------------
permissions   | Includes a list of permissions the requesting user has for the project
task_counts   | Includes counts of tasks broken down by phase, priority and completeness for the project.<br>Priorities are: high (7-10), medium (4-6), low (1-3).

### Expand Parameters

```http
GET /api/v2/projects/?expand=creator HTTP/1.1
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
            "name": "Android App",
            "logo_url": "/static/images/android.png"
        },
        "archived": false,
        "name": "Project Test",
        "creator": {
            "id": "1",
            "email": "test@example.com",
            "role": "PR4",
            "first_name": "Admin",
            "last_name": "Testerton",
            "is_active": true
        },
        "description": "API Project",
        "tags": ["foo", "bar"],
        "created": "2015-04-15T19:30:04.132712Z",
        "updated": "2015-04-15T19:57:15.042353Z",
        "parent": null,
        "custom_attributes": {
          "slug": "value"
        },
        "locked_on": null,
        "locked_by": null,
        "locked": false
    }]
}
```

See the [Expand Parameters](#expand-parameters) section for more details.

Parameter   | Description
------------|---------------------
creator     | Creator field is expanded to display information on the project creator










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
        "name": "Android App",
        "logo_url": "/static/images/android.png"
    },
    "archived": false,
    "name": "Project Test",
    "creator": 1,
    "description": "API Project",
    "tags": ["foo", "bar"],
    "created": "2015-04-15T19:30:04.132712Z",
    "updated": "2015-04-15T19:57:15.042353Z",
    "parent": 1935,
    "custom_attributes": {
      "slug": "value"
    },
    "locked_on": null,
    "locked_by": null,
    "locked": false
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
    "profile": "P9"
}
```

```http
HTTP/1.1 201 CREATED
Content-Type: application/json

{
    "id": 1936,
    "slug": "project-test",
    "url": "http://example.com/bunits/bu-test/app-test/project-test",
    "application": 1280,
    "profile" : {
        "id": "P9",
        "name": "Android App",
        "logo_url": "/static/images/android.png"
    },
    "archived": false,
    "name": "Project Test",
    "creator": 1,
    "description": "API Project",
    "tags": ["foo", "bar"],
    "created": "2015-04-15T19:30:04.132712Z",
    "updated": "2015-04-15T19:57:15.042353Z",
    "parent": null,
    "custom_attributes": {
    },
    "locked_on": null,
    "locked_by": null,
    "locked": false
}
```

Fields      | Required | Description
------------|----------|-------------
application | Yes      | The ID of the application the project should be created under.
name        | Yes      | The name of the new project.
profile     | No       | The ID of the desired profile for the project.
locked      | No       | A boolean field to lock or unlock the project. It can only be used by users that have lock_project_survey permission










## Update a Project

```http
PATCH /api/v2/projects/1936/ HTTP/1.1
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
        "name": "Android App",
        "logo_url": "/static/images/android.png"
    },
    "archived": false,
    "name": "This is the project's new name!",
    "creator": 1,
    "description": "API Project",
    "tags": ["foo", "bar"],
    "created": "2015-04-15T19:30:04.132712Z",
    "updated": "2015-07-23T15:52:14.482992Z",
    "parent": null,
    "custom_attributes": {
      "slug": "value"
    },
    "locked_on": "2016-06-01T14:39:45.083334Z",
    "locked_by": 1,
    "locked": true
}
```

Update a single project by specifying a new name and a new application. The project to update is identified by the id.

**`PATCH /api/v2/projects/{project_id}/`**

### URL Parameters

Parameter  | Description
---------  | -----------
project_id | The id of the Project to update

### Payload

Fields        | Required | Description
--------------|----------|---------------
locked        | No       | A boolean field to lock or unlock the project. It can only be used by users that have lock_project_survey permission
application   | No       | The ID of the application the project should be created under.
profile       | No       | The ID of the desired profile for the project.
archived      | No       | A boolean to archive and unarchive a project.
name          | No       | The name of the project.
description   | No       | Project description.
tags          | No       | List of project tags.
parent        | No       | Id of the parent project.










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
