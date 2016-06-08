# Releases

## Get All Releases

```http
GET /api/v2/projects/1/releases/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [{
        "id": 30,
        "slug": "release-1",
        "url": "http://example.com/bunits/bu/app/release-1/",
        "application": 7,
        "profile": {
            "logo_url": "/static/images/logo-django.png",
            "id": "P5",
            "name": "Django Project"
        },
        "archived": false,
        "name": "Release 1",
        "creator": 1,
        "description": "",
        "tags": [ ],
        "created": "2016-05-02T15:33:15.782770Z",
        "updated": "2016-05-02T15:33:16.929107Z",
        "parent": 1,
        "users": [
            {
                "first_name": "Admin",
                "last_name": "Testerton",
                "role": "PR4",
                "id": 1,
                "email": "admin@example.com"
            }
        ],
        "groups": [ ],
        "custom_attributes": { }
    }]
}
```

This endpoint returns a list of Release resources.

**`GET /api/v2/projects/{project_id}/releases/`**

### Query Parameters

The following parameters may be used to filter the release resources in the response.

Parameter   | Description
------------|-------------
name        | Filter releases by name.
slug        | Filter releases by slug.
ordering    | Sort releases by the specified field. Prefix field name with minus to sort descending. Sortable fields: name, created, updated.
search      | Filter releases by performing a textual search on name and profile name.
---

### Include Parameters

```http
GET /api/v2/projects/1/releases/?include=permissions HTTP/1.1
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
        "application": 7,
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
        "parent": 1,
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
permissions   | Includes a list of permissions the requesting user has for the release
=======










## Get a Specific Release

```http
GET /api/v2/projects/1/releases/30/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": 30,
    "slug": "release-1",
    "url": "http://example.com/bunits/bu/app/release-1/",
    "application": 7,
    "profile": {
        "logo_url": "/static/images/logo-django.png",
        "id": "P5",
        "name": "Django Project"
    },
    "archived": false,
    "name": "Release 1",
    "creator": 1,
    "description": "",
    "tags": [ ],
    "created": "2016-05-02T15:33:15.782770Z",
    "updated": "2016-05-02T15:33:16.929107Z",
    "parent": 1,
    "users": [
        {
            "first_name": "Admin",
            "last_name": "Testerton",
            "role": "PR4",
            "id": 1,
            "email": "admin@example.com"
        }
    ],
    "groups": [ ],
    "custom_attributes": { }
}
```

This endpoint returns a specific Release resource.

**`GET /api/v2/projects/{project_id}/releases/{realease_id}/`**

### URL Parameters

Parameter         | Description
----------------- | -----------
project_id        | The id of the Release to retrieve











## Create a Release

```http
POST /api/v2/projects/1/releases/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "name": "Foo",
    "description": "A foo project",
    "persistent_phases": ["X1", "X2"],
    "alm_connection_retention": true,
    "analysis_connection_retention": true
}
```

```http
HTTP/1.1 201 CREATED
Content-Type: application/json

{
    "id": 31,
    "slug": "foo",
    "url": "http://example.com/bunits/bu/app/foo/",
    "application": 7,
    "profile": {
        "logo_url": "/static/images/logo-django.png",
        "id": "P5",
        "name": "Django Project"
    },
    "archived": false,
    "name": "Foo",
    "creator": 1,
    "description": "A foo project",
    "tags": [ ],
    "created": "2016-05-02T15:33:15.782770Z",
    "updated": "2016-05-02T15:33:16.929107Z",
    "parent": 1,
    "users": [
        {
            "first_name": "Admin",
            "last_name": "Testerton",
            "role": "PR4",
            "id": 1,
            "email": "admin@example.com"
        }
    ],
    "groups": [ ],
    "custom_attributes": { }
}
```

This endpoint creates an Project Release resource.

`POST /api/v2/projects/{project_id}/releases/`

Fields                         | Required | Description
-------------------------------|----------|-------------
name                           | Yes      | The name of the new release. 
description                    | No       | The description for the new release.
persistent_phases              | No       | A list of phases whose task states are to persist in the new release.
alm_connection_retention       | No       | A boolean that determines whether alm connection settings should be retained in the new release.
analysis_connection_retention  | No       | A boolean that determines whether analysis connection settings should be retained in the new release.
---
