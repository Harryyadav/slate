# Analysis Connections

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
        "system": {
            "id": "fortify",
            "name": "Fortify"
        },
        "inaccessible": false
    }]
}
```

Returns a list of all analysis connectors available.

**`GET /api/v2/connectors/analysis/`**

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
    "system": {
        "id": "fortify",
        "name": "Fortify"
    },
    "inaccessible": false
}
```

Returns a specific analysis connector.

**`GET /api/v2/connectors/analysis/{id}/`**

---










## Get All Analysis Connections of All Projects

```http
GET /api/v2/connections/analysis/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [{
        "id": 1,
        "connector": 1,
        "project": 1,
        "system": {
            "id": "whitehat",
            "name": "WhiteHat"
        },
        "alias": "WhiteHat Integration",
        "frequency": "manually",
        "command": "sync_whitehat",
        "params": {
            "asset_name": "WebGoat Java",
            "sde_project": "WhiteHat",
            "sde_businessunit": "General",
            "sde_application": "Demo Application",
            "import_behaviour": "replace-scanner",
            "analysis_server": "server.whitehatsec.com",
            "task_status_mapping": "{}"
        },
        "inaccessible": false
    }]
}
```

Returns a list of all analysis connections associated with all projects. The params are only displayed if you have the 'Edit security tool connections' permission.

**`GET /api/v2/connections/analysis/`**

### Include Parameters

```http
GET /api/v2/connections/analysis/?include=last_job HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [{
        "id": 1,
        "connector": 1,
        "project": 1,
        "system": "WhiteHat",
        "alias": "WhiteHat Integration",
        "frequency": "manually",
        "command": "sync_whitehat",
        "params": {
            "asset_name": "WebGoat Java",
            "sde_project": "WhiteHat",
            "sde_businessunit": "General",
            "sde_application": "Demo Application",
            "import_behaviour": "replace-scanner",
            "analysis_server": "server.whitehatsec.com",
            "task_status_mapping": "{}"
        },
        inaccessible": false
         "last_job": {
            "id": 4,
            "last_run": "2016-12-15T22:45:27.412Z",
            "automatic": false,
            "ready": true,
            "result_message": "Error Message",
            "succeeded": false,
            "user": 1
        }
    }]
}
```

See the [Include Parameters](#include-parameters) section for more details.

Parameter | Description
----------|---------------
last_job  | Include the details of the last job executed for this connection.










## Get a Specific Analysis Connection

```http
GET /api/v2/connections/analysis/{connection_id}/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": 1,
    "connector": 1,
    "project": 1,
    "system": {
        "id": "whitehat",
        "name": "WhiteHat"
    },
    "alias": "WhiteHat Integration",
    "frequency": "manually",
    "command": "sync_whitehat",
    "params": {
        "asset_name": "WebGoat Java",
        "sde_project": "WhiteHat",
        "sde_businessunit": "General",
        "sde_application": "Demo Application",
        "import_behaviour": "replace-scanner",
        "analysis_server": "server.whitehatsec.com",
        "task_status_mapping": "{}"
    },
    "inaccessible": false
}
```

Returns a specific analysis connection. The params are only displayed if you have the 'Edit security tool connections' permission.

**`GET /api/v2/connections/analysis/{connection_id}/`**

---










## Create an Analysis Connection

```http
POST /api/v2/connections/analysis/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "alias": "Example Analysis Connection",
    "connector": 2,
    "project": 1,
    "frequency": "daily",
    "params": {
        "task_status_mapping": "{\"pass\": \"DONE\"}",
        "import_behaviour": "combine"
    }
}
```

```http
HTTP/1.1 201 CREATED
Content-Type: application/json

{
    "id": 9,
    "connector": 2,
    "alias": "Example Analysis Connection",
    "system": {
        "id": "veracode",
        "name": "Veracode"
    },
    "project": 1,
    "frequency": "daily",
    "command": "import_veracode",
    "params":{
        "integration_mode": "api",
        "analysis_user": "Code",
        "analysis_pass": "Name",
        "sde_businessunit": "BU",
        "sde_application": "Financial App",
        "sde_project": "Example Project",
        "analysis_server": "vera",
        "task_status_mapping": "{\"pass\": \"DONE\"}",
        "import_behaviour": "combine",
        "analysis_method": "http"
        },
    "inaccessible": false
}
```

**Only remote analysis connections can be created via the api.**

Fields              | Required | Description
--------------------|----------|-------------
alias               | No       | The name of the new connection. Will default to the name of the connector.
connector           | Yes      | The id of the connector that this connection will use to connect with the ALM.
project             | Yes      | The id of the SD Elements project that this connection will connect with.
frequency           | No       | The frequency in which this connection will sync.  The available options for organizations with the advanced ALM feature are: "hourly", "daily", "weekly", "monthly" and "manually".  If unspecified, the frequency will default to "manually".  Organizations without the advanced ALM feature can only choose "manually".
params              | Yes      | A dictionary containing connections options. Please refer to product documentation for more details or reach out to support.
---










## Update a specific Analysis Connection

```http
PUT /api/v2/connections/analysis/2/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "alias": "Example Analysis Connection Updated Name",
    "connector": 2,
    "project": 1,
    "frequency": "hourly",
    "params": {}
}
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": 9,
    "connector": 2,
    "alias": "Example Analysis Connection Updated Name",
    "system": {
        "id": "veracode",
        "name": "Veracode"
    },
    "project": 1,
    "frequency": "hourly",
    "command": "import_veracode",
    "params":{
        "integration_mode": "api",
        "analysis_user": "Code",
        "analysis_pass": "Name",
        "sde_businessunit": "BU",
        "sde_application": "Financial App",
        "sde_project": "Example Project",
        "analysis_server": "vera",
        "task_status_mapping": "",
        "import_behaviour": "replace-scanner",
        "analysis_method": "http"
        },
    "inaccessible": false
}
```

Update a specific Analysis Connection resource.

**`PUT /api/v2/connections/analysis/{connection_id}/`**

### URL Parameters

Parameter | Description
--------- | -----------
connection_id   | The ID of the Analysis Connection to update
