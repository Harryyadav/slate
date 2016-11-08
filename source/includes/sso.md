# Single Sign On

## Test LDAP Connection Bind

```http
POST /api/v2/sso/ldap/test_connection/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "server_uri": "ldaps://ldap.server.com:777",
    "bind_dn": "CN=Bind User,CN=Users,DC=server,DC=com",
    "bind_password": "Password1",
    "start_tls": false
}
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "status": "SUCCESS",
  "details": ""
}
```

Performs a simple connection bind and query test against the LDAP server.

`POST /api/v2/sso/ldap/test_connection`

Fields        | Required | Description
--------------|----------|-------------
server_uri    | Yes      | The URI of the LDAP server.
bind_dn       | Yes      | The distinguished name to use when binding to the LDAP server.
bind_password | Yes      | The password used with the bind DN.
start_tls     | No       | If checked, each connection to the LDAP server will enable TLS encryption over the standard LDAP port.

## Test LDAP User Authentication

```http
POST /api/v2/sso/ldap/test_auth/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "server_uri": "ldaps://ldap.server.com:777",
    "bind_dn": "CN=Bind User,CN=Users,DC=server,DC=com",
    "bind_password": "Password1",
    "start_tls": true,
    "username": "john@server.com",
    "password: "password",
    "base_dn": "DC=server,DC=com",
    "scope": "subtree",
    "search_filter": "(mail=%(user)s)"
}
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "status": "SUCCESS",
  "details": ""
}
```

Tests user authentication against an LDAP server from the SDE instance.

`POST /api/v2/sso/ldap/test_auth`

Fields        | Required | Description
--------------|----------|-------------
server_uri    | Yes      | The URI of the LDAP server.
bind_dn       | Yes      | The distinguished name to use when binding to the LDAP server.
bind_password | Yes      | The password used with the bind DN.
start_tls     | No       | If checked, each connection to the LDAP server will enable TLS encryption over the standard LDAP port.
username      | Yes      | The username/email of the authenticating user.
password      | Yes      | The password of the authenticating user.
base_dn       | Yes      | The DN within which to search for the user.
scope         | No       | The scope of the search. One of 'subtree', 'base', or 'one-level'. Defaults to 'subtree'.
search_filter | No       | Used by SD Elements to look-up users on the LDAP server. Defaults to '(mail=%(user)s)'.