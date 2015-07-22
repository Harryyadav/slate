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
        }
    }]
}
```

Returns a list of all ALM connections associated with all projects.

**`GET /api/v2/connections/alm/`**

### Query Parameters

The following parameters may be used to filter the ALM connections resources in the response.

Parameter | Description
----------|-----------------------------
alias     | Returns all ALM connections with the specified alias.
frequency | Returns all ALM connections with the specified frequency of synchronization.
system    | Returns all ALM connections associated with a particular system.

---


## Get All ALM Connections for a Specific Project


```http
GET /api/v2/projects/1/connections/alm/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [{
        "id": 1,
        "project": 1,
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

Returns a list of all ALM connections associated with the project having id "project_id".

**`GET /api/v2/projects/{project_id}/connections/alm/`**

### Query Parameters

The following parameters may be used to filter the connections resources in the response.

Parameter | Description
----------|-----------------------------
alias     | Returns all ALM connections with the specified alias.
frequency | Returns all ALM connections with the specified frequency of synchronization.
system    | Returns all ALM connections associated with a particular system.

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
        }
    }]
}
```

Returns a list of all analysis connections associated with all projects.

**`GET /api/v2/connections/analysis/`**

### Query Parameters

The following parameters may be used to filter the analysis connections resources in the response.

Parameter | Description
----------|-----------------------------
alias     | Returns all analysis connections with the specified alias.
frequency | Returns all analysis connections with the specified frequency of synchronization.
system    | Returns all analysis connections associated with a particular system.

---

## Get All Analysis Connections for a Specific Project


```http
GET /api/v2/projects/1/connections/analysis/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [{
        "id": 1,
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
        }
    }]
}
```

Returns a list of all Analysis connections associated with the project having id "project_id".

**`GET /api/v2/projects/{project_id}/connections/analysis/`**

### Query Parameters

The following parameters may be used to filter the connections resources in the response.

Parameter | Description
----------|-----------------------------
alias     | Returns all analysis connections with the specified alias.
frequency | Returns all analysis connections with the specified frequency of synchronization.
system    | Returns all analysis connections associated with a particular system.

