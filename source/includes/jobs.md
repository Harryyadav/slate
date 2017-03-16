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
        "user": "admin@example.com",
        "succeeded": true,
        "automatic": true,
        "ready": true,
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
    "user": "admin@example.com",
    "succeeded": true,
    "automatic": true,
    "ready": true,
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
    "automatic": true
}
```

```http
HTTP/1.1 201 CREATED
Content-Type: application/json

{
    "id": 12,
    "user": "admin@example.com",
    "succeeded": true,
    "automatic": true,
    "ready": true,
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










## Initiate an ALM Connection Sync Job

```http
POST /api/v2/projects/1/jobs/alm/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "connection": 12,
    "automatic": false,
    "ready": false
}
```

```http
HTTP/1.1 201 CREATED
Content-Type: application/json

{

    "id": 12,
    "user": "admin@example.com",
    "succeeded": false,
    "automatic": false,
    "ready": false,
    "result_message": "",
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

Will add a sync job to the queue to be run.

**`POST /api/v2/jobs/alm/`**

Fields        | Required | Description
--------------|----------|-------------
automatic     | Yes      | Whether the job was run automatically.
connection    | Yes      | The connection id associated with the job.
ready         | Yes      | Whether the job is ready to post its result or not.  This field must be set to "false" in order for the import to commence.
succeeded     | No       | Boolean Field. Use this along with the 'ready: true' to record when a job was successful/unsuccessful.










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
        "user": "admin@example.com",
        "succeeded": true,
        "automatic": true,
        "ready": true,
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
    "user": "admin@example.com",
    "succeeded": true,
    "automatic": true,
    "ready": true,
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
HTTP/1.1 201 CREATED
Content-Type: application/json

{
    "id": 12,
    "user": "admin@example.com",
    "succeeded": true,
    "automatic": true,
    "ready": true,
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
ready         | No       | Whether the job is ready to post the result or not.  Defaults to True.










## Initiate an Analysis Connection Import Job

```http
POST /api/v2/projects/1/jobs/analysis/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "connection": 12,
    "automatic": false,
    "ready": false
}
```

```http
HTTP/1.1 201 CREATED
Content-Type: application/json

