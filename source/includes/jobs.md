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
        "project_id": 129,
        "connection": 23,
        "user": 1,
        "succeeded": true,
        "completed": true,
        "manual": true,
        "result_message": "",
        "last_run": "2015-04-15T20:27:24.396442Z"
    }]
}
```

Returns a list of all alm jobs associated with all projects.

**`GET /api/v2/jobs/alm/`**

### Query Parameters

The following parameters may be used to filter the ALM integrations resources in the response. A `connection` corresponds to either a connector or an integration. See the [Integrations](#integrations) and [Integration Connectors](#integration-connectors) section for more details about the `connection` parameter.

Parameter | Description
----------|-----------------------------
completed | Returns all ALM jobs that have completed, successfully or otherwise.
connection| Returns all ALM jobs that correspond to a specific connection.
manual    | Returns all ALM jobs that were created manually.
succeeded | Returns all ALM jobs that completed successfully.
user      | Returns all ALM jobs created by the specified user.

---

### Expand Parameters


```http
GET /api/v2/jobs/alm/?expand=connection HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json


{
    "results": [{
        "project_id": 129,
        "connection": {
            "alias": "Mingle Connection",
            "frequency": "manually",
            "id": 23,
            "system": "Mingle"
        },
        "user": 1,
        "succeeded": true,
        "completed": true,
        "manual": true,
        "result_message": "",
        "last_run": "2015-04-15T20:27:24.396442Z"
    }]
}

```

See the [Expand Parameters](#expand-parameters) section for more details.

Parameter | Description
----------|-----------------------------
connection| Expands the connection details for the ALM job.

---

## Get All ALM Jobs for a Specific Project


```http
GET /api/v2/projects/1/jobs/alm/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [{
        "connection": 23,
        "project_id": 1,
        "user": 1,
        "succeeded": true,
        "completed": true,
        "manual": true,
        "result_message": "",
        "last_run": "2015-04-15T20:27:24.396442Z"
    }]
}
```

Returns a list of all ALM jobs associated with the project having id "project_id".

**`GET /api/v2/projects/{project_id}/jobs/alm/`**

### Query Parameters

The following parameters may be used to filter the ALM integrations resources in the response. A `connection` corresponds to either a connector or an integration. See the [Integrations](#integrations) and [Integration Connectors](#integration-connectors) section for more details about the `connection` parameter.

Parameter | Description
----------|-----------------------------
completed | Returns all ALM jobs that have completed, successfully or otherwise.
connection| Returns all ALM jobs that correspond to a specific connection.
manual    | Returns all ALM jobs that were created manually.
succeeded | Returns all ALM jobs that completed successfully.
user      | Returns all ALM jobs created by the specified user.

---

### Expand Parameters


```http
GET /api/v2/projects/1/jobs/alm/?expand=connection HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json


{
    "results": [{
        "connection": 23,
        "project_id": 1,
        "user": 1,
        "succeeded": true,
        "completed": true,
        "manual": true,
        "result_message": "",
        "last_run": "2015-04-15T20:27:24.396442Z"
    }]
}

```

See the [Expand Parameters](#expand-parameters) section for more details.

Parameter | Description
----------|-----------------------------
connection| Expands the connection details for the ALM job.

---

## Post Results of an ALM Job of a Project

```http
POST /api/v2/projects/1/jobs/alm/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "connection": 12,
    "result_message": "My Message",
    "succeeded": true
}
```

```http
HTTP/1.1 200 OK
Content-Type: application/json


{
    "id": 21,
    "project_id": 1,
    "connection": 23,
    "user": 1,
    "succeeded": true,
    "completed": true,
    "manual": true,
    "result_message": "My Message",
    "last_run": "2015-04-15T20:27:24.396442Z"
}
```

Will submit the results of an ALM job.

**`POST /api/v2/jobs/alm/`**

Fields        | Required | Description
--------------|----------|-------------
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
        "project_id": 129,
        "connection": 23,
        "user": 1,
        "succeeded": true,
        "completed": true,
        "manual": true,
        "result_message": "",
        "last_run": "2015-04-15T20:27:24.396442Z"
    }]
}
```

