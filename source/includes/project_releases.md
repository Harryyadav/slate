# Project Releases

## Get All Project Releases

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
    "application": 1,
    "application_tags": [],
    "archived": false,
    "base_project": {
      "id": 1,
      "name": "p1",
      "slug": "p1",
      "url": "http://example.com/bunits/bu/app/p1/"
    },
    "created": "2017-12-12T16:59:45.195331Z",
    "creator": 1,
    "custom_attributes": {},
    "description": "Description",
    "groups": [],
    "id": 9,
    "locked": false,
    "locked_by": null,
    "locked_on": null,
    "lookup_data": {},
    "name": "Test",
    "parent": {
      "id": 1,
      "name": "p1",
      "slug": "p1",
      "url": "http://example.com/bunits/bu/app/p1/"
    },
    "profile": {
      "logo_url": "/static/images/logo-django.png",
      "id": "P5",
      "name": "Django Project"
    },
    "releases_count": 0,
    "slug": "test",
    "survey_complete": true,
    "tags": [
      "Tags"
    ],
    "updated": "2017-12-12T16:59:47.270773Z",
    "url": "http://example.com/bunits/bu/app/test/",
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
    }]
  }]
}
```

This endpoint returns a list of Project Releases.

**`GET /api/v2/projects/{project_id}/releases/`**

### URL Parameters

Parameter         | Description
----------------- | -----------
project_id        | The ID of the parent project.

### Query Parameters

The following parameters may be used to filter the project release in the response.

Parameter   | Description
------------|-------------
name        | Filter project releases by name.
slug        | Filter project releases by slug.
ordering    | Sort project releases by the specified field. Prefix field name with minus to sort descending. Sortable fields: name, created, updated.
search      | Filter project releases by performing a textual search on name and profile name.
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
    "application": 1,
    "application_tags": [],
    "archived": false,
    "base_project": {
      "id": 1,
      "name": "p1",
      "slug": "p1",
      "url": "http://example.com/bunits/bu/app/p1/"
    },
    "created": "2017-12-12T16:59:45.195331Z",
    "creator": 1,
    "custom_attributes": {},
    "description": "Description",
    "groups": [],
    "id": 9,
    "locked": false,
    "locked_by": null,
    "locked_on": null,
    "lookup_data": {},
    "name": "Test",
    "parent": {
      "id": 1,
      "name": "p1",
      "slug": "p1",
      "url": "http://example.com/bunits/bu/app/p1/"
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
    "profile": {
      "logo_url": "/static/images/logo-django.png",
      "id": "P5",
      "name": "Django Project"
    },
    "releases_count": 0,
    "slug": "test",
    "survey_complete": true,
    "tags": [
      "Tags"
    ],
    "updated": "2017-12-12T16:59:47.270773Z",
    "url": "http://example.com/bunits/bu/app/test/",
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
    }]
  }]
}
```

See the [Include Parameters](#include-parameters) section for more details.

Parameter     | Description
--------------|---------------------
permissions   | Includes a list of permissions the requesting user has for the projectt release.
---


## Get a Specific Project Release

```http
GET /api/v2/projects/1/releases/9/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "application": 1,
  "application_tags": [],
  "archived": false,
  "base_project": {
    "id": 1,
    "name": "p1",
    "slug": "p1",
    "url": "http://example.com/bunits/bu/app/p1/"
  },
  "created": "2017-12-12T16:59:45.195331Z",
  "creator": 1,
  "custom_attributes": {},
  "description": "Description",
  "groups": [],
  "id": 9,
  "locked": false,
  "locked_by": null,
  "locked_on": null,
  "lookup_data": {},
  "name": "Test",
  "parent": {
    "id": 1,
    "name": "p1",
    "slug": "p1",
    "url": "http://example.com/bunits/bu/app/p1/"
  },
  "profile": {
    "logo_url": "/static/images/logo-django.png",
    "id": "P5",
    "name": "Django Project"
  },
  "releases_count": 0,
  "slug": "test",
  "survey_complete": true,
  "tags": [
    "Tags"
  ],
  "updated": "2017-12-12T16:59:47.270773Z",
  "url": "http://example.com/bunits/bu/app/test/",
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
  }]
}
```

This endpoint returns a specific Project Release.

**`GET /api/v2/projects/{project_id}/releases/{release_id}/`**

### URL Parameters

Parameter         | Description
----------------- | -----------
project_id        | The ID of the parent project.
release_id        | The ID of the release to retrieve.



## Create a Project Release

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
  "application": 1,
  "application_tags": [],
  "archived": false,
  "base_project": {
    "id": 1,
    "name": "p1",
    "slug": "p1",
    "url": "http://example.com/bunits/bu/app/p1/"
  },
  "created": "2017-12-12T16:59:45.195331Z",
  "creator": 1,
  "custom_attributes": {},
  "description": "A foo project",
  "groups": [],
  "id": 9,
  "locked": false,
  "locked_by": null,
  "locked_on": null,
  "lookup_data": {},
  "name": "Foo",
  "parent": {
    "id": 1,
    "name": "p1",
    "slug": "p1",
    "url": "http://example.com/bunits/bu/app/p1/"
  },
  "profile": {
    "logo_url": "/static/images/logo-django.png",
    "id": "P5",
    "name": "Django Project"
  },
  "releases_count": 0,
  "slug": "foo",
  "survey_complete": true,
  "tags": [
    "Tags"
  ],
  "updated": "2017-12-12T16:59:47.270773Z",
  "url": "http://example.com/bunits/bu/app/test/",
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
  }]
}
```

This endpoint creates a new Project Release from the parent project specified by the project_id URL parameter.
Project membership is carried over to the new release by default.

`POST /api/v2/projects/{project_id}/releases/`

### URL Parameters

Parameter         | Description
----------------- | -----------
project_id        | The ID of the parent project.


### Payload

Fields                         | Required | Description
-------------------------------|----------|-------------
name                           | Yes      | The name of the new release. 
description                    | No       | The description for the new release.
persistent_phases              | No       | A list of phase IDs. Tasks under these phases will have their statuses and notes retained in the new release.
alm_connection_retention       | No       | A boolean that determines whether ALM connection settings should be retained in the new release.
analysis_connection_retention  | No       | A boolean that determines whether analysis connection settings should be retained in the new release.
tags                           | No       | A list of string tags to add to the new release.
custom_attributes              | No       | A dictionary of custom project attributes for the new release. Some attributes may be required.
---
