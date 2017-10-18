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
        "default": true,
        "name": "All Risk",
        "description": "Applies to all applications",
        "phases": ["requirements", "architecture-design", "development", "testing"],
        "priority": 7,
        "task_statuses": ["DONE"],
        "verification_statuses": ["pass"]
    }]
}
```

This endpoint retrieves a list of Risk Policy resources.

**`GET /api/v2/risk-policies/`**

### Query Parameters

The following parameters may be used to filter the risk policy resources in the response.

Parameter             | Description
----------------------|-----------------------------
name                  | Filter applications by name.
description           | Filter applications by description.
priority              | Filter applications by priority.
phases                | Filter applications by phases.
task_statuses         | Filter applications by task status.
verification_statuses | Filter applications by verification status.

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
    "default": true,
    "name": "All Risk",
    "description": "Applies to all applications",
    "phases": ["requirements", "architecture-design", "development", "testing"],
    "priority": 7,
    "task_statuses": ["DONE"],
    "verification_statuseses": ["pass"]
}
```

This endpoint retrieves a specific risk policy resource, as specified by the id parameter.

**`GET /api/v2/applications/{risk_policy_id}/`**

### URL Parameters

Parameter      | Description
-------------- | ---------------
risk_policy_id | The id of the risk policy to retrieve




## Create a New Risk Policy

```http
POST /api/v2/risk-policies/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "name": "Low Risk",
    "description": "Applies to all applications",
    "phases": ["requirements"],
    "priority": 1,
    "task_statuses": ["DONE"],
    "verification_statuseses": ["pass"]
}
```

```http
HTTP/1.1 201 CREATED
Content-Type: application/json

{

    "id": 1,
    "default": false,
    "name": "Low Risk",
    "description": "Applies to all applications",
    "phases": ["requirements"],
    "priority": 1,
    "task_statuses": ["DONE"],
    "verification_statuses": ["pass"]
}
```

Fields                | Required | Description
----------------------|----------|-------------
name                  | Yes      | The name of the new risk policy.
description           | Yes      | The description of the risk policy.
default               | No       | A boolean field which shows if this is the default risk policy. Ddefaults to false.
priority              | No       | Tasks in this policy must have a priority greater or equal to this value.  Must be a value from 1 to 10.  Defaults to 7.
phases                | No       | Tasks in this policy must be in one of these phases.
task_statuses         | No       | Tasks in this policy must have one of these statuses. (DONE/TODO/NA)
verification_statuses | No       | Tasks in this policy must have one of these verification statuses. (fail/pass/partial/none)






## Update a Risk Policy

```http
PATCH /api/v2/risk-policy/1/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "name": "Max Risk",
    "priority": 10
}
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{

    "id": 1,
    "default": false,
    "name": "Max Risk",
    "description": "Applies to all applications",
    "phases": ["requirements"],
    "priority": 10,
    "task_statuses": ["DONE"],
    "verification_statuses": ["pass"]
}

```

Update a single risk policy by specifying a new name and priority. The risk policy to update is identified by the id.

**`PATCH /api/v2/risk-policies/{risk_policy_id}/`**

### URL Parameters

Parameter      | Description
---------------|------------------
risk_policy_id | The id of the risk policy to edit must be submitted in the request

### Payload

Fields                | Required | Description
----------------------|----------|-------------
name                  | No       | The name of the new risk policy.
description           | No       | The description of the risk policy.
default               | No       | A boolean field which shows if this is the default risk policy. 
priority              | No       | Tasks in this policy must have a priority greater or equal to this value.  Must be a value from 1 to 10.  Defaults to 7.
phases                | No       | Tasks in this policy must be in one of these phases.
task_statuses         | No       | Tasks in this policy must have one of these statuses. (DONE/TODO/NA)
verification_statuses | No       | Tasks in this policy must have one of these verification statuses. (fail/pass/partial/none)











## Delete a Risk Policy

```http
DELETE /api/v2/risk-policies/1/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 204 NO CONTENT
```

This endpoint deletes a single Risk Policy resource, as specified by the id parameter.

**`DELETE /risk-policies/{risk_policy_id}/`**

### URL Parameters

Parameter      | Description
-------------- | --------------
risk_policy_id | The id of the risk policy to edit must be submitted in the request
