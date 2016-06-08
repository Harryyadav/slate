# Task Statuses

## Get all Task Statuses

```http
GET /api/v2/task-statuses/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [
        {
            "id": "TS3",
            "meaning": "NA",
            "icon": "minus-circle",
            "name": "Not Applicable",
            "slug": "NA"
        },
        {
            "id": "TS2",
            "meaning": "TODO",
            "icon": "clock-o",
            "name": "Incomplete",
            "slug": "TODO"
        },
        {
            "id": "TS1",
            "meaning": "DONE",
            "icon": "check",
            "name": "Complete",
            "slug": "DONE"
        }
    ]
}
```

This endpoint returns a list of Task Status resources.

**`GET /api/v2/task-statuses/`**


### Query Parameters

The following parameters may be used to filter the task status resources in the response.

Parameter | Description
----------|-----------------------------
meaning   | Returns a list of the task statuses with the specified meaning field.
