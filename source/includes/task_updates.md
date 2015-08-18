# Task Updates

## Retrieve the list of tasks whose inclusion state does not match its relevance

```http
GET /api/v2/projects/1/task-updates/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [{
        "id": "1-T2",
        "task_id": "T2",
        "url": "http://example.com/bunits/new-business-unit/...",
        "title": "Secure forgotten password",
        "text": "Insecure forgotten password and password reset...",
        "priority": 8,
        "phase": "Requirements",
        "relevant": true,
        "accepted": false,
        "updated": "2015-06-16T19:37:44.710100Z",
        "library_task_created": "2015-06-16T19:36:57.863684Z",
        "library_task_updated": "2015-06-16T19:36:57.836874Z"
    }]
}
```

Will return a list of tasks whose accepted state is out of date with the project
having id "project_id". This list includes tasks which are relevant to a project
but have not have not had their inclusion accepted by a user and tasks which
are no longer relevant to a project whose removal has yet to be accepted.

**`GET /api/v2/projects/{project_id}/tasks-updates/`**

### URL Parameters

Parameter  | Description
---------- | ------------
project_id | The ID of the project for the tasks










## Accept task changes for a project

```http
POST /api/v2/projects/1/tasks-updates/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
```

Will accept all changes to the project tasks. This will add all relevant tasks
to the project, and it will remove all no longer relevant tasks from the project.

**`POST /api/v2/projects/{project_id}/task-updates/`**

### URL Parameters

Parameter  | Description
---------- | ------------
project_id | The ID of the project for the tasks










## Get specific updated task

```http
GET /api/v2/projects/1/task-updates/1-T2/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": "1-T2",
    "task_id": "T2",
    "url": "http://example.com/bunits/new-business-unit/...",
    "title": "Secure forgotten password",
    "text": "Insecure forgotten password and password reset...",
    "priority": 8,
    "phase": "Requirements",
    "relevant": true,
    "accepted": false,
    "updated": "2015-06-16T19:37:44.710100Z",
    "library_task_created": "2015-06-16T19:36:57.863684Z",
    "library_task_updated": "2015-06-16T19:36:57.836874Z"
}
```

Return task data for a specific task whose relevance is out of line with its
acceptance status

**`GET /api/v2/projects/{project_id}/task-updates/{task_id}/`**

### URL Parameters

Parameter  | Description
---------- | ------------
project_id | The ID of the project for the tasks
task_id    | The ID of the specific task
