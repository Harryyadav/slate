# Single Sign On

## Test LDAP Connection Bind

```http
POST /api/v2/sso/ldap/connection-test/ HTTP/1.1
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
  "success": true,
  "details": ""
}
```

Performs a simple connection bind and query test against the LDAP server.

`POST /api/v2/sso/ldap/connection-test/`

Fields        | Required | Description
--------------|----------|-------------
server_uri    | Yes      | The URI of the LDAP server.
bind_dn       | No       | The distinguished name to use when binding to the LDAP server. Leave blank for anonymous bind.
bind_password | No       | The password used with the bind DN. Leave blank for anonymous bind.
start_tls     | No       | If checked, each connection to the LDAP server will enable TLS encryption over the standard LDAP port.

## Test LDAP User Authentication

```http
POST /api/v2/sso/ldap/authentication-test/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "server_uri": "ldaps://ldap.server.com:777",
    "bind_dn": "CN=Bind User,CN=Users,DC=server,DC=com",
    "bind_password": "Password1",
    "start_tls": true,
    "username": "john@server.com",
    "password": "password",
    "base_dn": "DC=server,DC=com",
    "scope": 2,
    "search_filter": "(mail=%(user)s)"
}
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "success": true,
  "details": ""
}
```

Tests user authentication against an LDAP server from the SDE instance.

`POST /api/v2/sso/ldap/authentication-test/`

Fields        | Required | Description
--------------|----------|-------------
server_uri    | Yes      | The URI of the LDAP server.
bind_dn       | No       | The distinguished name to use when binding to the LDAP server. Leave blank for anonymous bind.
bind_password | No       | The password used with the bind DN. Leave blank for anonymous bind.
start_tls     | No       | If checked, each connection to the LDAP server will enable TLS encryption over the standard LDAP port.
username      | Yes      | The username/email of the authenticating user.
password      | Yes      | The password of the authenticating user.
base_dn       | Yes      | The DN within which to search for the user.
scope         | No       | The scope of the search. A numerical value from 0 to 2 where 0 = base, 1 = one-level and 2 = subtree.
search_filter | Yes      | Used by SD Elements to look-up users on the LDAP server. Should almost always be '(mail=%(user)s)'.