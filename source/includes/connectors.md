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

**`GET /api/v2/connectors/alm/{id}`**

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



## Update an ALM Connector

```http
PUT /api/v2/connectors/alm/3/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "name": "GitHub Connector PUT Example",
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
    "name": "GitHub Connector PUT Example",
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

**`PUT /api/v2/connectors/alm/{id}`**



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

**`GET /api/v2/connectors/analysis/{id}`**

