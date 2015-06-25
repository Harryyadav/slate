# Library Problems
## Get All Library Weaknesses


```http
GET /api/v2/library/problems/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [{
        "description": "This is some example description.", 
        "cwes": [359],
        "id": "P257", 
        "title": "Privacy Violation",
        "risk_rating": 5
    }]
} 
```
This endpoint retrieves a list of Library Weakness resources.

**`GET /api/v2/library/problems/`**

### Query Parameters

The following parameters may be used to filter the library problem resources in the response.

Parameter            | Description
---------------------|-------------------
title                |
content              |
risk_rating          | Given a risk rating 0-10, returns all problems with specified rating
tags                 | Given a JSON encoded list of tags, returns all tasks with specified tags

___

### Expand Parameters

```http
GET /api/v2/library/problems/?expand=cwes HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [{
        "description": "This is some example description.", 
        "cwes": [{
            "url": "http://cwe.mitre.org/data/definitions/359", 
            "title": "Exposure of Private Information ('Privacy Violation')", 
            "cwe_id": 359
        }], 
        "id": "P257", 
        "title": "Privacy Violation",
        "risk_rating": 5
    }]
} 

```

See the [Expand Parameters](#expand-parameters) section for more details.

Parameter     | Description
--------------|------------------------------
cwes          | Expands the CWE field in the problem response object


---

### Include Parameters

```http
GET /api/v2/library/problems/?include=related_tasks,category HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [{
        "description": "This is some example description.", 
        "cwes": [{
            "url": "http://cwe.mitre.org/data/definitions/359", 
            "title": "Exposure of Private Information ('Privacy Violation')", 
            "cwe_id": 359
        }], 
        "id": "P257", 
        "title": "Privacy Violation",
        "risk_rating": 5,
        "category": "XML and Web Services",
        "related_tasks": ["T55", "CT3"]
    }]
} 
```

See the [Include Parameters](#include-parameters) section for more details.

Parameter             | Description
----------------------|---------------
related_tasks         | Includes a list of tasks that relate to each problem
category              | Includes the category that applies to each problem



## Get a Specific Library Weakness

```http
GET /api/v2/library/problems/P3/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [{
        "description": "This is some example description.", 
        "cwes": [359], 
        "id": "P3", 
        "title": "Example Library Weakness",
        "risk_rating": 5
    }]
} 

```

This endpoint retrieves a single library problem resource, as specified by the id parameter.

**`GET /api/v2/library/problems/{problem_id}/`**

### URL Parameters

Parameter      | Description
-------------- | ---------------
problem_id     | The id of the problem to retrieve


*All of the expand and include parameters for the 'Get All Library Weaknesses' endpoint apply here as well.*

