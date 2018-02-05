# Risk Policies

## Get All Risk Policies

```http
GET /api/v2/risk-policies/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [{
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
    }]
}
```

This endpoint retrieves a list of Risk Policy resources.

**`GET /api/v2/risk-policies/`**

### Query Parameters

The following parameters may be used to filter the risk policy resources in the response.

Parameter             | Description
----------------------|-----------------------------
name                  | Filter risk policies by name.
description           | Filter risk policies by description.
priority              | Filter risk policies by priority.
phases                | Filter risk policies by phases.
tags                  | Filter risk policies by tags.
task_statuses         | Filter risk policies by task status.

---


## Get a Specific Risk Policy

```http
GET /api/v2/risk-policies/1/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
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
```

This endpoint retrieves a specific risk policy resource, as specified by the id parameter.

**`GET /api/v2/risk-policies/{risk_policy_id}/`**

### URL Parameters

Parameter      | Description
-------------- | ---------------
risk_policy_id | The id of the risk policy to retrieve


---

### Expand Parameters

```http
GET /api/v2/risk-policies/1/?expand=phases,task_statuses HTTP/1.1
Accept: application/json
Authorization: Token: "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": 1,
    "default": true,
    "name": "All Risk",
    "description": "Applies to all applications",
    "filters": {
        "phases": [
            {
                "name": "Requirements",
                "slug": "requirements"
            },
            {
                "name": "Architecture & Design",
                "slug": "architecture-design"
            },
            {
                "name": "Development"
                "slug": "development"
            },
            {
                "name": "Testing"
                "slug": "testing"
            }
        ],
        "priority": 7,
        "tags": ["tag1", "tag2"]
    },
    "conditions": {
        "task_statuses": [
            {
                name: "Complete",
                item_id: "TS1"
            }
        ]
    }
}
```

See the [Expand Parameters](#expand-parameters) section for more details.

Parameter     | Description
--------------|---------------------
phases        | Phases field is expanded to include Phase names.
task_statuses | Task Statuses field is expanded to include Task Status names.
---


## Create a New Risk Policy

```http
POST /api/v2/risk-policies/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "name": "Low Risk",
    "description": "Applies to all applications",
    "filters": {
        "phases": ["requirements", "architecture-design", "development", "testing"],
        "priority": 7,
        "tags": ["tag1", "tag2"]
    },
    "conditions": {
        "task_statuses": ["TS1"]
    }
}
```

```http
HTTP/1.1 201 CREATED
Content-Type: application/json

{

    "id": 2,
    "is_org_default": false,
    "created": "2018-01-31T17:30:26.175423-05:00",
    "last_updated": "2018-01-31T17:30:26.175253-05:00"
    "name": "Low Risk",
    "description": "Applies to all applications",
    "filters": {
        "phases": ["requirements", "architecture-design", "development", "testing"],
        "priority": 7,
        "tags": ["tag1", "tag2"]
    },
    "conditions": {
        "task_statuses": ["TS1"]
    }
}
```

Fields                   | Required | Description
-------------------------|----------|-------------
name                     | Yes      | The name of the new risk policy.
description              | Yes      | The description of the risk policy.
is_org_default           | No       | A boolean field which shows if this is the default risk policy of the user's organization. Defaults to false.
filters.priority         | No       | Tasks in this policy must have a priority greater or equal to this value.  Must be a value from 1 to 10.  Defaults to 7.
filters.phases           | No       | Tasks in this policy must be in one of these phases.
filters.tags             | No       | Tasks in this policy must have one of these tags.
conditions.task_statuses | Yes      | To be considered compliant, tasks in this policy must have one of these statuses.






## Update a Risk Policy

```http
PATCH /api/v2/risk-policy/2/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "name": "Max Risk",
    "filters": {
        "priority": 10
    }
}
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{

    "id": 2,
    "is_org_default": false,
    "created": "2018-01-31T17:30:26.175423-05:00",
    "last_updated": "2018-01-31T17:30:26.175253-05:00"
    "name": "Max Risk",
    "description": "Applies to all applications",
    "filters": {
        "phases": ["requirements", "architecture-design", "development", "testing"],
        "priority": 10,
        "tags": ["tag1", "tag2"]
    },
    "conditions": {
        "task_statuses": ["TS1"]
    }
}

```

Update a single risk policy by specifying a new name and priority. The risk policy to update is identified by the id.

**`PATCH /api/v2/risk-policies/{risk_policy_id}/`**

### URL Parameters

Parameter      | Description
---------------|------------------
risk_policy_id | The id of the risk policy to edit must be submitted in the request

### Payload

Fields                   | Required | Description
-------------------------|----------|-------------
name                     | No       | The name of the new risk policy.
description              | No       | The description of the risk policy.
is_org_default           | No       | A boolean field which shows if this is the default risk policy of the user's organization. Defaults to false.
filters.priority         | No       | Tasks in this policy must have a priority greater or equal to this value.  Must be a value from 1 to 10.  Defaults to 7.
filters.phases           | No       | Tasks in this policy must be in one of these phases.
filters.tags             | No       | Tasks in this policy must have one of these tags.
conditions.task_statuses | No       | To be considered compliant, tasks in this policy must have one of these statuses.











## Delete a Risk Policy

```http
DELETE /api/v2/risk-policies/1/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "replacement": 2
}
```

```http
HTTP/1.1 204 NO CONTENT
```

This endpoint deletes a single Risk Policy resource, as specified by the id parameter.

**`DELETE /risk-policies/{risk_policy_id}/`**

### URL Parameters

Parameter      | Description
-------------- | --------------
risk_policy_id | The id of the risk policy to delete must be submitted in the request.

### Payload

Fields                | Required | Description
----------------------|----------|-------------
replacement           | Yes      | The risk policy ID to move the associated projects.
