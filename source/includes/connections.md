# Connections

## Get All ALM Connections of All Projects

```http
GET /api/v2/connections/alm/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [{
        "id": 1,
        "connector": 2,
        "project": 2,
        "system": "Rally",
        "alias": "Rally Integration",
        "frequency": "manually",
        "command": "sync_rally",
        "params": {
            "sde_project": "Demo Project",
            "alm_user": "rally_user",
            "sde_verification_filter": "none,partial,pass,fail",
            "rally_workspace": "Rally Workspace",
            "alm_method": "https",
            "alm_title_format": "$task_id $title",
            "alm_server": "rally1.rallydev.com",
            "sde_businessunit": "General",
            "sde_application": "Demo Application",
            "alm_project": "Rally Project",
            "alm_pass": "rally_password",
            "alm_phases": "requirements,architecture-design,development",
            "sde_statuses_in_scope": "TODO",
            "conflict_policy": "alm",
            "sde_min_priority": 7
        },
        "inaccessible": false,
    }]
}
```

Returns a list of all ALM connections associated with all projects. The params are only displayed if you have the 'Edit ALM connections' permission.

**`GET /api/v2/connections/alm/`**

### Query Parameters

The following parameters may be used to filter the ALM connections resources in the response.

Parameter | Description
----------|-----------------------------
alias     | Returns all ALM connections with the specified alias.
frequency | Returns all ALM connections with the specified frequency of synchronization.
system    | Returns all ALM connections associated with a particular system.

---










## Get a Specific ALM Connection

```http
GET /api/v2/connections/alm/{connection_id}/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": 1,
    "connector": 2,
    "project": 2,
    "system": "Rally",
    "alias": "Rally Integration",
    "frequency": "manually",
    "command": "sync_rally",
    "params": {
        "sde_project": "Demo Project",
        "alm_user": "rally_user",
        "sde_verification_filter": "none,partial,pass,fail",
        "rally_workspace": "Rally Workspace",
        "alm_method": "https",
        "alm_title_format": "$task_id $title",
        "alm_server": "rally1.rallydev.com",
        "sde_businessunit": "General",
        "sde_application": "Demo Application",
        "alm_project": "Rally Project",
        "alm_pass": "rally_password",
        "alm_phases": "requirements,architecture-design,development",
        "sde_statuses_in_scope": "TODO",
        "conflict_policy": "alm",
        "sde_min_priority": 7
    },
    "inaccessible": false,
}
```

Returns a specific ALM connection. The params are only displayed if you have the 'Edit ALM connections' permission.

**`GET /api/v2/connections/alm/{connection_id}/`**

---





## Create an ALM Connection

```http
POST /api/v2/connections/alm/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "alias": "Example Connection",
    "connector": 1,
    "project": 1,
    "frequency": "hourly",
    "params":{
        "alm_project": "Example Project",
        "alm_parent_issue": "Parent"
    }
}

```

```http
HTTP/1.1 201 CREATED
Content-Type: application/json

{
    "id": 5,
    "connector": 1,
    "alias": "Example Connection",
    "system": "JIRA",
    "project": 1,
    "frequency": "hourly",
    "command": "sync_jira",
    "params":{
        "sde_project": "Proj 1",
        "alm_user": "Sindy",
        "sde_verification_filter": "none,partial,pass,fail",
        "jira_version": "5",
        "alm_method": "https",
        "alm_title_format": "$task_id $title",
        "alm_server": "bugs.server.co",
        "sde_businessunit": "BU",
        "sde_application": "Finance App",
        "alm_project": "Example Project",
        "alm_pass": "id",
        "alm_phases": "requirements,architecture-design,development",
        "sde_statuses_in_scope": "TODO",
        "conflict_policy": "alm",
        "sde_min_priority": 7,
        "alm_reference_context": 5
    },
    "inaccessible": false
}
```

Fields              | Required | Description
--------------------|----------|-------------
alias               | Yes      | The name of the new connection.
connector           | Yes      | The id of the connector that this connection will use to connect with the ALM.
project             | Yes      | The id of the SD Elements project that this connection will connect with.
frequency           | No       | The frequency in which this connection will sync.  The available options for organizations with the advanced ALM feature are: "hourly", "daily", "weekly", "monthly" and "manually".  If unspecified, the frequency will default to "manually".  Organizations without the advanced ALM feature can only choose "manually".
params              | Yes      | A dictionary containing connections options. Please refer to product documentation for more details or reach out to support.
---










## Update a specific ALM Connection

```http
PUT /api/v2/connections/alm/1/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "alias": "Example Connection Updated Name",
    "connector": 1,
    "project": 1,
    "frequency": "manually",
    "params": {"alm_project": "Project Name"}
}
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": 5,
    "connector": 1,
    "alias": "Example Connection Updated Name",
    "system": "JIRA",
    "project": 1,
    "frequency": "manually",
    "command": "sync_jira",
    "params":{
        "sde_project": "Proj 1",
        "alm_user": "Sindy",
        "sde_verification_filter": "none,partial,pass,fail",
        "jira_version": "5",
        "alm_method": "https",
        "alm_title_format": "$task_id $title",
        "alm_server": "bugs.server.co",
        "sde_businessunit": "BU",
        "sde_application": "Finance App",
        "alm_project": "Project Name",
        "alm_pass": "id",
        "alm_phases": "requirements,architecture-design,development",
        "sde_statuses_in_scope": "TODO",
        "conflict_policy": "alm",
        "sde_min_priority": 7,
        "alm_reference_context": 5
    },
    "inaccessible": false
}
```

Update a specific ALM Connection resource.

**`PUT /api/v2/connections/alm/{connection_id}/`**

### URL Parameters

Parameter | Description
--------- | -----------
connection_id   | The ID of the ALM Connection to update

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
    }]
}
```

Returns a list of all analysis connections associated with all projects. The params are only displayed if you have the 'Edit security tool connections' permission.

**`GET /api/v2/connections/analysis/`**

### Query Parameters

The following parameters may be used to filter the analysis connections resources in the response.

Parameter | Description
----------|-----------------------------
alias     | Returns all analysis connections with the specified alias.
frequency | Returns all analysis connections with the specified frequency of synchronization.
system    | Returns all analysis connections associated with a particular system.

---

















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
    "system": "Veracode",
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
    "system": "Veracode",
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




