# User Activities

## Get all users activities

```http
GET /api/v2/users/me/log/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [{
    "id": 23,
    "actor": 7,
    "name": "MarkedTaskActivity",
    "text": "Cindy Lu marked T21: Ensure confidential data is sent over an encrypted channel as Complete in project proj1 of application app1",
    "date": "2016-05-11T18:53:02.216545Z",
    "data":{
        "status": "TS1",
        "project_desc": "proj1",
        "application_desc": "app1",
        "status_desc": "Complete",
        "standard": "T21",
        "standard_desc": "T21: Ensure confidential data is sent over an encrypted channel",
        "task_desc": "T21: Ensure confidential data is sent over an encrypted channel",
        "business_unit_desc": "Example BU"
        },
    "icon" : "check"
    },

    {"id": 20,
    "name": "AddedUserToProjectActivity",
    "actor": 1,
    "text": "Admin Testerton added Cindy Luto project proj1 in application app1",
    "date": "2016-05-11T18:52:34.548759Z",
    "data": {
        "project_desc": "proj1",
        "application_desc": "app1",
        "user": "U7",
        "user_desc": "Cindy Lu",
        "business_unit_desc": "Example BU"
        },
    "icon": "users"
    },

    {"id": 4,
    "name": "UserCreatedActivity",
    "actor": 1,
    "text": "Admin Testerton created user Cindy Lu",
    "date": "2016-05-06T14:53:10.961953Z",
    "data": {
        "user": "U2",
        "user_desc": "Cindy Lu"
        },
    "icon": "user"
    }]
}
```

This endpoint returns a list of Activities pertaining to the current user.  Activities are events that have occurred in the application. We return when they occurred and some additional data about the event.

** `GET /api/v2/users/me/log/` **

Note: this endpoint uses the term 'standard' to reference what we call 'library tasks' elsewhere in the API.

The application, business_unit, project, and standard fields have associated description fields, suffixed with '_desc'.  These fields contain a description of the related item, and can be used to filter if the related item has been deleted.


### Query Parameters

The following parameters may be used to filter the activity resources in the response.

Parameter        | Description
-----------------|-------------
actor            | Returns a list of activities performed by the user with the id specified.
application      | Returns a list of activities that reference the application with the specified id.
application_desc | Returns a list of activities that reference the application with the specified application_desc.
business_unit    | Returns a list of activities that reference the business unit with the specified id.
business_unit_desc | Returns a list of activities that reference the business_unit with the specified business_unit_desc.
date_to          | Returns all activities performed at or before the specified date.
date_from        | Returns all activities performed at or after the specified date.
id               | Returns the activities with the specified id.
name             | Returns a list of activities with the specified name.
project          | Returns a list of activities that reference the project with the specified id.
project_desc     | Returns a list of activities that reference the project with the specified project_desc.
user             | Returns a list of activities that reference the user with the specified user id (not to be confused with activities that are performed by this user).
standard         | Returns a list of activities that reference the standard with the specified id.  The id is of the format T or CT followed by a number, for example 'T1'.
standard_desc    | Returns a list of activities that reference the standard with the specified standard_desc.







## Get a Specific Activity

```http
GET /api/v2/users/me/log/2/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
        "id": 4,
        "date": "2016-03-30T15:16:05.659610+00:00",
        "actor": 1,
        "name": "UserCreatedActivity",
        "text": "Admin Testerton created user Cindy Lu",
        "data": {"user": 7},
        "icon": "user"
}
```

This endpoint retreives a specific Activity Resource as specified by the activity_id.

**`GET /api/v2/users/me/log/{activity_id}/`**

### URL Parameters

Parameter        | Description
---------------- | -----------
activity_id      | The id of the Activity Resource to retrieve.

