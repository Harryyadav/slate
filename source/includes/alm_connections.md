# ALM Connections

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
    "results": [
        {
            "id": 1,
            "name": "GitHub Example Connector",
            "system": {
                "id": "github",
                "short_name": "GitHub",
                "name": "GitHub"
            },
            "inaccessible": false,
            "params": {
                "github_repo_owner": "repo owner",
                "sde_verification_filter": "none,partial,pass,fail",
                "alm_api_token": "token",
                "title_format": "$task_id $title",
                "alm_method": "https",
                "alm_server": "api.github.com",
                "github_duplicate_label": "duplicate",
                "alm_phases": "requirements,architecture-design,development",
                "sde_statuses_in_scope": "TODO",
                "conflict_policy": "alm",
                "sde_min_priority": "7"
            }
        },
        {
            "id": 2,
            "name": "JIRA Example Connector",
            "system": {
                "id": "jira",
                "short_name": "JIRA",
                "name": "JIRA"
            },
            "inaccessible": false,
            "params": {
                "sde_verification_filter": "none,partial,pass,fail",
                "jira_version": "5",
                "title_format": "$task_id $title",
                "alm_method": "https",
                "alm_server": "my-company.atlassian.net",
                "alm_user": "user",
                "alm_pass": "pass",
                "alm_phases": "requirements,architecture-design,development",
                "sde_statuses_in_scope": "TODO",
                "conflict_policy": "alm",
                "sde_min_priority": "7"
            }
        },
    ]
}
```

Returns a list of all ALM connectors available.

**`GET /api/v2/connectors/alm/`**

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
    "name": "GitHub Example Connector",
    "system": {
        "id": "github",
        "short_name": "GitHub",
        "name": "GitHub"
    },
    "inaccessible": false,
    "params": {
        "github_repo_owner": "repo owner",
        "sde_verification_filter": "none,partial,pass,fail",
        "alm_api_token": "token",
        "title_format": "$task_id $title",
        "alm_method": "https",
        "alm_server": "api.github.com",
        "github_duplicate_label": "duplicate",
        "alm_phases": "requirements,architecture-design,development",
        "sde_statuses_in_scope": "TODO",
        "conflict_policy": "alm",
        "sde_min_priority": "7"
    }
},
```

Returns a specific ALM connector.

**`GET /api/v2/connectors/alm/{id}/`**

---










## Create an ALM Connector

```http
POST /api/v2/connectors/alm/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "name": "GitHub Example Connector",
    "system": {
        "id": "github"
    },
    "inaccessible": false,
    "params": {
        "github_repo_owner": "repo owner",
        "sde_verification_filter": "none,partial,pass,fail",
        "alm_api_token": "token",
        "title_format": "$task_id $title",
        "alm_method": "https",
        "alm_server": "api.github.com",
        "github_duplicate_label": "duplicate",
        "alm_phases": "requirements,architecture-design,development",
        "sde_statuses_in_scope": "TODO",
        "conflict_policy": "alm",
        "sde_min_priority": "7"
    }
}
```

```http
HTTP/1.1 201 CREATED
Content-Type: application/json

{
    "id": 1,
    "name": "GitHub Example Connector",
    "system": {
        "id": "github",
        "short_name": "GitHub",
        "name": "GitHub"
    },
    "inaccessible": false,
    "params": {
        "github_repo_owner": "repo owner",
        "sde_verification_filter": "none,partial,pass,fail",
        "alm_api_token": "token",
        "title_format": "$task_id $title",
        "alm_method": "https",
        "alm_server": "api.github.com",
        "github_duplicate_label": "duplicate",
        "alm_phases": "requirements,architecture-design,development",
        "sde_statuses_in_scope": "TODO",
        "conflict_policy": "alm",
        "sde_min_priority": "7"
    }
}
```

Fields              | Required | Description
--------------------|----------|-------------
name                | Yes      | The name of the new connector.
system              | Yes      | A dictionary containing the id, name and short name of the system.
inaccessible        | No       | Specifies whether the alm server specific is accessible from the SDE server. Defaults to false.
params              | Yes      | A dictionary containing connections options. Please refer to product documentation for more details or reach out to support.  Required params will return appropriate errors when unspecified.

---










## Update an ALM Connector

