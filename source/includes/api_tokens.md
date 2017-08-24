# API Tokens

## Generate an API Token

```http
POST /api/v2/users/{user_id}/api-token/ HTTP/1.1
Accept: application/json
Authorization: Basic "YOUR BASE64 ENCODING OF USERNAME:PASSWORD"
Cookie: sessionid="YOUR SESSION ID"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "token": "1234567890abcdefghijklmnopqrstuvwxyz",
    "connection_string": "1234567890abcdefghijklmnopqrstuvwxyz@example.com"
}
```

This endpoint returns a newly generated API Token.
If the user already has a token, it will be regenerated.

Note: This endpoint only uses either basic or session authentication.

**`POST /api/v2/users/{user_id}/api-token/`**

### URL Parameters

Parameter | Description
--------- | -----------
user_id   | The ID of the User to retrieve










## Regenerate an API Token

```http
PUT /api/v2/users/{user_id}/api-token/ HTTP/1.1
Accept: application/json
Authorization: Basic "YOUR BASE64 ENCODING OF USERNAME:PASSWORD"
Cookie: sessionid="YOUR SESSION ID"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "token": "1234567890abcdefghijklmnopqrstuvwxyz",
    "connection_string": "1234567890abcdefghijklmnopqrstuvwxyz@example.com"
}
```

This endpoint revokes and then regenerates an API Token.

Note: This endpoint only uses either basic or session authentication.

**`PUT /api/v2/users/{user_id}/api-token/`**

### URL Parameters

Parameter | Description
--------- | -----------
user_id   | The ID of the User to retrieve










## Get an API Token

```http
GET /api/v2/users/{user_id}/api-token/ HTTP/1.1
Accept: application/json
Authorization: Basic "YOUR BASE64 ENCODING OF USERNAME:PASSWORD"
Cookie: sessionid="YOUR SESSION ID"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "token": "***********************************vwxyz",
    "connection_string": "***********************************vwxyz@example.com"
}
```

This endpoint retrieves the users API Token. For security reasons the token
will be obfuscated. If you have lost your token you will have to regenerate it.

Note: This endpoint only uses either basic or session authentication.

**`GET /api/v2/users/{user_id}/api-token/`**

### URL Parameters

Parameter | Description
--------- | -----------
user_id   | The ID of the User to retrieve










## Revoke an API Token

```http
DELETE /api/v2/users/{user_id}/api-token/ HTTP/1.1
Accept: application/json
Authorization: Basic "YOUR BASE64 ENCODING OF USERNAME:PASSWORD"
Cookie: sessionid="YOUR SESSION ID"
```

```http
HTTP/1.1 204 NO CONTENT
```

This endpoint revokes the users current API Token.
Only admin users can revoke API Tokens of other users.

Note: This endpoint only uses either basic or session authentication.

**`DELETE /api/v2/users/{user_id}/api-token/`**

### URL Parameters

Parameter | Description
--------- | -----------
user_id   | The ID of the User to retrieve
