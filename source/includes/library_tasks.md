# Library Tasks

## Get All Library Tasks


```http
GET /api/v2/library/tasks/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [{
        "priority": 8,
        "url": "http://example.com/library/tasks/T179/",
        "problem": 1,
        "title": "Allow access for users to remove their data from the system",
        "description": "Some example description",
        "phase": "requirements",
        "id": "T179"
    }]
}
```
This endpoint retrieves a list of Library Standard resources.

**`GET /api/v2/library/tasks/`**

### Query Parameters

The following parameters may be used to filter the library task resources in the response.

Parameter            | Description
---------------------|-------------------
title                | Returns all tasks containing string in their title   **
description          | Returns all tasks containing string in their description **
priority             | Given a priority 0-10, returns all tasks with specified priority
tags                 | Given a JSON encoded list of tags, returns all tasks with specified tags
phase                | Given a phase slug, returns all tasks in specified phase


___

### Expand Parameters

```http
GET /api/v2/library/tasks/?expand=problem HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [{
        "priority": 8,
        "tags": [],
        "url": "http://example.com/library/tasks/T179/",
        "problem": {
            "content": "This is some example content.",
            "cwes": [{
                "url": "http://cwe.mitre.org/data/definitions/359",
                "title": "Exposure of Private Information ('Privacy Violation')",
                "cwe_id": 359
            }],
            "id": "P257",
            "title": "Privacy Violation"
        },
        "title": "Allow access for users to remove their data from the system",
        "description": "Some example description",
        "phase": "requirements", ** add expanded phase
        "id": "T179"
    }]
}

```

See the [Expand Parameters](#expand-parameters) section for more details.

Parameter     | Description
--------------|------------------------------
problem       | Expands the problem fields in the task response object
phase         | Expands the phase field in the task response object

---

### Include Parameters

```http
GET /api/v2/library/tasks/?include=verification_coverage,categories,tags,how_tos,amendments HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [{
        "priority": 8,
        "tags": [1, 2, 3],
        "url": "http://example.com/library/tasks/T179/",
        "problem": 1,
        "title": "Allow access for users to remove their data from the system",
        "description": "Some example description",
        "phase": "requirements",
        "id": "T179",
        "categories": [
            "1",
            "2"
        ],
        "amendments": [{
            "id": "TA123",
            "title": "TA123",
            "content": "Some additional information about this task..."
        }],
        "verification_coverage": [
            "No Automated Static Analysis Coverage"
        ],
        "how_tos": [{
            "id": "I131",
            "title": "I131: Manually with browser",
            "slug": "test-account-lockout-manually-browser",
            "url": "http://a7069ccda519b00c4/....",
            "content": "1. Open your web browser ..."
        }]
    }]
}
```

See the [Include Parameters](#include-parameters) section for more details.

Parameter             | Description
----------------------|---------------
amendments            | Includes a list of amendments on each task
categories            | Includes a list of categories that apply to each task
how_tos               | Includes a list of How-Tos for each task. These are language specific examples of how to implement the task
tags                  | Includes a list of tags attached to each task
verification_coverage | Includes a list of verification coverages of each task




## Get a Specific Library Standard

```http
GET /api/v2/library/tasks/T3/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [{
        "priority": 8,
        "tags": [],
        "url": "http://example.com/library/tasks/T3/",
        "problem": 1,
        "title": "Example Library Standard",
        "description": "Some example description",
        "phase": "requirements",
        "id": "T3"
    }]
}

```

This endpoint retrieves a single library task resource, as specified by the id parameter.

**`GET /api/v2/library/task/{task_id}/`**

### URL Parameters

Parameter      | Description
-------------- | ---------------
task_id        | The id of the task to retrieve


*All of the expand and include parameters for the 'Get All Library Standards' endpoint apply here as well.*



