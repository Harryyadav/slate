# Phases

## Get All Phases

```http
GET /api/v2/phases/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [
        {
            "id": "X1",
            "description": "Application security requirements, generally used to assist requirements analysts.",
            "name": "Requirements",
            "slug": "requirements",
            "tip": "One-time tasks that you can verify. Similar to traditional functional requirements or user stories.",
            "ordinal": 1,
            "active": "true",
            "is_custom": "true",
            "retain": "true"
        }
    ]
}
```

This endpoint retrieves a list of Phase resources, which describe phases of a software development process.

**`GET /api/v2/phases/`**

### Query Parameters

The following parameters may be used to filter the phases resources in the response.

Parameter | Description
----------|-------------
name      | Returns the phase resource with specified name
slug      | Returns the phase resource with the specified slug










## Get a Specific Phase

```http
GET /api/v2/phases/X1/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": "X1",
    "description": "Application security requirements, generally used to assist requirements analysts.",
    "name": "Requirements",
    "slug": "requirements",
    "tip": "One-time tasks that you can verify. Similar to traditional functional requirements or user stories.",
    "ordinal": 1,
    "active": "true",
    "is_custom": "true",
    "retain": "true"
}
```

This endpoint retrieves a specific Phase resource, as specified by the id parameter.

**`GET /api/v2/phases/{phase_id}/`**

### URL Parameters

Parameter  | Description
---------- | ---------------
phase_id   | The id of the phase to retrieve


## Create a Phase

```http
POST /api/v2/phases/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "name": "New Phase",
    "description": "description",
    "tip": "tip",
    "ordinal": 1,
    "active": "true",
    "retain": "true"
}
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": "CX1",
    "name": "New Phase",
    "slug": "new_phase",
    "description": "description",
    "tip": "tip",
    "ordinal": 1,
    "active": "true",
    "is_custom": "true",
    "retain": "true"
}
```

This endpoint creates a new Phase resource.

**`POST /api/v2/phases/{phase_id}/`**

Fields             | Required | Description
-------------------|----------|-------------
name               | Yes      | The name of the phase.
description        | Yes      | The description of the phase.
tip                | Yes      | The tooltip for the phase.
ordinal            | Yes      | The order of the phase.
active             | No       | Whether or not the phase is active.
retain             | No       | Determines whether this phase carries over statuses and notes by default.



## Update a Phase

```http
PUT /api/v2/phases/CX1/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "name": "Updated Requirements",
    "description": "Updated Application security requirements",
    "tip": "updated tip",
    "ordinal": 1,
    "active": "true",
    "retain": "true",
}
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": "CX1",
    "name": "Updated Requirements",
    "slug": "updated_requirements",
    "description": "Updated Application security requirements",
    "tip": "updated tip",
    "ordinal": 1,
    "active": "true",
    "is_custom": "true",
    "retain": "true"
}
```

This endpoint updates a specific Phase resource, as specified by the id parameter.

**`PUT /api/v2/phases/{phase_id}/`**

Fields             | Required | Description
-------------------|----------|-------------
name               | Yes      | The name of the phase.
description        | Yes      | The description of the phase.
tip                | Yes      | The tooltip for the phase.
ordinal            | Yes      | The order of the phase.
active             | No       | Whether or not the phase is active.
retain             | No       | Determines whether this phase carries over statuses and notes by default.

**`PATCH /api/v2/phases/{phase_id}/`**

Fields             | Required | Description
-------------------|----------|-------------
name               | No      | The name of the phase.
description        | No      | The description of the phase.
tip                | No      | The tooltip for the phase.
ordinal            | No      | The order of the phase.
active             | No      | Whether or not the phase is active.
retain             | No      | Determines whether this phase carries over statuses and notes by default.

### URL Parameters

Parameter  | Description
---------- | ---------------
phase_id   | The id of the phase to update





## Delete a Phase

```http
DELETE /api/v2/phases/CX1/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "replacement": "CX2"
}
```

```http
HTTP/1.1 204 NO CONTENT
Content-Type: application/json

{}
```

This endpoint deletes a specific Phase resource, as specified by the id parameter.

**`DELETE /api/v2/phases/{phase_id}/`**

Fields        | Required | Description
--------------|----------|-------------
replacement   | Yes      | The phase to move the tasks of the current phase to.

### URL Parameters

Parameter  | Description
---------- | ---------------
phase_id   | The id of the phase to delete

