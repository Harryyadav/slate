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
        "profile_draft": null,
        "archived": false,
        "name": "Project Test",
        "creator": 1,
        "description": "API Project",
        "tags": ["foo", "bar"],
        "application_tags": ["baz", "qux"],
        "created": "2015-04-15T19:30:04.132712Z",
        "updated": "2015-04-15T19:57:15.042353Z",
        "parent": {
            "id": 8,
            "slug": "parent-984-gamma",
            "name": "Parent 9.8.4 Gamma",
            "url": "http://example.com/bunits/bu-test/app-test/parent-984-gamma/"
        },
        "base_project": {
            "id": 10,
            "name": "base 9.8.4 Gamma",
            "slug": "base-984-gamma",
            "url": "http://example.com/bunits/bu-test/app-test/base-984-gamma/"
        },
        "users": [{
            "id": "1",
            "email": "test@example.com",
            "role": "PR4",
            "first_name": "Admin",
            "last_name": "Testerton",
            "is_active": true,
            "is_creator": true
        }],
        "groups": [{
            "id": "G1",
            "name": "Devs",
            "role": "PR4"
        }],
        "custom_attributes": {
          "slug": "value"
        },
        "survey_complete": true,
        "survey_dirty": false,
        "locked_on": null,
        "locked_by": null,
        "locked": false,
        "risk_policy_compliant": true,
        "risk_policy": 1
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
GET /api/v2/projects/1/?include=permissions,task_counts,incomplete_tasks HTTP/1.1
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
        "profile_draft": null,
        "archived": false,
        "name": "Project Test",
        "creator": 1,
        "description": "API Project",
        "tags": ["foo", "bar"],
        "application_tags": ["baz", "qux"],
        "created": "2015-04-15T19:30:04.132712Z",
        "updated": "2015-04-15T19:57:15.042353Z",
        "parent": null,
        "base_project": null,
        "users": [{
            "id": "1",
            "email": "test@example.com",
            "role": "PR4",
            "first_name": "Admin",
            "last_name": "Testerton",
            "is_active": true,
            "is_creator": true
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
        ],
        "incomplete_tasks": {
            "high": 38,
            "medium": 60,
            "low": 11
        },
        "task_counts": {
            "Requirements": {
                "total": 28,
                "complete": 4,
                "slug": "requirements"
            },
            "Architecture & Design": {
                "total": 6,
                "complete": 1,
                "slug": "architecture-design"
            },
            "Development": {
                "total": 30,
                "complete": 5,
                "slug": "development"
            },
            "Testing": {
                "total": 57,
                "complete": 2,
                "slug": "testing"
            }
        },
        "survey_complete": true,
        "survey_dirty": false,
        "locked_on": null,
        "locked_by": null,
        "locked": false,
        "risk_policy_compliant": true,
        "risk_policy": 1
    }]
}
```

See the [Include Parameters](#include-parameters) section for more details.

Parameter        | Description
-----------------|---------------------
permissions      | Includes a list of permissions the requesting user has for the project
task_counts      | Includes counts of tasks broken down by phase and completeness for the project.
incomplete_tasks | Includes a count of incomplete tasks broken down by high (7-10), medium (4-6), and low (1-3) priorities.

### Expand Parameters

```http
GET /api/v2/projects/?expand=creator,risk_policy HTTP/1.1
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
        "profile_draft": null,
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
        "application_tags": ["baz", "qux"],
        "created": "2015-04-15T19:30:04.132712Z",
        "updated": "2015-04-15T19:57:15.042353Z",
        "parent": null,
        "base_project": null,
        "users": [{
            "id": "1",
            "email": "test@example.com",
            "role": "PR4",
            "first_name": "Admin",
            "last_name": "Testerton",
            "is_active": true
        }],
        "groups": [{
            "id": "G1",
            "name": "Devs",
            "role": "PR4"
        }],
        "custom_attributes": {
          "slug": "value"
        },
        "survey_complete": true,
        "survey_dirty": false,
        "locked_on": null,
        "locked_by": null,
        "locked": false,
        "risk_policy_compliant": true,
        "risk_policy": {
            "id": 1,
            "name": "All Risk",
            "description": "Applies to all applications",
            "filters": {
                "phases": ["requirements", "architecture-design", "development", "testing"],
                "priority": 7,
                "tags": ["tag1", "tag2"]
            },
            "conditions": {
                "task_statuses": ["TS1"]
            },
            "is_org_default": true,
            "created": "2018-01-31T17:30:26.175423-05:00",
            "last_updated": "2018-01-31T17:30:26.175253-05:00"
        }
    }]
}
```

See the [Expand Parameters](#expand-parameters) section for more details.

Parameter   | Description
------------|---------------------
creator     | Creator field is expanded to display information on the project creator.
risk_policy | Risk Policy field is expanded to display information on the associated risk policy.










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
    "profile_draft": null,
    "archived": false,
    "name": "Project Test",
    "creator": 1,
    "description": "API Project",
    "tags": ["foo", "bar"],
    "application_tags": ["baz", "qux"],
    "created": "2015-04-15T19:30:04.132712Z",
    "updated": "2015-04-15T19:57:15.042353Z",
    "parent": null,
    "base_project": null,
    "users": [{
        "id": "1",
        "email": "test@example.com",
        "role": "PR4",
        "first_name": "Admin",
        "last_name": "Testerton",
        "is_active": true,
        "is_creator": true
    }],
    "groups": [{
        "id": "G1",
        "name": "Devs",
        "role": "PR4"
    }],
    "custom_attributes": {
      "slug": "value"
    },
    "survey_complete": true,
    "survey_dirty": false,
    "locked_on": null,
    "locked_by": null,
    "locked": false,
    "risk_policy_compliant": true,
    "risk_policy": 1
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
    "profile_draft": null,
    "archived": false,
    "name": "Project Test",
    "creator": 1,
    "description": "API Project",
    "tags": [],
    "application_tags": [],
    "created": "2015-04-15T19:30:04.132712Z",
    "updated": "2015-04-15T19:57:15.042353Z",
    "parent": null,
    "base_project": null,
    "users": [{
        "id": "1",
        "email": "test@example.com",
        "role": "PR4",
        "first_name": "Admin",
        "last_name": "Testerton",
        "is_active": true,
        "is_creator": true
    }],
    "groups": [{
        "id": "G1",
        "name": "Devs",
        "role": "PR4"
    }],
    "custom_attributes": {
    },
    "survey_complete": true,
    "survey_dirty": false,
    "locked_on": null,
    "locked_by": null,
    "locked": false,
    "risk_policy_compliant": true,
    "risk_policy": 1
}
```

