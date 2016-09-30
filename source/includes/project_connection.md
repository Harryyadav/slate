# Project Connection 

## Fetch Project Data From The Active Connection

```http
GET /api/v2/project-connection/?external_id=SDE-234 HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [
        {
            "name": "Sample Jira Project",
            "description": "A Jira project for... ",
            "custom_attributes": {
                "jira_project_id": "12345",
                "lead": "Ram"
            }
        }
    ]
}
```

This endpoint fetches Project data using the active Project Connection.

**`GET /api/v2/project-connection/?external_id=external_id`**

### Query Parameters

Parameter         | Description
----------------- | -----------
external_id       | The id of the Project to retrieve using the active connection.


