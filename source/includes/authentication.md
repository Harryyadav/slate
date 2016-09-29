# Authentication

There are several ways to authenticate against SD Elements, which are outlined below.

## Basic Authentication

```http
GET /api/v2/users/ HTTP/1.1
Accept: application/json
Authorization: Basic "YOUR BASE64 ENCODING OF USERNAME:PASSWORD"
```

To authenticate against SD Elements using basic authentication (username and password), you need to pass a Base64 encoding of your username:password as a header.










## Session Authorization

```http
GET /api/v2/users/ HTTP/1.1
Accept: application/json
Cookie: sessionid="YOUR SESSION ID"
```

To authenticate against SD Elements using session authentication, you need to pass in your session id as a cookie in the header.










## Token Authentication

```http
GET /api/v2/users/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

To authenticate against SD Elements using tokens, you need to pass an API access token via an `Authorization` header.

A token can be generated as follows:

* Go to the menu option in the top right of SD Elements: <your name>/API Settings
* Select the APIv2 tab and click on the Generate Token Button.
* The token will be displayed **only once**. If you forget your token you will need to regenerate a new one.