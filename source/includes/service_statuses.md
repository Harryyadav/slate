# Service Status

## Get Service Statuses

```http
GET /api/v2/service-statuses/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [{
        "name": "keyczar",
        "available": true,
        "message": "OK"
    }, {
        "name": "celery",
        "available": true,
        "message": "OK"
    }, {
        "name": "rabbitmq",
        "available": true,
        "message": "OK"
    }]
}
```

This endpoint returns the status of all services used by SDElements.
Available only for SDE super-users.

**`GET /api/v2/service-statuses/`**