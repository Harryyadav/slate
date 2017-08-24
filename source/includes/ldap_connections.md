# LDAP Connections

## Get LDAP Connections for the current organization

```http
GET /api/v2/connections/ldap/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "results": [{
        "id": 15,
        "alias": "LDAP",
        "system": "ldap",
        "frequency": "manually",
        "command": "sync_ldap",
        "params": {
            "ldap_filter": {
                "users": [
                    "user@example.org",
                    "user2@example.org"
                ],
                "groups": [
                    "LDAPGroup",
                    "LDAPGroup3"
                ]
            },
            "group_base_dn": "OU=SyncGroups,DC=example,DC=com",
            "ldap_server": "ldapServer:12345",
            "deactivate_groupless_users": false,
            "deactivate_stale_users": false,
            "user_schema": {
                "first_name": "gn",
                "last_name": "sn",
                "email": "mail",
                "full_name": "cn"
            },
            "bind_dn": "cn=Administrator,cn=Users,dc=example,dc=org",
            "bind_password": "qweASD123",
            "base_dn": "dc=example,dc=org",
            "group_mapping": {
                "ldap_group2": "G2",
                "ldap_group1": "G1"
            },
            "ldap_start_tls": false,
            "ldap_validate_cert": true
        },
        "inaccessible": true
    }]
}
```

Returns a list of all LDAP integration connections in the current organization.

Note, this is different from the LDAP connection configured for Single Sign-On.

**`GET /api/v2/connections/ldap/`**


### Include Parameters

```http
GET /api/v2/connections/ldap/?include=last_job HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [{
        "id": 15,
        "alias": "LDAP",
        "system": "ldap",
        "frequency": "manually",
        "command": "sync_ldap",
        "params": {
            "ldap_filter": {
                "users": [
                    "user@example.org",
                    "user2@example.org"
                ],
                "groups": [
                    "LDAPGroup",
                    "LDAPGroup3"
                ]
            },
            "group_base_dn": "OU=SyncGroups,DC=example,DC=com",
            "ldap_server": "ldapServer:12345",
            "deactivate_groupless_users": false,
            "deactivate_stale_users": false,
            "user_schema": {
                "first_name": "gn",
                "last_name": "sn",
                "email": "mail",
                "full_name": "cn"
            },
            "bind_dn": "cn=Administrator,cn=Users,dc=example,dc=org",
            "bind_password": "qweASD123",
            "base_dn": "dc=example,dc=org",
            "group_mapping": {
                "ldap_group2": "G2",
                "ldap_group1": "G1"
            },
            "ldap_start_tls": false,
            "ldap_validate_cert": true
        },
        "inaccessible": true,
        "last_job": {
            "succeeded": false,
            "last_run": "2016-12-15T22:45:27.412Z",
            "result_message": "Error Message",
            "user": 1,
            "ready": true,
            "automatic": false,
            "id": 4
        }
    }]
}
```

