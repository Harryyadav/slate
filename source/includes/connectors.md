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
            "name": "Github Connector",
            "system": {
                "id": "github",
                "name": "Github"
            },
            "inaccessible": false,
            "params": {
                "alm_project": "YO",
                "token": "UYO",
                "server": "abc"
            },
            "fields_editable_on_project": ["alm_project"]
        },
        {
            "id": 7,
            "name": "jira inaccessible",
            "system": {
                "id": "jira",
                "name": "JIRA",
            },
            "inaccessible": true,
            "params": {
                "sde_verification_filter":
                "none,partial,pass,fail",
                "jira_version": "5",
                "alm_method": "https",
                "alm_title_format": "$task_id $title",
                "alm_server": "jira-server.com",
                "alm_phases": "requirements,architecture-design,development",
                "sde_statuses_in_scope": "TODO",
                "conflict_policy": "alm",
                "sde_min_priority": 7
            },
            "fields_editable_on_project": []
        }
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
    "name": "Github Connector",
    "system": {
        "id": "github",
        "name": "Github"
    },
    "inaccessible": false,
    "params": {
        "alm_project": "YO",
        "token": "UYO",
        "server": "abc"
    },
    "fields_editable_on_project": null

}
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
    "name": "Example Name",
    "system": {
        "id": "github"
    },
    "params": {
        "token": "21345",
        "alm_method": "https",
        "server": "github.com",
        "conflict_policy": "sde"
    },
    "fields_editable_on_project": ['alm_project', 'repo_owner']
}


```

```http
HTTP/1.1 201 CREATED
Content-Type: application/json

{
    "id": 3,
    "name": "Example Name",
    "system": {
        "id": "github",
        "name": "Github"
    },
    "inaccessible": false,
    "params": {
        "token": "21345",
        "alm_method": "https",
        "server": "github.com",
        "conflict_policy": "sde"
    },
    "fields_editable_on_project": ['alm_project', 'repo_owner']

}
```
Fields              | Required | Description
--------------------|----------|-------------
name                | Yes      | The name of the new connector.
system              | Yes      | A dictionary containing the id and name of the system.
inaccessible        | No       | Specifies whether the alm server specific is accessible from the SDE server. Defaults to false.
params              | Yes      | A dictionary containing connections options. Please refer to product documentation for more details or reach out to support.  Required params will return appropriate errors when unspecified.
fields_editable_on_project | No | A list of field names which should be editable on the project level.  By default this is set to null, meaning the default 'editable on project' fields defined in the SDE Tools plugin will be used.



## Update an ALM Connector

```http
PUT /api/v2/connectors/alm/3/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "name": "Example Name Updated",
    "system": {
        "id": "github"
    },
    "params": {
        "token": "21345",
        "alm_method": "https",
        "server": "github.com",
        "conflict_policy": "sde"
    }
}


```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": 3,
    "name": "Example Name Updated",
    "system": {
        "id": "github",
        "name": "Github"
    },
    "inaccessible": false,
    "params": {
        "token": "21345",
        "alm_method": "https",
        "server": "github.com",
        "conflict_policy": "sde"
    },
    "editable_on_project": null
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

**`GET /api/v2/connectors/analysis/{id}/`**

