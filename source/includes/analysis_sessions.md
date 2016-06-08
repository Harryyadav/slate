# Analysis Sessions

## Get All Analysis Sessions

```http
GET /api/v2/projects/1/analysis-sessions/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [{
        "id": 682,
        "analysis_ref": "zero.webappsecurity.com",
        "analysis_type": "webinspect",
        "extra": {},
        "created": "2014-12-15T20:10:51.900775Z",
        "updated": "2014-12-15T20:10:51.900775Z",
        "updater": 1
    }]
}
```

This endpoint returns a list of Analysis Session resources.

**`GET /api/v2/projects/{project_id}/analysis-sessions/`**










## Get a Specific Analysis Session

```http
GET /api/v2/projects/1/analysis-sessions/1/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": 682,
    "analysis_ref": "zero.webappsecurity.com",
    "analysis_type": "webinspect",
    "extra": {},
    "created": "2014-12-15T20:10:51.900775Z",
    "updated": "2014-12-15T20:10:51.900775Z",
    "updater": 1
}
```

This endpoint returns a specific Analysis Session resource.

**`GET /api/v2/projects/{project_id}/analysis-sessions/{analysis_session_id}/`**










## Create an Analysis Session

```http
POST /api/v2/projects/1/analysis-sessions/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "analysis_ref": "zero.webappsecurity.com",
    "analysis_type": "webinspect"
}
```

```http
HTTP/1.1 201 CREATED
Content-Type: application/json

{
    "id": 1,
    "analysis_ref": "zero.webappsecurity.com",
    "analysis_type": "webinspect",
    "extra": {},
    "created": "2014-12-15T20:10:51.900775Z",
    "updated": "2014-12-15T20:10:51.900775Z",
    "updater": 1
}
```

This endpoint creates an Analysis Session resource.

`POST /api/v2/projects/{project_id}/analysis-sessions/`

Fields        | Required | Description
--------------|----------|-------------
analysis_ref  | Yes      | Arbitrary string used as a session identifier
analysis_type | Yes      | Enum that identifies the type of analysis tool.<br> Can be one of the following: <ul><li>appscan</li> <li>appscan_enterprise</li> <li>fortify</li> <li>veracode</li> <li>webinspect</li> <li>whitehat</li></ul>
notes         | No       | An array of Analysis Note resources.<br>See [Create an Analysis Note](#create-an-analysis-note) for what fields are supported/required.<br>The "task" attribute field is required, but "analysis_session" is not required.

---

### Create an Analysis Session with embedded Notes

```http
POST /api/v2/projects/1/analysis-sessions/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "analysis_ref": "zero.webappsecurity.com",
    "analysis_type": "webinspect",
    "notes": [
      {
          "task": "1-T6",
          "behaviour": "replace",
          "confidence": "high",
          "findings": {},
          "finding_ref": "my_ref",
          "status": "pass"
      }
    ]
}
```

```http
HTTP/1.1 201 CREATED
Content-Type: application/json

{
    "id": 682,
    "analysis_ref": "zero.webappsecurity.com",
    "analysis_type": "webinspect",
    "extra": {},
    "created": "2014-12-15T20:10:51.900775Z",
    "updated": "2014-12-15T20:10:51.900775Z",
    "updater": 1
}
```