Fields      | Required | Description
------------|----------|-------------
application | Yes      | The ID of the application the project should be created under.
groups      | No       | A list of dictionaries per group that are to be assigned to the project. Each dictionary should contain the group's id and the desired role.
name        | Yes      | The name of the new project.
profile     | No       | The ID of the desired profile for the project.
users       | No       | A list of dictionaries per user that are to be assigned to the project. Each dictionary should contain the user's email and the desired role.
locked      | No       | A boolean field to lock or unlock the project. It can only be used by users that have lock_project_survey permission
risk_policy | No       | The ID of the risk policy which applies to this project.










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
    "profile_draft": null,
    "archived": false,
    "name": "This is the project's new name!",
    "creator": 1,
    "description": "API Project",
    "tags": ["foo", "bar"],
    "application_tags": ["baz", "qux"],
    "created": "2015-04-15T19:30:04.132712Z",
    "updated": "2015-07-23T15:52:14.482992Z",
    "parent": null,
    "base_project": null,
    "users": [{
        "id": "1",
        "email": "test@example.com",
        "role": "PR4",
        "first_name": "Admin",
        "last_name": "Testerton",
        "is_active": true,
        "is_creator": true
    }],
    "groups": [{
        "id": "G1",
        "name": "Devs",
        "role": "PR4"
    }],
    "custom_attributes": {
      "slug": "value"
    },
    "survey_complete": true,
    "survey_dirty": false,
    "locked_on": "2016-06-01T14:39:45.083334Z",
    "locked_by": 1,
    "locked": true,
    "risk_policy_compliant": true,
    "risk_policy": 1
}
```

Update a single project by specifying a new name and a new application. The project to update is identified by the id.

**`PATCH /api/v2/projects/{project_id}/`**

### URL Parameters

Parameter  | Description
---------  | -----------
project_id | The id of the Project to update

### Payload

Fields           | Required | Description
-----------------|----------|---------------
locked           | No       | A boolean field to lock or unlock the project. It can only be used by users that have lock_project_survey permission
application      | No       | The ID of the application the project should be created under.
profile          | No       | The ID of the desired profile for the project.
archived         | No       | A boolean to archive and unarchive a project.
name             | No       | The name of the project.
description      | No       | Project description.
tags             | No       | List of project tags.
parent           | No       | ID, name, slug, and URL of the parent project.
base_project     | No       | ID, name, slug, and URL of the original project.
users            | No       | A list of dictionaries per user that are to be assigned to the project. Each dictionary should contain the user's email and the desired role.
groups           | No       | A list of dictionaries per group that are to be assigned to the project. Each dictionary should contain the group's id and the desired role.
risk_policy      | No       | The ID of the risk policy which applies to this project.










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
