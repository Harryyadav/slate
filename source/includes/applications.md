# Applications

## Get All Applications

```http
GET /api/v2/applications/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [{
        "id": 1,
        "business_unit": {
            "id": 1,
            "slug": "example-business-unit-1",
            "name": "example business unit 1"
        },
        "name": "Application Test",
        "created": "2015-04-15T20:27:24.396442Z",
        "updated": "2015-04-15T20:27:24.389957Z",
        "priority": "0-none",
        "slug": "application-test",
        "tags": ["foo", "bar"]
    }]
}
```

This endpoint retrieves a list of Application resources.

**`GET /api/v2/applications/`**

### Query Parameters

The following parameters may be used to filter the application resources in the response.

Parameter     | Description
--------------|-----------------------------
business_unit | Filter applications by Business Unit ID.
name          | Filter applications by name.
priority      | Filter applications by priority.
slug          | Filter applications by slug.
ordering      | Sort applications by the specified field. Prefix field name with minus to sort descending. Sortable fields: name.
search        | Filter applications by performing a textual search on name.

---

### Include Parameters

```http
GET /api/v2/applications/?include=projects HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [{
        "id": 3,
        "business_unit": {
            "id": 1,
            "slug": "example-business-unit-1",
            "name": "example business unit 1"
        },
        "name": "Application Test",
        "created": "2015-04-15T20:27:24.396442Z",
        "updated": "2015-04-15T20:27:24.389957Z",
        "priority": "0-none",
        "slug": "application-test",
        "tags": ["foo", "bar"],
        "projects": [
            {
                "id": "1",
                "name": "Project 1",
                "slug": "project-1",
                "url": "http://example.com/bunits/test-bu/application-test/project-1/"
            },
            {
                "id": "2",
                "name": "Project 2",
                "slug": "project-2",
                "url": "http://example.com/bunits/test-bu/application-test/project-2/"
            }
        ]
    }]
}
```

See the [Include Parameters](#include-parameters) section for more details.

Parameter | Description
----------|---------------
projects  | Includes a list of projects associated with an application










## Get a Specific Application

```http
GET /api/v2/applications/3/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [{
        "id": 3,
        "business_unit": {
            "id": 1,
            "slug": "example-business-unit-1",
            "name": "example business unit 1"
        },
        "name": "Application Test",
        "created": "2015-04-15T20:27:24.396442Z",
        "updated": "2015-04-15T20:27:24.389957Z",
        "priority": "0-none",
        "slug": "application-test",
        "tags": ["foo", "bar"]
    }]
}
```

This endpoint retrieves a specific Application resource, as specified by the id parameter.

**`GET /api/v2/applications/{application_id}/`**

### URL Parameters

Parameter      | Description
-------------- | ---------------
application_id | The id of the application to retrieve

*All of the expand and include parameters for the 'Get all Applications' endpoint apply here as well.*










## Create a New Application

```http
POST /api/v2/applications/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "business_unit": 1,
    "name":"API Test"
}
```

```http
HTTP/1.1 201 CREATED
Content-Type: application/json

{
    "results": [{
        "id": 3,
        "business_unit": {
            "id": 1,
            "slug": "example-business-unit-1",
            "name": "example business unit 1"
        },
        "name": "API Test",
        "created": "2015-04-15T20:27:24.396442Z",
        "updated": "2015-04-15T20:27:24.389957Z",
        "priority": "0-none",
        "slug": "api-test",
        "tags": []
    }]
}
```

Fields        | Required | Description
--------------|----------|-------------
business_unit | Yes      | The ID of the business unit the application belongs to
name          | Yes      | The name of the new application
priority      | No       | Specifies the priority of the application to be either '0-none', '1-high', '2-medium' or '3-low'
tags          | No       | List of application tags.










## Update an Application

```http
PUT /api/v2/applications/1/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "name": "Edit Test",
    "business_unit": 2
}
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [{
        "id": 1,
        "business_unit": {
            "id": 2,
            "slug": "example-business-unit-2",
            "name": "example business unit 2"
        },
        "name": "Edit Test",
        "created": "2015-06-18T19:27:14.860536Z",
        "updated": "2015-06-18T21:00:03.827952Z",
        "priority": "0-none",
        "slug": "api-test",
        "tags": ["foo", "bar"]
    }]
}
```

Update a single application by specifying a new name and new business unit. The application to update is identified by the id.

**`PUT /api/v2/applications/{application_id}/`**

### URL Parameters

Parameter      | Description
---------------|------------------
application_id | The id of the application to edit must be submitted in the request

### Payload

Fields        | Required | Description
--------------|----------|---------------
name          | No       | The name of the application can be changed to any other string
business_unit | No       | This can be edited by setting the business unit id
priority      | No       | The three options are: '0-none', '1-high', '2-medium', '3-low'
tags          | No       | List of application tags.











## Delete an Application

```http
DELETE /api/v2/applications/1/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 204 NO CONTENT
```

This endpoint deletes a single Application resource, as specified by the id parameter.

**`DELETE /applications/{application_id}/`**

### URL Parameters

Parameter      | Description
-------------- | --------------
application_id | The id of the application to retrieve
