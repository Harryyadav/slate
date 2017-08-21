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
        "updater": 7,
        "library_task_created": "2015-06-16T19:36:57.863684Z",
        "library_task_updated": "2015-06-16T19:36:57.836874Z",
        "verification_status": null,
        "status": "TS2",
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
GET /api/v2/projects/1/tasks/?expand=description,status,text,updater HTTP/1.1
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
        "updater": {
            "first_name": "Hamish",
            "last_name": "Stout",
            "is_active": true,
            "email": "hamish.stout@example.com",
            "role": {
                "id": "UR1",
                "name": "User"
            },
            "id": 7
        },
        "library_task_created": "2015-06-16T19:36:57.863684Z",
        "library_task_updated": "2015-06-16T19:36:57.836874Z",
        "verification_status": null,
        "status": {
            "id": "TS2",
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
status      | Status field is expanded into id, meaning, icon, name and slug sub-fields.
phase       | Phase field is expanded into id, name, slug, description and tip sub-fields.
updater     | Updater field is expanded into id, first name, last name, email, role, and active status sub-fields.
---

### Include Parameters

```http
GET /api/v2/projects/1/tasks/?include=tags,related,problem,how_tos,references,training HTTP/1.1
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
        "updater": 7,
        "library_task_created": "2015-06-16T19:36:57.863684Z",
        "library_task_updated": "2015-06-16T19:36:57.836874Z",
        "verification_status": null,
        "status": "TS2",
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
                "title": "Manually with browser",
                "slug": "test-account-lockout-manually-browser",
                "url": "http://a7069ccda519b00c4/....",
                "text": "1. Open your web browser ..."
            }
        ],
        "regulation_sections": [
            {
                "description": "Denial of service (DoS) protection and working in a degraded mode during DoS attacks.",
                "id": "RS1026",
                "name": "CR2.7 (L3 and higher)",
                "regulation_id": "CR45",
                "regulation_name": "ANSI/ISA 62443-4-2"
            },
            {
                "description": "Denial of service (DoS) protection and working in a degraded mode during DoS attacks.",
                "id": "RS642",
                "name": "SR2.7 (L3 and higher)",
                "regulation_id": "CR39",
                "regulation_name": "ANSI/ISA 62443-3-3"
            }
        ],
        "references": [
            {
              "id": 10,
              "alm_connection": 1,
              "reference": "47300",
              "name": "US451",
              "link": "https://sdetest.atlassian.net/rest/api/2/issue/47300"
            }
        ],
        "training": [
            {
              "title": "OWASP Top 10 2013",
              "id": "TR1",
              "modules": [
                  {
                     "title": "Cross-site request forgery (CSRF)",
                     "id": "M5",
                     "link": "/static/05_CSRF/story_html5.html?tincan=true&endpoint=%2Ftincan%2F&enrollment_id=1",
                     "completed": false
                  },
                  {
                     "title": "Broken authentication and session management",
                     "id: "M7",
                     "link": "/static/07_Broken_Auth/story_html5.html?tincan=true&endpoint=%2Ftincan%2F&enrollment_id=1",
                     "completed": true
                  }
            },
            {
              "title": "Development",
              "id": "TR6",
              "modules": [
                  {
                     "title": "Software Development, Operation, Maintenance & Disposal",
                     "id: "M8",
                     "link": "/static/08_Software_dev/story_html5.html?tincan=true&endpoint=%2Ftincan%2F&enrollment_id=1",
                     "completed": true
                  }
              ]
            }
        ]
    }]
}
```

See the [Include Parameters](#include-parameters) section for more details.

Parameter           | Description
----------          |---------------------
how_tos             | Includes a list of applicable how-tos
problem             | Includes the problem that the task is related to
related             | Includes a list of related tasks
tags                | Includes a list of tags associated to the task
regulation_sections | Includes a list of regulation sections to which this task belongs
references          | Includes a list of task references linked to this task
training            | Includes a list of training courses/modules linked to this task
---

### Filter Parameters

```http
GET /api/v2/projects/1/tasks/?accepted=true&relevant=false HTTP/1.1
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
        "relevant": false,
        "accepted": true,
        "assigned_to": [],
        "updated": "2015-06-16T19:37:44.710100Z",
        "updater": 7,
        "library_task_created": "2015-06-16T19:36:57.863684Z",
        "library_task_updated": "2015-06-16T19:36:57.836874Z",
        "verification_status": null,
        "status": "TS2",
        "note_count": 0,
        "artifact_proxy": null,
    }]
}
```

Tasks can be filtered by their relevance and whether or not they have been
accepted into a project by a project lead. If no filters are passed, we default
 to returning accepted tasks to match with the list shown in the web application.

Parameter | Expected values   | Description
----------|-------------------|--------------|
accepted  | true &#124; false | Return the accepted/unaccepted tasks
relevant  | true &#124; false | Return the relevant/irrelevant tasks
---










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
            "first_name": "Admin",
            "last_name": "Testerton",
            "is_active": true,
            "email": "admin@example.com",
            "role": {
                "id": "UR1",
                "name": "User"
            },
            "id": 1
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
    "status": "TS2",
    "task_id": "T2",
    "title": "Secure forgotten password",
    "updated": "2015-07-08T02:16:33.923315Z",
    "updater": 7,
    "url": "http://example.com/bunits/bu1/app1/proj1/tasks/phase/requirements/1-T2",
    "verification_status": null
}
```

This endpoint retrieves a single Task resource, as specified by the id parameter.

**`GET /api/v2/projects/{project_id}/tasks/{task_id}/`**










## Create a New Project Specific Task

```http
POST /api/v2/projects/1/tasks/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "artifact_proxy": "ABC-XYZ",
    "assigned_to": ['admin@example.com'],
    "phase": "X1",
    "priority": 9,
    "status": "TS1",
    "text": "Task Description",
    "title": "Project Specific Task"
}
```

```http
HTTP/1.1 201 CREATED
Content-Type: application/json

