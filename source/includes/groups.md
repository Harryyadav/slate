# Groups

## Get All Groups

```http
GET /api/v2/groups/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [{
        "id": "G64",
        "name": "Group 64",
        "description": "Group description",
        "role": "UR4"
    }]
}
```

This endpoint returns a list of Group resources.

**`GET /api/v2/groups/`**

### Include Parameters

```http
GET /api/v2/groups?include=groups,users
Accept: application/json
Authorization: Token: "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [{
        "id": "G64",
        "name": "Group 64",
        "description": "Group description",
        "role": "UR4"
        "users": [{
            "first_name": "Frank",
            "last_name": "Testerton",
            "is_active": true,
            "id": 2,
            "email": "frank@example.com"
        }],
        "groups": [{
            role: "User",
            id: "G1",
            name: "Example Group"
        }]
    }]
}
```

See the [Include Parameters](#include-parameters) section for more details.

Parameter | Description
----------|-----------------
groups    | Includes a list of nested groups that are directly a member of the parent group
users     | Includes a list of direct users a part of the group.






## Get a Specific Group

```http
GET /api/v2/groups/G64/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": "G64",
    "name": "Group 64",
    "description": "Group description",
    "role": "UR4",
}
```

This endpoint retreives a specific Group Resource as specified by the group_id.

**`GET /api/v2/groups/{group_id}/`**

### URL Parameters

Parameter | Description
--------- | -----------
group_id  | The id of the Group to retrieve









## Create a Group

```http
POST /api/v2/users/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "name": "Group 2",
    "role": "UR5",
    "users": [{"email": "frank@example.com"}],
    "groups": ["G1"]
}
```

```http
HTTP/1.1 201 CREATED
Content-Type: application/json

{
    "id": "G2",
    "name": "Group 2",
    "description": "",
    "role": "UR5",
    "users": [{
        "first_name": "Frank",
        "last_name": "Testerton",
        "is_active": true,
        "id": 2,
        "email": "frank@example.com"
    }],
    "groups": [{
        role: "User",
        id: "G1",
        name: "Example Group"
    }]
}
```

Create a Group resource.

**`POST /api/v2/groups/`**

Fields        | Required | Description
--------------|----------|-------------
name          | Yes      | The name of the group resource
description   | No       | The description of the group
role          | Yes      | The role of the group
users         | No       | A list of dictionaries representing the users who are part of the business unit. Each dictionary has an email field.
groups        | No       | A list of group ids representing the nested groups who are part of the parent group.












## Update a specific Group

```http
PUT /api/v2/groups/G2/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "name": "User Experience Group",
    "description": "Deals with designing user experiences"
}
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": "G2",
    "name": "User Experience Group",
    "description": "Deals with designing user experiences",
    "role": "UR1"
    "users": [{
        "first_name": "Frank",
        "last_name": "Testerton",
        "is_active": true
        "id": 2,
        "email": "frank@example.com"
    }],
    "groups": [{
        "role": "User"
        "id": "G1",
        "name": "Example Group"
    }]
}
```

Update a specific Group resource.

**`PUT /api/v2/users/{group_id}/`**

### URL Parameters

Parameter       | Description
--------------- | -----------
group_id        | The ID of the Group to update



## Delete a Group

```http
DELETE api/v2/groups/G1/
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 204 NO CONTENT
```

This endpoint deletes a single Group resource, as specified by the id parameter.

** `DELETE /groups/{group_id}/`**

Parameter | Description
----------|----------------
group_id  | The id of the group to delete
