# Integrations


## Get all integrations of all projects


```http
GET /api/v2/integrations/ HTTP/1.1
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
        "type": "ALM"
    }]
}
```

Will return a list of all integrations associated with all projects.

**`GET /api/v2/integrations/`**

### Query Parameters

The following parameters may be used to filter the integrations resources in the response.

Parameter | Description
----------|-----------------------------
alias     | Returns all integrations with the specified alias.
frequency | Returns all integrations with the specified frequency of synchronization.
system    | Returns all integrations associated with a particular system.
type      | Returns all integrations of a particular type. e.g. ALM, Analysis Tool, etc.

---

### Include Parameters


```http
GET /api/v2/integrations/?include=params HTTP/1.1
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
        },
        "type": "ALM"
    }]
}

```

See the [Include Parameters](#include-parameters) section for more details.

Parameter   | Description
------------|---------------------
params      | Includes a params field that specifies the configuration parameters for the integration.

---

## Get all integrations of a specific project


```http
GET /api/v2/projects/1/integrations/ HTTP/1.1
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
        "type": "ALM"
    }]
}
```

Will return a list of all integrations associated with the project having id "project_id".

**`GET /api/v2/projects/{project_id}/integrations/`**

### Query Parameters

The following parameters may be used to filter the integrations resources in the response.

Parameter | Description
----------|-----------------------------
alias     | Returns all integrations with the specified alias.
frequency | Returns all integrations with the specified frequency of synchronization.
system    | Returns all integrations associated with a particular system.
type      | Returns all integrations of a particular type. e.g. ALM, Analysis Tool, etc.

---

### Include Parameters


```http
GET /api/v2/projects/1/integrations/?include=params HTTP/1.1
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
        },
        "type": "ALM"
    }]
}

```

See the [Include Parameters](#include-parameters) section for more details.

Parameter   | Description
------------|---------------------
params      | Includes a params field that specifies the configuration parameters for the integration.