```http
PATCH /api/v2/connectors/alm/3/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "name": "GitHub Connector PATCH Example",
    "system": {
        "id": "github"
    },
    "inaccessible": false,
    "params": {
        "github_repo_owner": "new repo owner",
        "sde_verification_filter": "none,partial,pass,fail",
        "alm_api_token": "new token",
        "title_format": "$task_id $title",
        "alm_method": "https",
        "alm_server": "api.github.com",
        "github_duplicate_label": "duplicate",
        "alm_phases": "requirements,architecture-design,development",
        "sde_statuses_in_scope": "TODO",
        "conflict_policy": "alm",
        "sde_min_priority": "5"
    }
}
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": 12,
    "name": "GitHub Connector PATCH Example",
    "system": {
        "id": "github",
        "short_name": "GitHub",
        "name": "GitHub"
    },
    "inaccessible": false,
    "params": {
        "github_repo_owner": "new repo owner",
        "sde_verification_filter": "none,partial,pass,fail",
        "alm_api_token": "new token",
        "title_format": "$task_id $title",
        "alm_method": "https",
        "alm_server": "api.github.com",
        "github_duplicate_label": "duplicate",
        "alm_phases": "requirements,architecture-design,development",
        "sde_statuses_in_scope": "TODO",
        "conflict_policy": "alm",
        "sde_min_priority": "5"
    }
}
```

Updates a specific ALM connector resource as specified by the connector id.

**`PATCH /api/v2/connectors/alm/{id}`**

---










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
        "alias": "Rally Integration",
        "system":{
            "id":"rally",
            "short_name":"CA Agile Central",
            "name":"CA Agile Central (formerly Rally)"
        },
        "frequency": "manually",
        "command": "sync_rally",
        "debug_mode": false,
        "params": {
            "sde_project": "Demo Project",
            "alm_user": "rally_user",
            "sde_verification_filter": "none,partial,pass,fail",
            "rally_workspace": "Rally Workspace",
            "alm_method": "https",
            "alm_validate_cert": true,
            "alm_title_format": "$task_id $title",
            "alm_server": "rally1.rallydev.com",
            "sde_businessunit": "General",
            "sde_application": "Demo Application",
            "alm_project": "Rally Project",
            "alm_pass": "rally_password",
            "alm_phases": "requirements,architecture-design,development",
            "sde_statuses_in_scope": "TODO",
            "conflict_policy": "alm",
            "sde_min_priority": 7,
            "alm_reference_context": 14
        },
        "inaccessible": false,
        "in_progress": false,
        "connector": 2,
        "project": 1,
    }]
}
```

Returns a list of all ALM connections associated with all projects. The params are only displayed if you have the 'Edit ALM connections' permission.

**`GET /api/v2/connections/alm/`**

### Query Parameters

The following parameters may be used to filter the ALM connections resources in the response.

Parameter | Description
----------|-----------------------------
project   | Returns all analysis connections for the project with the specific id.
---

### Include Parameters

```http
GET /api/v2/connections/alm/?include=last_job HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [{
        "id": 1,
        "alias": "Rally Integration",
        "system":{
            "id":"rally",
            "short_name":"CA Agile Central",
            "name":"CA Agile Central (formerly Rally)"
        },
        "frequency": "manually",
        "command": "sync_rally",
        "debug_mode": false,
        "params": {
            "sde_project": "Demo Project",
            "alm_user": "rally_user",
            "sde_verification_filter": "none,partial,pass,fail",
            "rally_workspace": "Rally Workspace",
            "alm_method": "https",
            "alm_validate_cert": true,
            "alm_title_format": "$task_id $title",
            "alm_server": "rally1.rallydev.com",
            "sde_businessunit": "General",
            "sde_application": "Demo Application",
            "alm_project": "Rally Project",
            "alm_pass": "rally_password",
            "alm_phases": "requirements,architecture-design,development",
            "sde_statuses_in_scope": "TODO",
            "conflict_policy": "alm",
            "sde_min_priority": 7,
            "alm_reference_context": 14
        },
        "inaccessible": false,
         "last_job": {
            "succeeded": false,
            "last_run": "2016-12-15T22:45:27.412Z",
            "result_message": "Error Message",
            "user": 1,
            "ready": true,
            "automatic": false,
            "id": 4
        },
        "in_progress": false,
        "connector": 2,
        "project": 2
    }]
}
```

See the [Include Parameters](#include-parameters) section for more details.

Parameter | Description
----------|---------------
last_job  | Include the details of the last job executed for this connection.

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
    "alias": "Rally Integration",
    "system": {
        "id": "rally",
        "name": "Rally"
    },
    "frequency": "manually",
    "command": "sync_rally",
    "debug_mode": false,
    "params": {
        "sde_project": "Demo Project",
        "alm_user": "rally_user",
        "sde_verification_filter": "none,partial,pass,fail",
        "rally_workspace": "Rally Workspace",
        "alm_method": "https",
        "alm_validate_cert": true,
        "alm_title_format": "$task_id $title",
        "alm_server": "rally1.rallydev.com",
        "sde_businessunit": "General",
        "sde_application": "Demo Application",
        "alm_project": "Rally Project",
        "alm_pass": "rally_password",
        "alm_phases": "requirements,architecture-design,development",
        "sde_statuses_in_scope": "TODO",
        "conflict_policy": "alm",
        "sde_min_priority": 7,
        "alm_reference_context": 14
    },
    "inaccessible": false,
    "connector": 2,
    "project": 2
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
    "debug_mode": true,
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
    "alias": "Example Connection",
    "system": {
        "id": "jira":,
        "name": "JIRA",
        "short_name": "JIRA"
    },
    "frequency": "hourly",
    "command": "sync_jira",
    "debug_mode": true,
    "params":{
        "sde_project": "Project 1",
        "alm_user": "Sindy",
        "sde_verification_filter": "none,partial,pass,fail",
        "jira_version": "5",
        "alm_method": "https",
        "alm_validate_cert": true,
        "alm_title_format": "$task_id $title",
        "alm_server": "bugs.server.co",
        "sde_businessunit": "BU",
        "sde_application": "Finance App",
        "alm_project": "Example Project",
        "alm_pass": "id",
        "alm_parent_issue": "Parent",
        "alm_phases": "requirements,architecture-design,development",
        "sde_statuses_in_scope": "TODO",
        "conflict_policy": "alm",
        "sde_min_priority": 7,
        "alm_reference_context": 5,
        "session_capture_socket": "/doc/sde/sdetools_session_capture.sock"
    },
    "inaccessible": false,
    "connector": 1,
    "project": 1
}
```

