# Integrations


## Get All ALM Integrations of All Projects


```http
GET /api/v2/integrations/alm/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [{
        "id": 1,
        "project_id": 2,
        "system": "Rally",
        "alias": "Rally Integration",
        "frequency": "manually",
        "command": "sync_rally"
    }]
}
```

Returns a list of all ALM integrations associated with all projects.

**`GET /api/v2/integrations/alm/`**

### Query Parameters

The following parameters may be used to filter the ALM integrations resources in the response.

Parameter | Description
----------|-----------------------------
alias     | Returns all ALM integrations with the specified alias.
frequency | Returns all ALM integrations with the specified frequency of synchronization.
system    | Returns all ALM integrations associated with a particular system.

---

### Include Parameters


```http
GET /api/v2/integrations/alm/?include=params HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json


{
    "results": [{
        "id": 1,
        "project_id": 2,
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
        }
    }]
}

```

See the [Include Parameters](#include-parameters) section for more details.

Parameter   | Description
------------|---------------------
params      | Includes a params field that specifies the configuration parameters for the ALM integration.

---

## Get All ALM Integrations for a Specific Project


```http
GET /api/v2/projects/1/integrations/alm/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [{
        "id": 1,
        "system": "Rally",
        "alias": "Rally Integration",
        "frequency": "manually",
        "command": "sync_rally"
    }]
}
```

Returns a list of all ALM integrations associated with the project having id "project_id".

**`GET /api/v2/projects/{project_id}/integrations/alm/`**

### Query Parameters

The following parameters may be used to filter the integrations resources in the response.

Parameter | Description
----------|-----------------------------
alias     | Returns all ALM integrations with the specified alias.
frequency | Returns all ALM integrations with the specified frequency of synchronization.
system    | Returns all ALM integrations associated with a particular system.

---

### Include Parameters


```http
GET /api/v2/projects/1/integrations/alm/?include=params HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json


{
    "results": [{
        "id": 1,
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
        }
    }]
}

```

See the [Include Parameters](#include-parameters) section for more details.

Parameter   | Description
------------|---------------------
params      | Includes a params field that specifies the configuration parameters for the ALM integration.

---


## Get All Analysis Integrations of All Projects


```http
GET /api/v2/integrations/analysis/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [{
        "id": 1,
        "system": "WhiteHat",
        "alias": "WhiteHat Integration",
        "frequency": "manually",
        "command": "sync_whitehat"
    }]
}
```

Returns a list of all analysis integrations associated with all projects.

**`GET /api/v2/integrations/analysis/`**

### Query Parameters

The following parameters may be used to filter the analysis integrations resources in the response.

Parameter | Description
----------|-----------------------------
alias     | Returns all analysis integrations with the specified alias.
frequency | Returns all analysis integrations with the specified frequency of synchronization.
system    | Returns all analysis integrations associated with a particular system.

---

### Include Parameters


```http
GET /api/v2/integrations/analysis/?include=params HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json


{
    "results": [{
        "id": 1,
        "project_id": 2,
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
        }
    }]
}

```

See the [Include Parameters](#include-parameters) section for more details.

Parameter   | Description
------------|---------------------
params      | Includes a params field that specifies the configuration parameters for the analysis integration.

---

## Get All Analysis Integrations for a Specific Project


```http
GET /api/v2/projects/1/integrations/analysis/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [{
        "id": 1,
        "project_id": 2,
        "system": "WhiteHat",
        "alias": "WhiteHat Integration",
        "frequency": "manually",
        "command": "sync_whitehat"
    }]
}
```

Returns a list of all Analysis integrations associated with the project having id "project_id".

**`GET /api/v2/projects/{project_id}/integrations/analysis/`**

### Query Parameters

The following parameters may be used to filter the integrations resources in the response.

Parameter | Description
----------|-----------------------------
alias     | Returns all analysis integrations with the specified alias.
frequency | Returns all analysis integrations with the specified frequency of synchronization.
system    | Returns all analysis integrations associated with a particular system.

---

### Include Parameters


```http
GET /api/v2/projects/1/integrations/analysis/?include=params HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json


{
    "results": [{
        "id": 1,
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
        }
    }]
}

```

See the [Include Parameters](#include-parameters) section for more details.

Parameter   | Description
------------|---------------------
params      | Includes a params field that specifies the configuration parameters for the integration.

