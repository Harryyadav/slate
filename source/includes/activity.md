# Activities

## Get all activities

```http
GET /api/v2/activities/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [{
        id: 5,
        name: "CreatedGroupActivity",
        actor: 1,
        text: "Admin Testerton created group group A",
        date: "2016-05-06T14:53:28.557156Z",
        data: {
            target_group_desc: "group A",
            group: "G1",
            group_desc: "group A"
        },
        icon: "user",
        log_level: "success"
    },
    {
        "id": 3,
        "date": "2016-03-30T17:10:20.532634+00:00",
        "actor": 7,
        "name": "ModifiedBusinessUnitActivity",
        "text": "Admin Testerton modified business unit Example BU 500",
        "data": {
            "business_unit": 5,
            "business_unit_desc": "Example BU 500"
        },
        "icon": "edit",
        "log_level": ""
    },
    {
        "id": 2,
        "date": "2016-03-30T15:16:05.659610+00:00",
        "actor": 1,
        "name": "UserCreatedActivity",
        "text": "Admin Testerton created user Cindy Lu",
        "data": {"user": "U7}",
        "icon": "user",
        "log_level": ""

    },
    {
        "id": 1,
        "date": "2016-03-30T15:14:46.634929+00:00",
        "actor": 1,
        "name": "LoggedInActivity",
        "text": "Admin Testerton logged in",
        "data": {},
        "icon": "user"
        "log_level" : ""
    }]
}
```

This endpoint returns a list of Activities.  Activities are events that have occurred in the application. We return when they occurred and some additional data about the event.

** `GET /api/v2/activities/` **

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
user             | Returns a list of activities that reference the user with the specified user id (not to be confused with activities that are performed by this user).  The id used here is a number, for example `?user=1`.
standard         | Returns a list of activities that reference the standard with the specified id.  The id is of the format T or CT followed by a number, for example 'T1'.
standard_desc    | Returns a list of activities that reference the standard with the specified standard_desc.







## Get a Specific Activity

```http
GET /api/v2/activities/2/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
        "id": 2,
        "date": "2016-03-30T15:16:05.659610+00:00",
        "actor": 1,
        "name": "UserCreatedActivity",
        "text": "Admin Testerton created user Cindy Lu",
        "data": {"user": "U7"},
        "icon": "user",
        "log_level": ""

}
```

This endpoint retreives a specific Activity Resource as specified by the activity_id.

**`GET /api/v2/activities/{activity_id}/`**

### URL Parameters

Parameter        | Description
---------------- | -----------
activity_id      | The id of the Activity Resource to retrieve.

