# Library Problems

## Get All Library Problems 

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
        "text": "This is some example description.", 
        "cwes": [359],
        "id": "P257", 
        "title": "Privacy Violation",
        "risk_rating": 5
    }]
} 
```

This endpoint retrieves a list of Library Problem resources.

**`GET /api/v2/library/problems/`**

### Query Parameters

The following parameters may be used to filter the library problem resources in the response.

Parameter            | Description
---------------------|-------------------
risk_rating          | Given a risk rating 0-10, returns all problems with specified rating
absolute_urls        | Whether to use absolute or relative urls (default is False)
to_html              | Whether to convert markdown to html (default is False)

---

### Include Parameters

```http
GET /api/v2/library/problems/?include=related_tasks,category,cwe HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [{
        "id": "P257",
        "title": "Privacy Violation",
        "text": "This is some example description.", 
        "risk_rating": 5,
        "category": "XML and Web Services",
        "cwe": [{
            "url": "http://cwe.mitre.org/data/definitions/359", 
            "title": "Exposure of Private Information ('Privacy Violation')", 
            "id": 359
        }], 
        "related_tasks": [{
                "id": "CT1",
                "title": "Example Task 1",
                "priority": 10,
                "text": "Example task solution",
                "phase": "X1"
        }]
    }]
} 
```

See the [Include Parameters](#include-parameters) section for more details.

Parameter             | Description
----------------------|---------------
category              | Includes the category that applies to each problem
cwe                   | Includes the list of CWEs that apply to each problem
related_tasks         | Includes a list of tasks that relate to each problem










## Get a Specific Library Problem

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
        "text": "This is some example description.", 
        "id": "P3", 
        "title": "Example Library Problem",
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

*All of the expand and include parameters for the 'Get All Library Problems' endpoint apply here as well.*