Returns a list of all analysis jobs associated with all projects.

**`GET /api/v2/jobs/analysis/`**

### Query Parameters

The following parameters may be used to filter the analysis integrations resources in the response. See the [Integrations](#integrations) and [Integration Connectors](#integration-connectors) section for more details about the `connection` parameter.

Parameter | Description
----------|-----------------------------
completed | Returns all analysis jobs that have completed, successfully or otherwise.
connection| Returns all analysis jobs that correspond to a specific connection.
manual    | Returns all analysis jobs that were created manually.
succeeded | Returns all analysis jobs that completed successfully.
user      | Returns all analysis jobs created by the specified user.

---

### Expand Parameters


```http
GET /api/v2/jobs/analysis/?expand=connection HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json


{
    "results": [{
        "project_id": 129,
        "connection": {
            "alias": "Mingle Connection",
            "frequency": "manually",
            "id": 23,
            "system": "Mingle"
        },
        "user": 1,
        "succeeded": true,
        "completed": true,
        "manual": true,
        "result_message": "",
        "last_run": "2015-04-15T20:27:24.396442Z"
    }]
}

```

See the [Expand Parameters](#expand-parameters) section for more details.

Parameter | Description
----------|-----------------------------
connection| Expands the connection details for the analysis job.

---

## Get All Analysis Jobs for a Specific Project


```http
GET /api/v2/projects/1/jobs/analysis/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [{
        "connection": 23,
        "project_id": 1,
        "user": 1,
        "succeeded": true,
        "completed": true,
        "manual": true,
        "result_message": "",
        "last_run": "2015-04-15T20:27:24.396442Z"
    }]
}
```

Returns a list of all analysis jobs associated with the project having id "project_id".

**`GET /api/v2/projects/{project_id}/jobs/analysis/`**

### Query Parameters

The following parameters may be used to filter the analysis integrations resources in the response. See the [Integrations](#integrations) and [Integration Connectors](#integration-connectors) section for more details about the `connection` parameter.

Parameter | Description
----------|-----------------------------
completed | Returns all analysis jobs that have completed, successfully or otherwise.
connection| Returns all analysis jobs that correspond to a specific connection.
manual    | Returns all analysis jobs that were created manually.
succeeded | Returns all analysis jobs that completed successfully.
user      | Returns all analysis jobs created by the specified user.

---

### Expand Parameters


```http
GET /api/v2/projects/1/jobs/analysis/?expand=connection HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json


{
    "results": [{
        "connection": 23,
        "project_id": 1,
        "user": 1,
        "succeeded": true,
        "completed": true,
        "manual": true,
        "result_message": "",
        "last_run": "2015-04-15T20:27:24.396442Z"
    }]
}

```

See the [Expand Parameters](#expand-parameters) section for more details.

Parameter | Description
----------|-----------------------------
connection| Expands the connection details for the analysis job.

---

## Post Results of an Analysis Job of a Project

```http
POST /api/v2/projects/1/jobs/analysis/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "connection": 12,
    "result_message": "My Message",
    "succeeded": true
}
```

```http
HTTP/1.1 200 OK
Content-Type: application/json


{
    "id": 21,
    "project_id": 1,
    "connection": 23,
    "user": 1,
    "succeeded": true,
    "completed": true,
    "manual": true,
    "result_message": "My Message",
    "last_run": "2015-04-15T20:27:24.396442Z"
}
```

Will submit the results of an analysis job.

**`POST /api/v2/jobs/analysis/`**

Fields        | Required | Description
--------------|----------|-------------
connection    | Yes      | The connection id associated with the job.
result_message| Yes      | The result message of the job.
succeeded     | Yes      | Whether the job was run successfully.
