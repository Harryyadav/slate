# Jobs

## Get All ALM Jobs of All Projects

```http
GET /api/v2/jobs/alm/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [{
        "id": 12,
        "user": 1,
        "succeeded": true,
        "automatic": true,
        "ready": 129,
        "result_message": "",
        "last_run": "2015-04-15T20:27:24.396442Z",
        "connection": {
            "alias": "My Connection",
            "command": "run_my_connection",
            "frequency": "daily",
            "id": 23,
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
            "project": 7,
            "system": "Rally"
        }
    }]
}
```

Returns a list of all alm jobs associated with all projects. Note that the params are only shown if you have 'Edit ALM connections' permission.

**`GET /api/v2/jobs/alm/`**

### Query Parameters

The following parameters may be used to filter the ALM connections resources in the response.

Parameter | Description
----------|-----------------------------
automatic | Returns all ALM jobs that were created automatically.
connection| Returns all ALM jobs that correspond to a specific connection.
ready     | Returns all ALM jobs that have finished running, successfully or otherwise.
succeeded | Returns all ALM jobs that completed successfully.
user      | Returns all ALM jobs created by the specified user.

---










## Get a Specific ALM Job

```http
GET /api/v2/jobs/alm/{job_id} HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": 12,
    "user": 1,
    "succeeded": true,
    "automatic": true,
    "ready": 129,
    "result_message": "",
    "last_run": "2015-04-15T20:27:24.396442Z",
    "connection": {
        "alias": "My Connection",
        "command": "run_my_connection",
        "frequency": "daily",
        "id": 23,
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
        "project": 7,
        "system": "Rally"
    }
}
```

Returns a specific alm job. Note that the params are only shown if you have 'Edit ALM connections' permission.

**`GET /api/v2/jobs/alm/{job_id}`**

---










## Post Results of an ALM Job of a Project

```http
POST /api/v2/projects/1/jobs/alm/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "connection": 12,
    "result_message": "My Message",
    "succeeded": true,
    "automatic": true,
}
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": 12,
    "user": 1,
    "succeeded": true,
    "automatic": true,
    "ready": 129,
    "result_message": "My Message",
    "last_run": "2015-04-15T20:27:24.396442Z",
    "connection": {
        "alias": "My Connection",
        "command": "run_my_connection",
        "frequency": "daily",
        "id": 12,
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
        "project": 7,
        "system": "Rally"
    }
}
```

Will submit the results of an ALM job.

**`POST /api/v2/jobs/alm/`**

Fields        | Required | Description
--------------|----------|-------------
automatic     | Yes      | Whether the job was run automatically.
connection    | Yes      | The connection id associated with the job.
result_message| Yes      | The result message of the job.
succeeded     | Yes      | Whether the job was run successfully.

---










## Get All Analysis Jobs for All Projects

```http
GET /api/v2/jobs/analysis/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [{
        "id": 12,
        "user": 1,
        "succeeded": true,
        "automatic": true,
        "ready": 129,
        "result_message": "",
        "last_run": "2015-04-15T20:27:24.396442Z",
        "connection": {
            "alias": "My Connection",
            "command": "run_my_connection",
            "frequency": "daily",
            "id": 23,
            "params": {
                "asset_name": "WebGoat Java",
                "sde_project": "WhiteHat",
                "sde_businessunit": "General",
                "sde_application": "Demo Application",
                "import_behaviour": "replace-scanner",
                "analysis_server": "server.whitehatsec.com",
                "task_status_mapping": "{}"
            },
            "project": 7,
            "system": "Whitehat"
        }
    }]
}
```

Returns a list of all analysis jobs associated with all projects. Note that the params are only shown if you have 'Edit security tool connections' permission.

**`GET /api/v2/jobs/analysis/`**

### Query Parameters

The following parameters may be used to filter the analysis connections resources in the response.

Parameter | Description
----------|-----------------------------
automatic | Returns all Analysis jobs that were created automatically.
connection| Returns all Analysis jobs that correspond to a specific connection.
ready     | Returns all Analysis jobs that have finished running, successfully or otherwise.
succeeded | Returns all Analysis jobs that completed successfully.
user      | Returns all Analysis jobs created by the specified user.

---










## Get a Specific Analysis Job

```http
GET /api/v2/jobs/analysis/{job_id} HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": 12,
    "user": 1,
    "succeeded": true,
    "automatic": true,
    "ready": 129,
    "result_message": "",
    "last_run": "2015-04-15T20:27:24.396442Z",
    "connection": {
        "alias": "My Connection",
        "command": "run_my_connection",
        "frequency": "daily",
        "id": 23,
        "params": {
            "asset_name": "WebGoat Java",
            "sde_project": "WhiteHat",
            "sde_businessunit": "General",
            "sde_application": "Demo Application",
            "import_behaviour": "replace-scanner",
            "analysis_server": "server.whitehatsec.com",
            "task_status_mapping": "{}"
        },
        "project": 7,
        "system": "Whitehat"
    }
}
```

Returns a specific analysis job. Note that the params are only shown if you have 'Edit security tool connections' permission.

**`GET /api/v2/jobs/analysis/{job_id}`**

---










## Post Results of an Analysis Job of a Project

```http
POST /api/v2/projects/1/jobs/analysis/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "connection": 12,
    "result_message": "My Message",
    "succeeded": true,
    "automatic": true
}
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": 12,
    "user": 1,
    "succeeded": true,
    "automatic": true,
    "ready": 129,
    "result_message": "My Message",
    "last_run": "2015-04-15T20:27:24.396442Z",
    "connection": {
        "alias": "My Connection",
        "command": "run_my_connection",
        "frequency": "daily",
        "id": 23,
        "params": {
            "asset_name": "WebGoat Java",
            "sde_project": "WhiteHat",
            "sde_businessunit": "General",
            "sde_application": "Demo Application",
            "import_behaviour": "replace-scanner",
            "analysis_server": "server.whitehatsec.com",
            "task_status_mapping": "{}"
        },
        "project": 7,
        "system": "Whitehat"
    }
}
```

Will submit the results of an analysis job.

**`POST /api/v2/jobs/analysis/`**

Fields        | Required | Description
--------------|----------|-------------
automatic     | Yes      | Whether the job was run automatically.
connection    | Yes      | The connection id associated with the job.
result_message| Yes      | The result message of the job.
succeeded     | Yes      | Whether the job was run successfully.
