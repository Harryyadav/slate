# Connectors

## Get All ALM Connectors

```http
GET /api/v2/connectors/alm/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [{
        "id": 1,
        "name": "Rally Connector",
        "system": "Rally",
        "inaccessible": false
    }]
}
```

Returns a list of all ALM connectors available.

**`GET /api/v2/connectors/alm/`**

### Query Parameters

The following parameters may be used to filter the ALM connectors.

Parameter | Description
----------|-----------------------------
system    | Returns all ALM connectors associated with a particular system.

---










## Get a Specific ALM Connector

```http
GET /api/v2/connectors/alm/1/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": 1,
    "name": "Rally Connector",
    "system": "Rally",
    "inaccessible": false
}
```

Returns a specific ALM connector.

**`GET /api/v2/connectors/alm/{id}/`**

---










## Get All Analysis Connectors

```http
GET /api/v2/connectors/analysis/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [{
        "id": 1,
        "name": "Fortify Connector",
        "system": "Fortify",
        "inaccessible": false
    }]
}
```

Returns a list of all analysis connectors available.

**`GET /api/v2/connectors/analysis/`**

### Query Parameters

The following parameters may be used to filter the analysis connectors.

Parameter | Description
----------|-----------------------------
system    | Returns all analysis connectors associated with a particular system.

---










## Get a Specific Analysis Connector

```http
GET /api/v2/connectors/analysis/1/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": 1,
    "name": "Fortify Connector",
    "system": "Fortify",
    "inaccessible": false
}
```

Returns a specific analysis connector.

**`GET /api/v2/connectors/analysis/{id}/`**