{
    "accepted": true,
    "ad_hoc": true,
    "artifact_proxy": "ABC-XYZ",
    "assigned_to": [
        {
            "first_name": "Admin",
            "last_name": "Testerton",
            "is_active": true,
            "email": "admin@example.com",
            "role": {
                "id": "UR1",
                "name": "User"
            },
            "id": 1
        }
    ],
    "text": "Task Description",
    "id": "1-PT1",
    "library_task_created": "2015-05-07T18:58:26.732000Z",
    "library_task_updated": "2015-05-07T18:58:26.732000Z",
    "note_count": 0,
    "phase": "X1",
    "priority": "9",
    "relevant": true,
    "status": "TS1",
    "task_id": "PT1",
    "title": "Project Specific Task",
    "updater": 7,
    "updated": "2015-05-07T18:58:26.732000Z",
    "url": "http://example.com/.../1-PT1",
    "verification_status": null
}
```

Creates a new Task resource that is project-specific.

**`POST /api/v2/projects/{project_id}/tasks/`**

### URL Parameters

Parameter      | Description
---------------|------------------
project_id     | The id of the project the new task belongs to

### Payload

Fields         | Required | Description
---------------|----------|---------------
artifact_proxy | No       | Arbitrary string which identifies a synchronized ALM issue
assigned_to    | No       | A list of emails for users that belong to the project
phase          | Yes      | The id of a phase
priority       | Yes      | The priority value from 0-10
status         | No       | The id of a status
text           | Yes      | The description of the new task
title          | Yes      | The title of the new task










## Update a Specific Task

```http
PATCH /api/v2/projects/1/tasks/1-T2/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "artifact_proxy": "ABC-XYZ",
    "assigned_to": ['user1@example.com', 'user2@example.com'],
    "status": "TS1"
}
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
            "first_name": "Admin",
            "last_name": "Testerton",
            "is_active": true,
            "email": "admin@example.com",
            "role": {
                "id": "UR1",
                "name": "User"
            },
            "id": 1
        }
    ],
    "text": "Insecure forgotten password.",
    "id": "1-T2",
    "library_task_created": "2010-10-20T17:46:50Z",
    "library_task_updated": "2015-05-07T18:58:26.732000Z",
    "note_count": 0,
    "phase": "X1",
    "priority": "8",
    "relevant": true,
    "status": "TS1",
    "task_id": "T2",
    "title": "Secure forgotten password",
    "updated": "2015-07-08T02:16:33.923315Z",
    "updater": 7,
    "url": "http://example.com/.../1-T2",
    "verification_status": null
}
```

Updates a single Task resource, as specified by the project and task id parameters.

**`PATCH /api/v2/projects/{project_id}/tasks/{id}/`**

### URL Parameters

Parameter      | Description
---------------|------------------
project_id     | The id of the project this task belongs to
id             | The id of the task to modify

### Payload

Fields         | Required | Description
---------------|----------|---------------
artifact_proxy | No       | Arbitrary string which identifies a synchronized ALM issue
assigned_to    | No       | A list of emails for users that belong to the project
phase          | No       | The id of a phase. Available only if the updated task is a project specific task.
priority       | No       | The priority value from 0-10. Available only if the updated task is a project specific task.
status         | No       | The id of a status
text           | No       | The description of the task. Available only if the updated task is a project specific task.
title          | No       | The title of the task. Available only if the updated task is a project specific task.