{
    "id": 12,
    "user": "admin@example.com",
    "succeeded": false,
    "automatic": false,
    "ready": false,
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

Will put the import job on the queue to be run.

**`POST /api/v2/jobs/analysis/`**

Fields        | Required | Description
--------------|----------|-------------
automatic     | Yes      | Whether the job was run automatically.
connection    | Yes      | The connection id associated with the job.
ready         | Yes      | Whether the job is ready to post its result or not.  This field must be set to "false" in order for the import to commence.
succeeded     | No       | Boolean Field. Use this along with the 'ready: true' to record when a job was successful/unsuccessful.






## Get All LDAP Jobs

```http
GET /api/v2/jobs/ldap/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [{
        "automatic": false,
        "connection": {
            "id": 29,
            "alias": "gg'",
            "system": "LDAP",
            "frequency": "manually",
            "command": "sync_ldap",
            "params": {
                "group_query": "OU=SyncGroups,DC=labs,DC=sdelements,DC=com",
                "ldap_server": "geneva.labs.sdelements.com:389",
                "bind_dn": "CN=Bind User2,CN=Users,DC=labs,DC=sdelements,DC=com",
                "user_schema": {
                    "first_name": "gn",
                    "last_name": "sn",
                    "email": "mail",
                    "full_name": "cn"
                },
                "deactivation": false,
                "group_member_query": "(&(objectClass=user)(memberOf=%s))",
                "page_size": 666,
                "base_dn": "DC=labs,DC=sdelements,DC=com",
                "group_mapping": {
                    "mathematicians": "group2",
                    "analyst": "group3",
                    "scientists": "group1"
                },
                "ldap_method": "LDAP",
                "ldap_validate_cert": true
            },
            "inaccessible": false
        },
        "id": 57,
        "last_run": "2017-01-05T18:38:42.604983Z",
        "ready": true,
        "result_message": "",
        "succeeded": true,
        "user": "admin@example.com" 
    }]
}
```

Returns a list of all LDAP jobs. Note that the params are only shown if you have 'Edit security tool connections' permission.

**`GET /api/v2/jobs/ldap/`**

### Query Parameters

The following parameters may be used to filter the analysis connections resources in the response.

Parameter | Type    | Description
----------|---------|--------------------
automatic | Boolean | Returns all LDAP jobs that were created automatically.
connection| Integer | Returns all LDAP jobs that correspond to a specific connection.
ready     | Boolean | Returns all LDAP jobs that have finished running, successfully or otherwise.
succeeded | Boolean | Returns all LDAP jobs that completed successfully.
user      | E-mail  | Returns all LDAP jobs created by the specified user.

---










## Get a Specific LDAP Job

```http
GET /api/v2/jobs/ldap/{job_id} HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "automatic": false,
    "connection": {
        "id": 29,
        "alias": "gg'",
        "system": "LDAP",
        "frequency": "manually",
        "command": "sync_ldap",
        "params": {
            "group_query": "OU=SyncGroups,DC=labs,DC=sdelements,DC=com",
            "ldap_server": "geneva.labs.sdelements.com:389",
            "bind_dn": "CN=Bind User2,CN=Users,DC=labs,DC=sdelements,DC=com",
            "user_schema": {
                "first_name": "gn",
                "last_name": "sn",
                "email": "mail",
                "full_name": "cn"
            },
            "deactivation": false,
            "group_member_query": "(&(objectClass=user)(memberOf=%s))",
            "page_size": 666,
            "base_dn": "DC=labs,DC=sdelements,DC=com",
            "group_mapping": {
                "mathematicians": "group2",
                "analyst": "group3",
                "scientists": "group1"
            },
            "ldap_method": "LDAP",
            "ldap_validate_cert": true
        },
        "inaccessible": false
    },
    "id": 57,
    "last_run": "2017-01-05T18:38:42.604983Z",
    "ready": true,
    "result_message": "",
    "succeeded": true,
    "user": 1
}


```

Returns a specific LDAP job. Note that the params are only shown if you have 'Edit security tool connections' permission.

**`GET /api/v2/jobs/ldap/{job_id}`**

---










## Post Results of an LDAP Job

```http
POST /api/v2/jobs/ldap/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "connection": 29,
    "result_message": "My Message",
    "succeeded": true,
    "automatic": true
}
```

```http
HTTP/1.1 201 CREATED
Content-Type: application/json

{
    "automatic": false,
    "connection": {
        "id": 29,
        "alias": "gg'",
        "system": "LDAP",
        "frequency": "manually",
        "command": "sync_ldap",
        "params": {
            "group_query": "OU=SyncGroups,DC=labs,DC=sdelements,DC=com",
            "ldap_server": "geneva.labs.sdelements.com:389",
            "bind_dn": "CN=Bind User2,CN=Users,DC=labs,DC=sdelements,DC=com",
            "user_schema": {
                "first_name": "gn",
                "last_name": "sn",
                "email": "mail",
                "full_name": "cn"
            },
            "deactivation": false,
            "group_member_query": "(&(objectClass=user)(memberOf=%s))",
            "page_size": 666,
            "base_dn": "DC=labs,DC=sdelements,DC=com",
            "group_mapping": {
                "mathematicians": "group2",
                "analyst": "group3",
                "scientists": "group1"
            },
            "ldap_method": "LDAP",
            "ldap_validate_cert": true
        },
        "inaccessible": false
    },
    "id": 57,
    "last_run": "2017-01-05T18:38:42.604983Z",
    "ready": true,
    "result_message": "My Message",
    "succeeded": true,
    "user": 1
}

```

Will submit the results of an LDAP job.

**`POST /api/v2/jobs/LDAP/`**

Fields        | Required | Type    | Description
--------------|----------|----------------------
automatic     | Yes      | Boolean | Whether the job was run automatically.
connection    | Yes      | Integer | The connection id associated with the job.
result_message| Yes      | String  | The result message of the job.
succeeded     | Yes      | Boolean | Whether the job was run successfully.
ready         | No       | Boolean | Whether the job is ready to post the result or not.  Defaults to True.










## Initiate an LDAP Connection Import Job

```http
POST /api/v2/jobs/ldap/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "connection": 29,
    "automatic": false,
    "ready": false
}
```

```http
HTTP/1.1 201 CREATED
Content-Type: application/json

{
    "automatic": false,
    "connection": {
        "id": 29,
        "alias": "gg'",
        "system": "LDAP",
        "frequency": "manually",
        "command": "sync_ldap",
        "params": {
            "group_query": "OU=SyncGroups,DC=labs,DC=sdelements,DC=com",
            "ldap_server": "geneva.labs.sdelements.com:389",
            "bind_dn": "CN=Bind User2,CN=Users,DC=labs,DC=sdelements,DC=com",
            "user_schema": {
                "first_name": "gn",
                "last_name": "sn",
                "email": "mail",
                "full_name": "cn"
            },
            "deactivation": false,
            "group_member_query": "(&(objectClass=user)(memberOf=%s))",
            "page_size": 666,
            "base_dn": "DC=labs,DC=sdelements,DC=com",
            "group_mapping": {
                "mathematicians": "group2",
                "analyst": "group3",
                "scientists": "group1"
            },
            "ldap_method": "LDAP",
            "ldap_validate_cert": true
        },
        "inaccessible": false
    },
    "id": 57,
    "last_run": "2017-01-05T18:38:42.604983Z",
    "ready": true,
    "result_message": "",
    "succeeded": true,
    "user": "admin@example.com" 
}
```

Will put the import job on the queue to be run.

**`POST /api/v2/jobs/ldap/`**

Fields        | Required | Type    | Description
--------------|----------|---------|------------
automatic     | Yes      | Boolean | Whether the job was run automatically.
connection    | Yes      | Integer | The connection id associated with the job.
ready         | Yes      | Boolean | Whether the job is ready to post its result or not.  This field must be set to "false" in order for the import to commence.
succeeded     | No       | Boolean | Use this along with the 'ready: true' to record when a job was successful/unsuccessful.