See the [Include Parameters](#include-parameters) section for more details.

Parameter | Description
----------|---------------
last_job  | Include the details of the last job executed for this connection.


---

## Create an LDAP Connection

```http
POST /api/v2/connections/ldap/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
	"alias": "LDAP",
	"params": {
		"ldap_server": "ldapServer:12345",
		"group_mapping": {
			"ldap_group1": "G1",
			"ldap_group2": "G2"
		},
		"ldap_filter": {
			"groups": ["LDAPGroup", "LDAPGroup3"],
			"users": ["user@example.org", "user2@example.org"]
		},
		"user_schema": {
			"first_name": "gn",
			"last_name": "sn",
			"full_name": "cn",
			"email": "mail"
		},
		"deactivate_groupless_users": false,
		"deactivate_stale_users": false,
		"group_base_dn": "OU=SyncGroups,DC=example,DC=com",
		"bind_dn": "cn=Administrator,cn=Users,dc=example,dc=org",
		"base_dn": "dc=example,dc=org",
		"bind_password": "pass",
		"ldap_start_tls": true
	}
}
```
```http
HTTP/1.1 201 CREATED
Content-Type: application/json

{
    "id": 15,
    "alias": "LDAP",
    "system": "ldap",
    "frequency": "manually",
    "command": "sync_ldap",
    "params": {
        "ldap_filter": {
            "users": [
                "user@example.org",
                "user2@example.org"
            ],
            "groups": [
                "LDAPGroup",
                "LDAPGroup3"
            ]
        },
        "group_base_dn": "OU=SyncGroups,DC=example,DC=com",
        "ldap_server": "ldapServer:12345",
        "deactivate_groupless_users": false,
        "deactivate_stale_users": false,
        "user_schema": {
            "first_name": "gn",
            "last_name": "sn",
            "email": "mail",
            "full_name": "cn"
        },
        "bind_dn": "cn=Administrator,cn=Users,dc=example,dc=org",
        "base_dn": "dc=example,dc=org",
        "group_mapping": {
            "ldap_group2": "G2",
            "ldap_group1": "G1"
        },
        "ldap_start_tls": true,
        "ldap_validate_cert": true
    },
    "inaccessible": false
}

```
Fields              | Required | Description
--------------------|----------|-------------
alias               | Yes      | The name of the new connection.
frequency           | No       | The frequency in which this connection will sync.  The available options are: "hourly", "daily", "weekly", "monthly" and "manually".  If unspecified, the frequency will default to "manually".
params              | Yes      | A dictionary containing connections options. Please refer to the table below
inaccessible        | No       | Is the connection inaccessible from the SDE server. Defaults to false.

### Params fields

Fields                         | Required | Description
-------------------------------|----------|-------------
ldap_server                    | Yes      | The address of the LDAP server.
ldap_start_tls                 | No       | Determines whether or not to secure connection using TLS/SSL (defaults to True).
group_mapping                  | Yes      | Object that maps LDAP group names to SDE group ids.
ldap_filter                    | No       | Fine-grained control for users and groups during synchronization
ldap_validate_cert             | No       | Determines whether or not to validate the SSL certificate for the LDAP server (defaults to True).
user_schema                    | No       | Define a custom user schema.
deactivate_groupless_users     | No       | Automatically deactivate SDE users that are not assigned to any groups (defaults to False).
deactivate_stale_users         | No       | Automatically deactivate SDE users not found in LDAP (defaults to False).
bind_dn                        | Yes      | The bind dn
bind_password                  | Yes      | The bind password
page_size                      | No       | Number of users to return per page. (defaults to 1000)
group_member_query             | No       | Gives the users of the specified group
group_base_dn                  | Yes      | Base DN of the LDAP groups to sync
base_dn                        | No       | The base dn (will be computed from bind_dn if unspecified)

---

## Delete an LDAP Connection

```http
DELETE /api/v2/connections/ldap/{connection_id}/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

HTTP/1.1 204 NO Content

```

This endpoint deletes a single LDAP Connection resource, as specified by the id parameter.


**`DELETE /api/v2/connections/ldap/{connection_id}/`**


### URL Parameters

Parameter           | Description
--------------------|---------------
connection_id       | The id of the LDAP Connection to delete.


---

## Update a specific LDAP Connection

```http
PUT /api/v2/connections/ldap/31/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
  "alias": "Example Connection Updated Name",
  "frequency": "daily",
  "params": {
    "ldap_filter": {
      "users": [
        "user@example.org",
        "user2@example.org"
      ],
      "groups": [
        "LDAPGroup",
        "LDAPGroup3"
      ]
    },
    "group_base_dn": "OU=SyncGroups,DC=example,DC=com",
    "ldap_server": "ldapServer:12345",
    "bind_dn": "cn=Administrator,cn=Users,dc=example,dc=org",
    "user_schema": {
      "first_name": "gn",
      "last_name": "sn",
      "email": "mail",
      "full_name": "cn"
    },
    "deactivate_groupless_users": false,
    "deactivate_stale_users": false,
    "group_member_query": "(&(objectClass=user)(memberOf=%s))",
    "page_size": 1000,
    "bind_password": "pass",
    "base_dn": "dc=example,dc=org",
    "group_mapping": {
      "group": "G1"
    },
    "ldap_start_tls": true,
    "ldap_validate_cert": true
  }
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "id": 31,
  "alias": "Example Connection Updated Name",
  "system": "LDAP",
  "frequency": "daily",
  "command": "sync_ldap",
  "params": {
    "ldap_filter": {
      "users": [
        "user@example.org",
        "user2@example.org"
      ],
      "groups": [
        "LDAPGroup",
        "LDAPGroup3"
      ]
    },
    "group_base_dn": "OU=SyncGroups,DC=example,DC=com",
    "ldap_server": "ldapServer:12345",
    "bind_dn": "cn=Administrator,cn=Users,dc=example,dc=org",
    "user_schema": {
      "first_name": "gn",
      "last_name": "sn",
      "email": "mail",
      "full_name": "cn"
    },
    "deactivate_groupless_users": false,
    "deactivate_stale_users": false,
    "group_member_query": "(&(objectClass=user)(memberOf=%s))",
    "page_size": 1000,
    "base_dn": "dc=example,dc=org",
    "group_mapping": {
      "group": "G1"
    },
    "ldap_start_tls": true,
    "ldap_validate_cert": true
  },
  "inaccessible": false
}
```

Update a specific LDAP Connection resource.

**`PUT /api/v2/connections/ldap/{connection_id}/`**

### URL Parameters

Parameter       | Description
--------------- | -----------
connection_id   | The ID of the LDAP Connection to update


Fields              | Required | Description
--------------------|----------|-------------
alias               | Yes      | The name of the new connection.
frequency           | No       | The frequency in which this connection will sync.  The available options are: "hourly", "daily", "weekly", "monthly" and "manually".  If unspecified, the frequency will default to "manually".
params              | Yes      | A dictionary containing connections options. Please refer to the table below
inaccessible        | No       | Is the connection inaccessible from the SDE server. Defaults to false.

### Params fields

Fields                         | Required | Description
-------------------------------|----------|-------------
ldap_server                    | Yes      | The address of the LDAP server.
ldap_start_tls                 | No       | Determines whether or not to secure connection using TLS/SSL (defaults to True).
group_mapping                  | Yes      | Object that maps LDAP group names to SDE group ids.
ldap_filter                    | No       | Fine-grained control for users and groups during synchronization
ldap_validate_cert             | No       | Determines whether or not to validate the SSL certificate for the LDAP server (defaults to True).
user_schema                    | No       | Define a custom user schema.
deactivate_groupless_users     | No       | Automatically deactivate SDE users that are not assigned to any groups (defaults to False).
deactivate_stale_users         | No       | Automatically deactivate SDE users not found in LDAP (defaults to False).
bind_dn                        | Yes      | The bind dn
bind_password                  | No       | The bind password
page_size                      | No       | Number of users to return per page. (defaults to 1000)
group_member_query             | No       | Gives the users of the specified group
group_base_dn                  | Yes      | Base DN of the LDAP groups to sync
base_dn                        | No       | The base dn (will be computed from bind_dn if unspecified)
---
