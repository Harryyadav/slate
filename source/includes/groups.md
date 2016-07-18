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
        "name": "Group2",
        "description": "Group description",
        "role": "Administrator"
    }]
}
```

This endpoint returns a list of Group resources.

**`GET /api/v2/groups/`**










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
    "name": "Group2",
    "description": "Group description",
    "role": "Administrator"
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
    "users": [{"email": "user1@example.com"}, {"email": "user2@example.com"}],
    "groups": [{"id": "G1"}]
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
    "users": [{"email": "user1@example.com"}, {"email": "user2@example.com"}],
    "groups": [{"id": "G1"}]
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
groups        | No       | A list of dictionaries representing the groups which are part of the business unit. Each dictionary has an id field which is the group id.












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
    "users": [{"email": "user1@example.com"}, {"email": "user2@example.com"}],
    "groups": [{"id": "G1"}]
}
```

Update a specific Group resource.

**`PUT /api/v2/users/{group_id}/`**

### URL Parameters

Parameter       | Description
--------------- | -----------
group_id        | The ID of the Group to update

