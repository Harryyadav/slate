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
            "description": "Application security requirements, generally used to assist requirements analysts.",
            "name": "Requirements",
            "slug": "requirements",
            "tip": "One-time tasks that you can verify. Similar to traditional functional requirements or user stories."
        }
    ]
}
```
This endpoint retrieves a list of Phase resources, which describe phases of a software development process.

**`GET /api/v2/phases/`**


### Query Parameters

The following parameters may be used to filter the application resources in the response.

Parameter | Description
----------|-------------
name      | Returns the phase resource with specified name
slug      | Returns the phase resource with the specified slug


## Get a Specific Phase

```http
GET /api/v2/phases/1/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "description": "Application security requirements, generally used to assist requirements analysts.",
    "name": "Requirements",
    "slug": "requirements",
    "tip": "One-time tasks that you can verify. Similar to traditional functional requirements or user stories."
}
```

This endpoint retrieves a single phase resource, as specified by the id parameter.

**`GET /api/v2/phases/{phase_id}/`**

### URL Parameters

Parameter  | Description
---------- | ---------------
phase_id   | The id of the phase to retrieve
