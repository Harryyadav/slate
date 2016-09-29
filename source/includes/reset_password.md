# Reset Password

## Get Password Reset Info

```http
GET /api/v2/users/1/reset-password/ HTTP/1.1
Accept: application/json
Authorization: Basic "YOUR BASE64 ENCODING OF USERNAME:PASSWORD"
Cookie: sessionid="YOUR SESSION ID"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "password_reset_expiry_date": "2016-09-30T14:51:55.889Z",
    "password_reset_url": "http://example.com/accounts/new-password/12e33fbfc0f5774"
}
```

This endpoint returns the password reset information for a specific user.
This endpoint only uses either basic or session authentication.

Note: If the returned fields are null, then there is no password reset in progress.

**`GET /api/v2/users/<id>/reset-password/`**










## Reset User Password

```http
POST /api/v2/users/1/reset-password/ HTTP/1.1
Accept: application/json
Authorization: Basic "YOUR BASE64 ENCODING OF USERNAME:PASSWORD"
Cookie: sessionid="YOUR SESSION ID"
```

```http
HTTP/1.1 200 OK
```

Request a password reset for a specific user.

**`POST /api/v2/users/<id>/reset-password/`**

