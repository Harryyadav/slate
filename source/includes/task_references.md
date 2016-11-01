# Task References

## Get all references of a task

```http
GET /api/v2/projects/1/tasks/1-T21/references/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "results": [
    {
      "id": 1,
      "alm_connection": 2,
      "reference": "47300",
      "name": "PROJ-450",
      "link": "https://atlassian.net/browse/PROJ-450"
    },
    {
      "id": 2,
      "alm_connection": 3,
      "reference": "47301",
      "name": "PROJ-451",
      "link": "https://atlassian.net/browse/PROJ-451"
    }
  ]
}
```

This endpoint returns a list of Task Reference resources.

**`GET /api/v2/projects/{project_id}/tasks/{task_id}/references/`**










## Get a Specific Reference

```http
GET /api/v2/projects/1/tasks/1-T21/references/1/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "id": 1,
  "alm_connection": 2,
  "reference": "47300",
  "name": "PROJ-450",
  "link": "https://atlassian.net/browse/PROJ-450"
}
```

This endpoint retrieves a single Task Reference resource, as specified by the id parameter.

**`GET /api/v2/projects/{project_id}/tasks/{task_id}/references/{reference_id}/`**










## Create a New Task Reference

```http
POST /api/v2/projects/1/tasks/1-T21/references/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
  "alm_connection": 2,
  "reference": "47300",
  "name": "PROJ-450",
  "link": "https://atlassian.net/browse/PROJ-450"
}
```

```http
HTTP/1.1 201 CREATED
Content-Type: application/json

{
  "id": 1,
  "alm_connection": 2,
  "reference": "47300",
  "name": "PROJ-450",
  "link": "https://atlassian.net/browse/PROJ-450"
}
```

Fields          | Required | Description
----------------|----------|------------
alm_connection  | Yes      | The ID of the ALM connection the task is linked to
reference       | Yes      | Internal reference to a linked artifact
name            | No       | User-friendly identifier for the artifact
link            | No       | User-facing reference, like a hyperlink used in a web app










## Update a Task Reference

```http
PATCH /api/v2/projects/1/tasks/1-T21/references/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
  "reference": "47300",
  "name": "PROJ-450",
  "link": "https://atlassian.net/browse/PROJ-450"
}
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "id": 1,
  "alm_connection": 2,
  "reference": "47300",
  "name": "PROJ-450",
  "link": "https://atlassian.net/browse/PROJ-450"
}
```

Update a single Task Reference 

**`PATCH /api/v2/projects/{project_id}/tasks/{task_id}/references/{reference_id}/`**

### URL Parameters

Parameter    | Description
-------------|------------
project_id   | The id of the Project containing the Task
task_id      | The id of the Task the reference links to
reference_id | The id of the Reference to update

### Payload

Fields          | Required | Description
----------------|----------|------------
reference       | No       | Internal reference to a linked artifact
name            | No       | User-friendly identifier for the artifact
link            | No       | User-facing reference, like a hyperlink used in a web app










## Delete a Task Reference

```http
DELETE /api/v2/projects/1/tasks/1-T21/references/1/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 204 NO CONTENT
```

This endpoint deletes a specific task reference, specified by the reference id.

**`DELETE /api/v2/projects/{project_id}/tasks/{task_id}/references/{reference_id}/`**

### URL Parameters

Parameter    | Description
-------------|------------
project_id   | The id of the Project containing the Task
task_id      | The id of the Task the reference links to
reference_id | The id of the Reference to delete
