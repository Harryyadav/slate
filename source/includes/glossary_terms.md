# Glossary Terms

## Get all Glossary Terms
```http
GET /api/v2/glossary-terms/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [
    {
        "id": "G2",
        "title": "Use Notification",
        "text": "<p>This is a type of notification or message that basically describes...</p>",
        "summary": "<p>A message that notifies the users of their actions.</p>",
        "created": "2015-03-26T19:50:46.348000Z",
        "updated": "2015-03-26T19:50:46.348000Z"
    },
    {
        "id": "G3",
        "title": "Unauthenticated part of application",
        "text": "<p>An unauthenticated (or authentication-free) part of an application consists...</p>",
        "summary": "<p>An unauthenticated (or authentication-free) part of an application is a public portion of an application.</p>",
        "created": "2015-03-26T19:52:34.854000Z",
        "updated": "2015-03-26T19:52:34.853000Z"
    },
    ]
}
```

This endpoint returns a list of Glossary Term resources.

## Create a New Glossary Term

```http
POST /api/v2/glossary-terms/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "title": "New Glossary Term",
    "text": "Full description of the term goes here.",
    "summary": "The summary of the glossary term goes here."
}

```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": "CG13",
    "title": "New Glossary Term",
    "text": "<p>This is the new glossary term for our API documentation example<p>",
    "summary": "<p>Example POST glossary Term<p>",
    "created": "2015-06-23T19:05:46.175048Z",
    "updated": "2015-06-23T19:05:46.107520Z"

}
```

This endpoint lets you create a new glossary term.

Fields | Required | Description
-------|----------|-------------
name | Yes | The name of the new application
text | Yes | The id of the business unit to which the application belongs