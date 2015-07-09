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
