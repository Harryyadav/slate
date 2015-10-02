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
            "name": "example business unit 1",
            "created": "2015-09-30T18:28:37.214914Z",
            "updated": "2015-09-30T18:28:37.214959Z",
            "default_members": {
                "default_users": [
                    {
                        "role": "UR4",
                        "id": 5,
                        "email": "jamie.red@example.com"
                    }
                ],
                "default_groups": [
                    {
                        "role": "UR1",
                        "id": "G1",
                        "email": "SC@example.com"
                    }
                ]
            }
        },
        {
            "id": 2,
            "slug": "example-business-unit-2",
            "name": "example business unit 2",
            "created": "2015-09-30T19:30:25.254036Z",
            "updated": "2015-09-30T19:30:25.254072Z",
            "default_members": {
                "default_users": [],
                "default_groups": []
            }
        }
    ]
}
```

This endpoint retrieves a list of Business Unit resources, respecting the permissions of the user who has made the request.

**`GET /api/v2/business-units/`**

### Query Parameters

The following parameters may be used to filter the business unit resources in the response.

Parameter | Description
----------|-----------------------------
id        | Returns the business unit resource with the specified id.
name      | Returns the business unit resource with the specified name.
ordering  | Returns a list of business unit resources ordered by the specified field.  This endpoint accepts ordering by id.
