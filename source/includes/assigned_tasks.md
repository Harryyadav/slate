# User Assigned Tasks

## Get all assigned tasks

```http
GET /api/v2/users/me/tasks/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [{
        "accepted": true,
        "ad_hoc": false,
        "artifact_proxy": "ABC-XYZ",
        "assigned_to": [
            {
                "email": "admin@example.com",
                "id": 3
            }
        ],
        "text": "Insecure forgotten password.",
        "id": "1-T2",
        "library_task_created": "2010-10-20T17:46:50Z",
        "library_task_updated": "2015-05-07T18:58:26.732000Z",
        "note_count": 0,
        "phase": "Requirements",
        "priority": "8",
        "relevant": true,
        "status": "TS2",
        "task_id": "T2",
        "title": "Secure forgotten password",
        "updated": "2015-07-08T02:16:33.923315Z",
        "url": "http://example.com/bunits/bu1/app1/proj1/tasks/phase/requirements/1-T2",
        "verification_status": null,
        "project": 1,
        "application": 1
    }]
}
```

This endpoint returns a list of Tasks assigned to the current user.

**`GET /api/v2/users/me/tasks/`**

### Query Parameters

The following parameters may be used to filter the activity resources in the response.

Parameter        | Description
-----------------|-------------
application      | Returns a list of tasks within the specified application.


### Expand Parameters

```http
GET /api/v2/users/me/tasks/?expand=project HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [{
        "accepted": true,
        "ad_hoc": false,
        "artifact_proxy": "ABC-XYZ",
        "assigned_to": [
            {
                "email": "admin@example.com",
                "id": 3
            }
        ],
        "text": "Insecure forgotten password.",
        "id": "1-T2",
        "library_task_created": "2010-10-20T17:46:50Z",
        "library_task_updated": "2015-05-07T18:58:26.732000Z",
        "note_count": 0,
        "phase": "Requirements",
        "priority": "8",
        "relevant": true,
        "status": "TS2",
        "task_id": "T2",
        "title": "Secure forgotten password",
        "updated": "2015-07-08T02:16:33.923315Z",
        "url": "http://example.com/bunits/bu1/app1/proj1/tasks/phase/requirements/1-T2",
        "verification_status": null,
        "project": {
            "id": 1936,
            "slug": "proj1",
            "url": "http://example.com/bunits/bu1/app1/project1",
            "application": 1,
            "profile" : {
                "id": "P9",
                "name": "Android App",
                "logo_url": "/static/images/android.png"
            },
            "archived": false,
            "name": "Proj1",
            "creator": 1,
            "description": "API Project",
            "tags": ["foo", "bar"],
            "created": "2015-04-15T19:30:04.132712Z",
            "updated": "2015-04-15T19:57:15.042353Z",
            "parent": null,
            "users": [{
                "id": "1",
                "email": "test@example.com",
                "role": "PR4",
                "first_name": "Admin",
                "last_name": "Testerton"
            }],
            "groups": [{
                "id": "G1",
                "name": "Devs",
                "role": "PR4"
            }],
            "custom_attributes": {
              "slug": "value"
            },
            "locked_on": null,
            "locked_by": null,
            "locked": false
        },
        "application": 1
    }]
}
```

See the [Expand Parameters](#expand-parameters) section for more details.

Parameter   | Description
------------|---------------------
project     | Project field is expanded to display project information.



## Get a Specific Assigned Task

```http
GET /api/v2/users/me/tasks/1-T2/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
        "accepted": true,
        "ad_hoc": false,
        "artifact_proxy": "ABC-XYZ",
        "assigned_to": [
            {
                "email": "admin@example.com",
                "id": 3
            }
        ],
        "text": "Insecure forgotten password.",
        "id": "1-T2",
        "library_task_created": "2010-10-20T17:46:50Z",
        "library_task_updated": "2015-05-07T18:58:26.732000Z",
        "note_count": 0,
        "phase": "Requirements",
        "priority": "8",
        "relevant": true,
        "status": "TS2",
        "task_id": "T2",
        "title": "Secure forgotten password",
        "updated": "2015-07-08T02:16:33.923315Z",
        "url": "http://example.com/bunits/bu1/app1/proj1/tasks/phase/requirements/1-T2",
        "verification_status": null,
        "project": 1,
        "application": 1
}
```

This endpoint retreives a specific assigned task as specified by the Task id.

**`GET /api/v2/users/me/tasks/{task_id}/`**

### URL Parameters

Parameter        | Description
---------------- | -----------
task_id          | The id of the Task to be retrieved.