Fields              | Required | Description
--------------------|----------|-------------
alias               | Yes      | The name of the new connection.
debug_mode          | No       | A flag to enable debug mode for verbose logging.
connector           | Yes      | The id of the connector that this connection will use to connect with the ALM.
project             | Yes      | The id of the SD Elements project that this connection will connect with.
frequency           | No       | The frequency in which this connection will sync.  The available options for organizations with the advanced ALM feature are: "hourly", "daily", "weekly", "monthly" and "manually".  If unspecified, the frequency will default to "manually".  Organizations without the advanced ALM feature can only choose "manually".
params              | Yes      | A dictionary containing connections options. Please refer to product documentation for more details or reach out to support.
---










## Update a specific ALM Connection

```http
PATCH /api/v2/connections/alm/1/ HTTP/1.1
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
    "alias": "Example Connection Updated Name",
    "system": {
        "id": "jira",
        "name": "JIRA"
    },
    "frequency": "manually",
    "command": "sync_jira",
    "debug_mode": false,
    "params":{
        "sde_project": "Project 1",
        "alm_user": "Sindy",
        "sde_verification_filter": "none,partial,pass,fail",
        "jira_version": "5",
        "alm_method": "https",
        "alm_validate_cert": true,
        "alm_title_format": "$task_id $title",
        "alm_server": "bugs.server.co",
        "sde_businessunit": "BU",
        "sde_application": "Finance App",
        "alm_project": "Project Name",
        "alm_pass": "id",
        "alm_parent_issue": "Parent",
        "alm_phases": "requirements,architecture-design,development",
        "sde_statuses_in_scope": "TODO",
        "conflict_policy": "alm",
        "sde_min_priority": 7,
        "alm_reference_context": 5
    },
    "inaccessible": false,
    "connector": 1,
    "project": 1
}
```

Update a specific ALM Connection resource.

**`PATCH /api/v2/connections/alm/{connection_id}/`**

### URL Parameters

Parameter | Description
--------- | -----------
connection_id   | The ID of the ALM Connection to update

---











## Test an ALM Connector

```http
POST /api/v2/connectors/testalm/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "name":"ALM Test",
    "system": {
        "id": "github"
    },
    "params": {
        "alm_server": "api.github.com",
        "github_repo_owner": "repo owner",
        "alm_api_token": "42",
        "alm_validate_cert": true
    }
}
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "success": true
}
```

Performs a simple connectivity test against the ALM server.

`POST /api/v2/connectors/testalm/`

Fields        | Required | Description
--------------|----------|-------------
name          | Yes      | The name of the connector.
system        | Yes      | A dictionary containing the id, name and short name of the system.
params        | Yes      | A dictionary containing connections options. Please refer to product documentation for more details or reach out to support. Required params will return appropriate errors when unspecified.










## Test an ALM Connection

```http
POST /api/v2/connections/testalm/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "connector": 2,
    "alias": "ALM Test",
    "project": 2,
    "system": {
        "id": "rally"
    },
    "params": {
        "alm_server":"server.rallydev.com",
        "alm_user": "username",
        "alm_pass": "password",
        "alm_project": "rally_project",
        "alm_validate_cert": true
    }
}
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "success": true
}
```

Performs a connectivity test against the ALM server, verifies the ALM project exists and validates other configuration parameters.

`POST /api/v2/connections/testalm/`

Fields        | Required | Description
--------------|----------|-------------
name          | Yes      | The name of the connector.
system        | Yes      | A dictionary containing the id, name and short name of the system.
params        | Yes      | A dictionary containing connections options. Please refer to product documentation for more details or reach out to support. Required params will return appropriate errors when unspecified. 
