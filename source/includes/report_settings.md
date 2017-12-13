# Report Settings

## Get All Report Settings

```http
GET /api/v2/report-settings/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [{
        "id": "CR1",
        "title": "Example Report",
        "filters": {
            "application":[{"name": "app1", "id": 1}],
            "priority": ["high", "medium"],
            "state": false,
            "phase":[{"name": "Requirements", "id": "requirements"}],
        },
        "filter_query": {
            "project":  {
                "$and":[
                    {
                        "archived": {
                            "$exact": false
                        }
                    },
                    {
                        "application": {
                            "$in": [
                                1
                            ]
                        }
                    }
                ]
            },
            "task": {
                "$and": [
                    {
                        "priority_label":   {
                            "$in":["high", "medium"]
                        }
                    }
                    {
                        "phase": {
                            "$in": [
                                "requirements"
                            ]
                        }
                    }
                ]
            }
        },
        "template": "project"
}
```

This endpoint retrieves a list of Report Settings resources.

**`GET /api/v2/report-settings/`**

### Query Parameters

The following parameters may be used to filter the report setting resources resources in the response.

Parameter | Description
----------|-----------------------------
template  | Returns a list of report settings with the specified template













## Get a Specific Report Setting

```http
GET /api/v2/report-settings/CR1/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [{
        "id": "CR1",
        "title": "Example Report",
        "filters": {
            "application": [{"name": "app1", "id": 1}],
            "priority": ["high", "medium"],
            "state": false,
            "phase":[{"name": "Requirements", "id": "requirements"}],
        },
        "filter_query": {
            "project":  {
                "$and":[
                    {
                        "archived": {
                            "$exact": false
                        }
                    },
                    {
                        "application": {
                            "$in": [
                                1
                            ]
                        }
                    }
                ]
            },
            "task": {
                "$and": [
                    {
                        "priority_label":   {
                            "$in":["high", "medium"]
                        }
                    }
                    {
                        "phase": {
                            "$in": [
                                "requirements"
                            ]
                        }
                    }
                ]
            }
        },
        "template": "project"
}
```

This endpoint retrieves a specific Report Setting resource, as specified by the id parameter.

**`GET /api/v2/applications/{report-settings_id}/`**

### URL Parameters

Parameter          | Description
-------------------| ---------------
report-settings_id | The id of the report setting to retrieve










## Create A New Report Setting

```http
POST /api/v2/report-settings/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "template": "project",
    "title": "API Test Report Settings"
}
```

```http
HTTP/1.1 201 CREATED
Content-Type: application/json

{
    "id": "CR3",
    "title": "API Test Report Settings",
    "filters": null,
    "filter_query":{
        "project":{},
        "task":{}
    },
    "template": "project"
}
```

Fields        | Required | Description
--------------|----------|-------------
filters       | No       | A json object containing any filters on the project survey.
filter_query  | No       | A json object containing the query to be run against the project resource.
template      | Yes      | The type of report that the settings apply to.  Usually set to "project".
title         | Yes      | A string representing a unique title of the report settings.

The following filters are available to filter the scope of the project report:

* project
* projectTags
* priority
* application
* state
* phase
* taskTags
* businessUnit








## Delete a Report Setting

```http
DELETE /api/v2/report-settings/CR1/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json
```

This endpoint deletes a specific Report Setting as identified by the id.

**`DELETE /api/v2/report-settings/{report-settings_id}/`**

Parameter          | Description
-------------------| ---------------
report-settings_id | The id of the report setting to delete

