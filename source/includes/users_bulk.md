# Users Bulk Import


## Bulk User Creation

```http
POST /api/v2/users/bulk-upload/ HTTP/1.1
Accept: text/csv
Authorization: Token "YOUR SDE ACCESS TOKEN"

bob@sdelements.com,Bob,Bacon,Project Lead,Group Leads;Group X
cathy@sdelements.com,Cathy,Clause,User,Group Y
```

```http
HTTP/1.1 201 OK
Content-Type: application/json

{
    "users": [{
      "email": "bob@sdelements.com",
      "first_name": "Bob",
      "last_name": "Bacon",
      "role": "Project Lead",
      "groups": [
        "Group Leads",
        "Group X"
      ]
    }, {
      "email": "cathy@sdelements.com",
      "first_name": "Cathy",
      "last_name": "Clause",
      "role": "User",
      "groups": [
        "Group Y"
      ]
    }]
}
```

This endpoint accepts a CSV file containing user information and
imports them into the current user's organization. The endpoint
performs a dry-run by default, no new users will be created
unless the commit flag is true.

### CSV Headers
Column     | Required | Description                                                               |
-----------|----------|---------------------------------------------------------------------------|
email      | Yes      | User's email                                                              |
first_name | Yes      | User's first name                                                         |
last_name  | Yes      | User's last name                                                          |
role       | No       | Name of user's role                                                       |
groups     | No       | A semi-colon separated list of group names that the user should belong to |

### Query Parameters

The following parameters may be used with the endpoint.

Parameter     | Description
--------------|----------------------------------------------------------------------------------|
commit        | If commit is true, the users will be added into the database. Defaults to false. |

**`POST /api/v2/users/bulk-upload/`**

