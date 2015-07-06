# Integration Connectors


## Get all integrations connectors


```http
GET /api/v2/integration-connectors/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [{
        "id": 1,
        "connector_name": "HP Rally Connection",
        "system": "Rally",
        "type": "ALM"
    }]
}
```

Will return a list of all integrations connectors available.

**`GET /api/v2/integration-connectors/`**

### Query Parameters

The following parameters may be used to filter the integration connectors.

Parameter | Description
----------|-----------------------------
system    | Returns all integrations associated with a particular system.
type      | Returns all integrations of a particular type. e.g. ALM, Analysis Tool, etc.

---

## Get a specific integrations connector


```http
GET /api/v2/integration-connectors/1/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": 1,
    "connector_name": "HP Rally Connection",
    "system": "Rally",
    "type": "ALM"
}
```

Will return a specific integrations connector.

**`GET /api/v2/integration-connectors/{id}`**

