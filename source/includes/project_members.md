# Project Members

## Get the members of a Project

```http
GET /api/v2/projects/1/members/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "users": [{
        "id": "1",
        "email": "test@example.com",
        "role": "PR4",
        "first_name": "Admin",
        "last_name": "Testerton",
        "is_active": true
    }],
    "groups": [{
        "id": "G1",
        "name": "Devs",
        "role": "PR4"
    }]
}
```

This endpoint returns the membership information for the specified project. By default, it returns on the direct users/groups of the project.

**`GET /api/v2/projects/{project_id}/members/`**

---

### Expand Filters

```http
GET /api/v2/projects/1/members/?expand=indirect_users HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "users": [{
        "id": "1",
        "email": "test@example.com",
        "role": "PR4",
        "first_name": "Admin",
        "last_name": "Testerton",
        "is_active": true
    }, {
        "id": "2",
        "email": "john@example.com",
        "role": "PR4",
        "first_name": "John",
        "last_name": "Smith",
        "is_active": true
    }, {
        "id": "3",
        "email": "abe@example.com",
        "role": "PR4",
        "first_name": "Abe",
        "last_name": "Lincoln",
        "is_active": true
    }, {
        "id": "4",
        "email": "eve@example.com",
        "role": "PR4",
        "first_name": "Eve",
        "last_name": "Online",
        "is_active": true
    }],
    "groups": [{
        "id": "G1",
        "name": "Devs",
        "role": "PR4"
    }, {
        "id": "G2",
        "name": "Frontend Devs",
        "role": "PR4"
    }, {
        "id": "G3",
        "name": "Backend Devs",
        "role": "PR4"
    }]
}
```

See the [Expand Parameters](#expand-parameters) section for more details.

Parameter      | Description
---------------|------------
indirect_users | Expand the users/groups that are members of a group (or a group belonging to a group) in the project.





## Update members of a Project

```http
PUT/PATCH /api/v2/projects/1/members/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
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
    }]
}
```

Fields      | Required | Description
------------|----------|-------------
groups      | No       | A list of dictionaries per group that are to be assigned to the project. Each dictionary should contain the group's id and the desired role.
users       | No       | A list of dictionaries per user that are to be assigned to the project. Each dictionary should contain the user's email and the desired role.
