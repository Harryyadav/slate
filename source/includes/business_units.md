# Business Units

```http
GET /api/v2/business-units/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [
        {
            "id": 1,
            "slug": "example-business-unit-1",
            "name": "example business unit 1"
        },
        {
            "id": 2,
            "slug": "example-business-unit-2",
            "name": "example business unit 2"
        }
    ]
}
```

This endpoint retrieves a list of Business Unit resources, respecting the permissions of the user who has made the requested.

### Query Parameters

The following parameters may be used to filter the business unit resources in the response.

Parameter | Description
----------|-----------------------------
id        | Returns the business unit resource with the specified id.
name      | Returns the business unit resource with the specified name.
ordering  | Returns a list of business unit resources ordered by the specified field.  This endpoint accepts ordering by id.
