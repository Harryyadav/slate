# Task Notes

## Get All Task Notes

```http
GET /api/v2/projects/1/tasks/1-T2/notes/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [{
        "id": 682,
        "task": "1-T2",
        "text": "This task is on-hold until we...",
        "updater": 1,
        "created": "2015-03-26T19:50:46.348000Z",
        "updated": "2015-03-26T19:50:46.348000Z"
    }]
}
```

This endpoint returns a list of Task Note resources.

**`GET /api/v2/projects/{project_id}/tasks/{task_id}/notes/`**

### URL Parameters

Parameter  | Description
---------- | -----------
project_id | The id of the Project
task_id    | The id of the Task










## Get a Specific Task Note

```http
GET /api/v2/projects/1/tasks/1-T2/notes/682/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": 682,
    "task": "1-T2",
    "text": "This task is on-hold until we...",
    "updater": 1,
    "created": "2015-03-26T19:50:46.348000Z",
    "updated": "2015-03-26T19:50:46.348000Z"
}
```

This endpoint returns a specific Task Note resource.

**`GET /api/v2/projects/{project_id}/tasks/{task_id}/notes/{note_id}/`**

### URL Parameters

Parameter  | Description
---------- | -----------
project_id | The id of the Project
task_id    | The id of the Task
note_id    | The id of the Task Note to retrieve










## Create a Task Note

```http
POST /api/v2/projects/1/tasks/1-T2/notes/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "text": "This task is on-hold until we...",
}
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": 682,
    "task": "1-T2",
    "text": "This task is on-hold until we...",
    "updater": 1,
    "created": "2015-03-26T19:50:46.348000Z",
    "updated": "2015-03-26T19:50:46.348000Z"
}
```

This endpoint creates a Task Note resource with the specified content.

**`POST /api/v2/projects/{project_id}/tasks/{task_id}/notes/`**

### URL Parameters

Parameter  | Description
---------- | -----------
project_id | The id of the Project
task_id    | The id of the Task

### Fields

Field | Required | Description
----- |----------| -----------
text  | Yes      | The note text










## Update a Task Note

```http
PUT /api/v2/projects/1/tasks/1-T2/notes/682/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "text": "This task is on-hold until we...",
}
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": 682,
    "task": "1-T2",
    "text": "This task is on-hold until we...",
    "updater": 1,
    "created": "2015-03-26T19:50:46.348000Z",
    "updated": "2015-03-26T19:50:46.348000Z"
}
```

This endpoint updates a Task Note resource.

**`PUT /api/v2/projects/{project_id}/tasks/{task_id}/notes/{note_id}/`**

### URL Parameters

Parameter  | Description
---------- | -----------
project_id | The id of the Project
task_id    | The id of the Task
note_id    | The id of the Task Note to update

### Fields

Field | Required | Description
----- |----------| -----------
text  | Yes      | The note text










## Delete a Specific Task Note

```http
DELETE /api/v2/projects/1/tasks/1-T2/notes/682/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 204 NO CONTENT
```

This endpoint deletes a specific Task Note resource.

**`DELETE /api/v2/projects/{project_id}/tasks/{task_id}/notes/{note_id}/`**

### URL Parameters

Parameter  | Description
---------- | -----------
project_id | The id of the Project
task_id    | The id of the Task
note_id    | The id of the Task Note to retrieve
