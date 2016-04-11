# Tags

## Get all tags

```http
GET /api/v2/tags/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [{
        "name": "important"
    },
    {
        "name": "deployment"
    },
    {
        "name": "my_tag"
    }]
}
```

This endpoint returns a list of Tag resources.

**`GET /api/v2/tags/`**
