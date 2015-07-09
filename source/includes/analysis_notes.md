# Analysis Notes

## Get All Analysis Notes

```http
GET /api/v2/projects/1936/tasks/1-T2/analysis-notes/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [{
        "id": 875,
        "analysis_session": 334,
        "behaviour": "replace",
        "confidence": "high",
        "findings": {},
        "finding_ref": "my_ref",
        "status": "pass"
    }]
}
```

This endpoint returns a list of Analysis Note resources for a specific project task.

**`GET /api/v2/projects/{project_id}/tasks/{task_id}/analysis-notes/`**










## Get a specific Analysis Note

```http
GET /api/v2/projects/1936/tasks/1-T2/analysis-notes/682/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": 875,
    "analysis_session": 334,
    "behaviour": "replace",
    "confidence": "high",
    "findings": {},
    "finding_ref": "my_ref",
    "status": "pass"
}
```

This endpoint returns a specific Analysis Note resource.

**`GET /api/v2/projects/{project_id}/tasks/{task_id}/analysis-notes/{note_id}/`**










## Create an Analysis Note

```http
POST /api/v2/project/1/tasks/1-T12/analysis-notes/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "analysis_session": 334,
    "behaviour": "replace",
    "confidence": "high",
    "findings": {},
    "finding_ref": "my_ref",
    "status": "pass"
}
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": 875,
    "analysis_session": 334,
    "behaviour": "replace",
    "confidence": "high",
    "findings": {},
    "finding_ref": "my_ref",
    "status": "pass"
}
```

This endpoint creates a single Analysis Note resource.

**`POST /api/v2/projects/{project_id}/tasks/{task_id}/analysis-notes/`**

Fields              | Required | Description
--------------------|----------|-------------
analysis_session    | No       | The ID of the related Analysis Session.<br>Not required if this is a manual verification.
applicable          | No       |
behaviour           | Yes      | See [Behaviour](#behaviour) section below.
confidence          | Yes      | "high", "low", or "none"
findings            | Yes      | JSON object/array representing analysis findings
finding_ref         | No       |
status              | Yes      | "pass", "partial", "fail", or "none"
task_status_mapping | No       | See [Task Status Mapping](#tesk-status-mapping) section below.

### Behaviour

Value           | Description
----------------|------------
combine         | Combine with all previous results
replace-scanner | Overwrite previous results from this tool
replace         | Overwrite all previous result

### Task Status Mapping

You can provide an object that maps Analysis Note statuses to Task Statuses.

SD Elements will then use this mapping object to automatically change the status
of the associated task based on the status of the Analysis Note.

The object format is:

`{ "<note_status>": "<task_status_slug>", ...etc... }`

An example:

`{ "pass": "DONE", "fail": "TODO" }`
