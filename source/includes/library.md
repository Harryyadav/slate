# Library

## Get All Library Standards


```http
GET /api/v2/library/standards/ HTTP/1.1
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
        "weakness": 1, 
        "title": "T179: Allow access for users to remove their data from the system", 
        "content": "Some example content", 
        "phase": "requirements", 
        "id": "T179"
    }]
} 
```
This endpoint retrieves a list of Library Standard resources.

**`GET /api/v2/library/standards/`**

### Query Parameters

The following parameters may be used to filter the library standard resources in the response.

Parameter            | Description
---------------------|-------------------
priority             | Given a priority 0-10, returns all standards with specified priority
tags                 | Given a JSON encoded list of tags, returns all standards with specified tags
phase                | Given a phase slug, returns all standards in specified phase

___

### Expand Parameters

```http
GET /api/v2/library/standards/?expand=weaknesses HTTP/1.1
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
        "weakness": {
            "content": "This is some example content.", 
            "cwes": [{
                "url": "http://cwe.mitre.org/data/definitions/359", 
                "title": "Exposure of Private Information ('Privacy Violation')", 
                "cwe_id": 359
            }], 
            "id": "P257", 
            "title": "P257: Privacy Violation"
        }, 
        "title": "T179: Allow access for users to remove their data from the system", 
        "content": "Some example content", 
        "phase": "requirements", 
        "id": "T179" 
    }]
} 

```

See the [Expand Parameters](#expand-parameters) section for more details.

Parameter     | Description
--------------|------------------------------
weaknesses    | expands the weakness fields in the standard response object

---

### Include Parameters

```http
GET /api/v2/library/standards/?include=verification_coverage,categories HTTP/1.1
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
        "weakness": 1, 
        "title": "T179: Allow access for users to remove their data from the system", 
        "content": "Some example content", 
        "phase": "requirements", 
        "id": "T179", 
        "categories": [
            "1", 
            "2"
        ], 
        "verification_coverage": [
            "No Automated Static Analysis Coverage"
        ]
    }]
} 
```

See the [Include Parameters](#include-parameters) section for more details.

Parameter             | Description
----------------------|---------------
categories            | includes a list of categories that apply to each standard
verification_coverage | includes a list of verification coverages of each standard 
howtos                | ??




## Get a Specific Library Standard

```http
GET /api/v2/library/standards/T3/ HTTP/1.1
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
        "weakness": 1,
        "title": "T3: Example Library Standard", 
        "content": "Some example content", 
        "phase": "requirements", 
        "id": "T3"
    }]
} 

```

This endpoint retrieves a single library standard resource, as specified by the id parameter.

**`GET /api/v2/library/standard/{standard_id}/`**

### URL Parameters

Parameter      | Description
-------------- | ---------------
standard_id    | The id of the standard to retrieve


*All of the expand and include parameters for the 'Get All Library Standards' endpoint apply here as well.*




## Get All Library Weaknesses


```http
GET /api/v2/library/weaknesses/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [{
        "content": "This is some example content.", 
        "cwes": [359],
        "id": "P257", 
        "title": "P257: Privacy Violation",
        "risk_rating": 5
    }]
} 
```
This endpoint retrieves a list of Library Weakness resources.

**`GET /api/v2/library/weaknesses/`**

### Query Parameters

The following parameters may be used to filter the library weakness resources in the response.

Parameter            | Description
---------------------|-------------------
risk_rating          | Given a risk rating 0-10, returns all weaknesses with specified rating
tags                 | Given a JSON encoded list of tags, returns all standards with specified tags

___

### Expand Parameters

```http
GET /api/v2/library/weaknesses/?expand=cwes HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [{
        "content": "This is some example content.", 
        "cwes": [{
            "url": "http://cwe.mitre.org/data/definitions/359", 
            "title": "Exposure of Private Information ('Privacy Violation')", 
            "cwe_id": 359
        }], 
        "id": "P257", 
        "title": "P257: Privacy Violation",
        "risk_rating": 5
    }]
} 

```

See the [Expand Parameters](#expand-parameters) section for more details.

Parameter     | Description
--------------|------------------------------
cwes          | Expands the CWE field in the weakness response object


---

### Include Parameters

```http
GET /api/v2/library/weaknesses/?include=related_tasks,category HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [{
        "content": "This is some example content.", 
        "cwes": [{
            "url": "http://cwe.mitre.org/data/definitions/359", 
            "title": "Exposure of Private Information ('Privacy Violation')", 
            "cwe_id": 359
        }], 
        "id": "P257", 
        "title": "P257: Privacy Violation",
        "risk_rating": 5,
        "category": "XML and Web Services",
        "related_tasks": ["T55", "CT3"]
    }]
} 
```

See the [Include Parameters](#include-parameters) section for more details.

Parameter             | Description
----------------------|---------------
related_tasks         | includes a list of tasks that relate to each weakness
category              | includes the category that applies to each weakness



## Get a Specific Library Weakness

```http
GET /api/v2/library/weaknesses/P3/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [{
        "content": "This is some example content.", 
        "cwes": [359], 
        "id": "P3", 
        "title": "P3: Example Library Weakness",
        "risk_rating": 5
    }]
} 

```

This endpoint retrieves a single library weakness resource, as specified by the id parameter.

**`GET /api/v2/library/weaknesses/{weakness_id}/`**

### URL Parameters

Parameter      | Description
-------------- | ---------------
weakness_id    | The id of the weakness to retrieve


*All of the expand and include parameters for the 'Get All Library Weaknesses' endpoint apply here as well.*

