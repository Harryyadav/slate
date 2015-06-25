
# Task Updates


## Get all unaccepted changes to the tasks for a project


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
        "description": "Insecure forgotten password and password reset...",
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
having id "project_id". These include tasks who are in the project but no longer
relevant to a project due to changes in the rules/active status, and tasks that
have become relevant since the last time the survey was updated for similar reasons.

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
    "description": "Insecure forgotten password and password reset...",
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

## Accept change to specific updated task

```http
PUT /api/v2/projects/1/task-updates/1-T2/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "accepted": true
}
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": "1-T2",
    "task_id": "T2",
    "url": "http://example.com/bunits/new-business-unit/...",
    "title": "Secure forgotten password",
    "description": "Insecure forgotten password and password reset...",
    "priority": 8,
    "phase": "Requirements",
    "relevant": true,
    "accepted": true,
    "updated": "2015-06-16T19:37:44.710100Z",
    "library_task_created": "2015-06-16T19:36:57.863684Z",
    "library_task_updated": "2015-06-16T19:36:57.836874Z"
}
```

Update the task's accepted value to match with its relevance. For a newly added
task, accepted should be set to true to add it to the project. For a no longer
relevant task, accepted should be set to false to remove it from the project.

**`PUT /api/v2/projects/{project_id}/task-updates/{task_id}/ HTTP/1.1`**

### URL Parameters

Parameter  | Description
---------- | ------------
project_id | The ID of the project for the tasks
task_id    | The ID of the specific task

### JSON Parameters

Parameter  | Type    | Description
---------  | ------- | ----------
accepted   | Boolean | Whether task is in project
