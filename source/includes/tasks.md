# Tasks

## Get all tasks of a project

```http
GET /api/v2/projects/1/tasks/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [{
        "id": "1-T2",
        "task_id": "T2",
        "url": "http://example.com/bunits/new-business-unit/...",
        "title": "Secure forgotten password",
        "text": "Insecure forgotten password and password reset...",
        "priority": 8,
        "phase": "Requirements",
        "ad_hoc": false,
        "relevant": true,
        "accepted": true,
        "assigned_to": [],
        "updated": "2015-06-16T19:37:44.710100Z",
        "library_task_created": "2015-06-16T19:36:57.863684Z",
        "library_task_updated": "2015-06-16T19:36:57.836874Z",
        "verification_status": null,
        "status": "TODO",
        "note_count": 0,
        "artifact_proxy": null
    }]
}
```

This endpoint returns a list of Task resources associated with the project having id "project_id".

**`GET /api/v2/projects/{project_id}/tasks/`**

---

### Expand Parameters

```http
GET /api/v2/projects/1/tasks/?expand=status,text HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [{
        "id": "1-T2",
        "task_id": "T2",
        "url": "http://example.com/bunits/new-business-unit/...",
        "title": "Secure forgotten password",
        "text": {
            "description": "Insecure forgotten password and password reset...",
            "amendments": []
        },
        "priority": 8,
        "phase": "Requirements",
        "ad_hoc": false,
        "relevant": true,
        "accepted": true,
        "assigned_to": [],
        "updated": "2015-06-16T19:37:44.710100Z",
        "library_task_created": "2015-06-16T19:36:57.863684Z",
        "library_task_updated": "2015-06-16T19:36:57.836874Z",
        "verification_status": null,
        "status": {
            "meaning": "TODO",
            "icon": "clock-o",
            "name": "Incomplete",
            "slug": "TODO"
        },
        "note_count": 0,
        "artifact_proxy": null

    }]
}
```

See the [Expand Parameters](#expand-parameters) section for more details.

Parameter   | Description
------------|---------------------
description | Description field is expanded into content and amendments sub-fields.
status      | Status field is expanded into meaning, icon, name and slug sub-fields.

---

### Include Parameters

```http
GET /api/v2/projects/1/tasks/?include=tags,related,problem,how_tos HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [{
        "id": "1-T2",
        "task_id": "T2",
        "url": "http://example.com/bunits/new-business-unit/...",
        "title": "Secure forgotten password",
        "text": "Insecure forgotten password and password reset...",
        "priority": 8,
        "phase": "Requirements",
        "ad_hoc": false,
        "relevant": true,
        "accepted": true,
        "assigned_to": [],
        "updated": "2015-06-16T19:37:44.710100Z",
        "library_task_created": "2015-06-16T19:36:57.863684Z",
        "library_task_updated": "2015-06-16T19:36:57.836874Z",
        "verification_status": null,
        "status": "TODO",
        "note_count": 0,
        "artifact_proxy": null,
        "tags": ["tag1", "tag2"],
        "related": ["1-T31", "1-T32", "1-T34", "1-T98"],
        "problem": {
            "id": "P526",
            "title": "P526: Weak Password Recovery Mechanism...",
            "text": "It is common for an application...",
            "cwe": [
                {
                    "url": "http://example.com/640",
                    "id": 640,
                    "title": "Weak Password Recovery..."
                }
            ]
        },
        "how_tos": [
            {
                "id": "I131",
                "title": "I131: Manually with browser",
                "slug": "test-account-lockout-manually-browser",
                "url": "http://a7069ccda519b00c4/....",
                "text": "1. Open your web browser ..."
            }
        ]

    }]
}
```

See the [Include Parameters](#include-parameters) section for more details.

Parameter | Description
----------|---------------------
how_tos   | Includes a list of applicable how-tos
problem   | Includes the problem that the task is related to
related   | Includes a list of related tasks
tags      | Includes a list of tags associated to the task
=======










## Get a Specific Task

```http
GET /api/v2/projects/1/tasks/1-T2/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "accepted": true,
    "ad_hoc": false,
    "artifact_proxy": "ABC-XYZ",
    "assigned_to": [
        {
            "email": "admin@example.com",
            "id": 3
        }
    ],
    "text": "Insecure forgotten password.",
    "id": "1-T2",
    "library_task_created": "2010-10-20T17:46:50Z",
    "library_task_updated": "2015-05-07T18:58:26.732000Z",
    "note_count": 0,
    "phase": "Requirements",
    "priority": "8",
    "relevant": true,
    "status": "TODO",
    "task_id": "T2",
    "title": "Secure forgotten password",
    "updated": "2015-07-08T02:16:33.923315Z",
    "url": "http://example.com/bunits/bu1/app1/proj1/tasks/phase/requirements/1-T2",
    "verification_status": null
}
```

This endpoint retrieves a single Task resource, as specified by the id parameter.

**`GET /api/v2/projects/{project_id}/tasks/{task_id}/`**










## Update a Specific Task

```http
PATCH /api/v2/projects/1/tasks/1-T2/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

{
    "artifact_proxy": "ABC-XYZ",
    "assigned_to": ['user1@example.com', 'user2@example.com'],
    "status": "DONE"
}

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "accepted": true,
    "ad_hoc": false,
    "artifact_proxy": "ABC-XYZ",
    "assigned_to": [
        {
            "email": "user1@example.com",
            "id": 3
        }
    ],
    "text": "Insecure forgotten password.",
    "id": "1-T2",
    "library_task_created": "2010-10-20T17:46:50Z",
    "library_task_updated": "2015-05-07T18:58:26.732000Z",
    "note_count": 0,
    "phase": "Requirements",
    "priority": "8",
    "relevant": true,
    "status": "DONE",
    "task_id": "T2",
    "title": "Secure forgotten password",
    "updated": "2015-07-08T02:16:33.923315Z",
    "url": "http://example.com/.../1-T2",
    "verification_status": null
}
```

Updates a single Task resource, as specified by the project and task id parameters.

**`PATCH /api/v2/projects/{project_id}/tasks/{task_id}/`**

### URL Parameters

Parameter      | Description
---------------|------------------
project_id     | The id of the project to edit this task belongs to
task_id        | The id of the task to modify

### Payload

Fields         | Required | Description
---------------|----------|---------------
artifact_proxy | No       | Arbitrary string which identifies a synchronized ALM issue
assigned_to    | No       | A list of emails for users that belong to the project
status         | No       | The slug of a status
