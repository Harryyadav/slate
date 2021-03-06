# Business Units

## Get All Business Units

```http
GET /api/v2/business-units/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [
        {
            "id": 1,
            "slug": "example-business-unit-1",
            "name": "example business unit 1",
            "created": "2015-09-30T18:28:37.214914Z",
            "updated": "2015-09-30T18:28:37.214959Z",
            "default_groups": [],
            "default_users": [],
            "users": [{
                "id": 682,
                "email": "frank@sdelements.com",
                "first_name": "Frank",
                "last_name": "Testerton",
                "is_active": true,
                "role": {
                    id: "UR1",
                    name: "User"
                }
            }],
            "groups": [{
                "id": "G64",
                "name": "Group Bar"
            }],
            "all_users": false,
            "persist_phases": false,
            "default_risk_policy": null
        },
        {
            "id": 2,
            "slug": "example-business-unit-2",
            "name": "example business unit 2",
            "created": "2015-09-30T19:30:25.254036Z",
            "updated": "2015-09-30T19:30:25.254072Z",
            "default_users": [],
            "default_groups": [],
            "users": [],
            "groups": [],
            "all_users": false,
            "persist_phases": false,
            "default_risk_policy": null
        }
    ]
}
```

This endpoint retrieves a list of Business Unit resources, respecting the permissions of the user who has made the request.

**`GET /api/v2/business-units/`**

### Query Parameters

The following parameters may be used to filter the business unit resources in the response.

Parameter | Description
----------|-----------------------------
name      | Filter business units by name.
ordering  | Sort business units by the specified field. Prefix field name with minus to sort descending. Sortable fields: name.
search    | Filter applications by performing a textual search on name.

----


### Include Parameters

```http
GET /api/v2/business-units/?include=risk_policy_compliance HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```
```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "results": [
        {
            "id": 1,
            "slug": "example-business-unit-1",
            "name": "example business unit 1",
            "created": "2015-09-30T18:28:37.214914Z",
            "updated": "2015-09-30T18:28:37.214959Z",
            "default_groups": [],
            "default_users": [],
            "users": [{
                "id": 682,
                "email": "frank@sdelements.com",
                "first_name": "Frank",
                "last_name": "Testerton",
                "is_active": true,
                "role": {
                    id: "UR1",
                    name: "User"
                }
            }],
            "groups": [{
                "id": "G64",
                "name": "Group Bar"
            }],
            "all_users": false,
            "persist_phases": false,
            "default_risk_policy": null,
            "risk_policy_compliance": {
                "compliant_projects": 37,
                "non_compliant_projects": 12
            }
        },
        {
            "id": 2,
            "slug": "example-business-unit-2",
            "name": "example business unit 2",
            "created": "2015-09-30T19:30:25.254036Z",
            "updated": "2015-09-30T19:30:25.254072Z",
            "default_users": [],
            "default_groups": [],
            "users": [],
            "groups": [],
            "all_users": false,
            "persist_phases": false,
            "default_risk_policy": null,
            "risk_policy_compliance": {
                "compliant_projects": 15,
                "non_compliant_projects": 45
            }
        }
    ]
}
```

See the [Include Parameters](#include-parameters) section for more details.

Parameter              | Description
-----------------------|---------------
risk_policy_compliance | Includes an object which returns the number of compliant and non-compliant projects





## Get a Specific Business Unit

```http
GET /api/v2/business-units/1/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": 1,
    "slug": "example-business-unit-1",
    "name": "example business unit 1",
    "created": "2015-09-30T18:28:37.214914Z",
    "updated": "2015-09-30T18:28:37.214959Z",
    "default_groups": [],
    "default_users": [],
    "users": [{
        "id": 682,
        "email": "frank@sdelements.com",
        "first_name": "Frank",
        "last_name": "Testerton",
        "is_active": true,
        "role": {
            id: "UR1",
            name: "User"
        }
    }],
    "groups": [{
        "id": "G64",
        "name": "Group Bar"
    }],
    "all_users": false,
    "persist_phases": false,
    "default_risk_policy": null
}
```

This endpoint retrieves a specific Business Unit resource, as specified by the id parameter.

**`GET /api/v2/business-units/{business_unit_id}/`**

### URL Parameters

Parameter         | Description
----------------- | -----------
business_unit_id  | The id of the Business Unit to retrieve.










## Create a New Business Unit

```http
POST /api/v2/business-units/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "name": "API Test",
    "users": [{"email": "test@example.com"}],
    "groups": [{"id": "G1"}],
    "default_users": [{"email": "test@example.com", "role": "PR4"}],
    "default_groups": [{"id": "G1", "role": "PR4"}],
    "all_users": false,
    "persist_phases": false,
    "default_risk_policy": 29
}
```

```http
HTTP/1.1 201 CREATED
Content-Type: application/json

{
    "id": 541,
    "slug": "api-test",
    "name": "API Test",
    "created": "2015-09-30T18:28:37.214914Z",
    "updated": "2015-09-30T18:28:37.214959Z",
    "users": [{
        "id": 1,
        "email": "test@example.com",
        "first_name": "Admin",
        "last_name": "Testerton",
        "is_active": true,
        "role": {
            id: "UR1",
            name: "User"
        }
    }],
    "groups": [{
        "id": "G1"
    }],
    "default_users": [{
        "email": "test@example.com",
        "role": "PR4",
        "id": 1,
        "first_name": "Admin",
        "last_name": "Testerton",
        "is_active": true
    }],
    "default_groups": [{
        "id": "G1",
        "role": "PR4"
    }],
    "all_users": false,
    "persist_phases": false,
    "default_risk_policy": 29
}
```

Fields              | Required | Description
--------------------|----------|-------------
name                | Yes      | The name of the new business unit.
users               | No       | A list of dictionaries representing the users who are part of the business unit. Each dictionary has an email field.
groups              | No       | A list of dictionaries representing the groups which are part of the business unit. Each dictionary has an id field which is the group id.
default_users       | No       | A list of dictionaries representing the default user roles for the users in the business unit. Each dictionary has an email field and a role field where the role is the role id. The users specified here should be members of the business unit unless all_users is true.
default_groups      | No       | A list of dictionaries representing the default group roles for the users in the business unit. Each dictionary has an id field which is the group id and a role field where the role is the role id. The groups specified here should be members of the business unit unless all_users is true.
all_users           | No       | Whether the business unit includes all users. Trying to create a business unit with this field set to True and specific users/groups specified is an error. Default is false.
persist_phases      | No       | Set the persistence of TODO tasks that belong to active phases in a project within this business unit.
default_risk_policy | No       | The id of risk policy that applies to all projects of this business unit by default unless overriden by the project's risk policy. This overrides the organization's default risk policy.










## Update a Business Unit

```http
PATCH /api/v2/business-units/36/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{
    "name": "New BU Name"
}
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": 36,
    "slug": "api-test",
    "name": "New BU Name",
    "created": "2015-09-30T18:28:37.214914Z",
    "updated": "2015-09-30T18:28:37.214959Z",
    "users": [{
        "email": "test@example.com",
        "id": 1,
        "first_name": "Admin",
        "last_name": "Testerton",
        "is_active": true,
        "role": {
            id: "UR1",
            name: "User"
        }
    }],
    "groups": [{
        "id": "G1"
    }],
    "default_users": [{
        "email": "test@example.com",
        "role": "PR4",
        "id": 1,
        "first_name": "Admin",
        "last_name": "Testerton",
        "is_active": true
    }],
    "default_groups": [{
        "id": "G1",
        "role": "PR4"
    }],
    "all_users": false,
    "persist_phases": false,
    "default_risk_policy": null
}
```

Update a single business unit by specifying the id. The fields `users`, `groups`, `name`, `default_users`, and `default_groups` can be updated.

**`PATCH /api/v2/business-units/{business_unit_id}/`**

### URL Parameters

Parameter         | Description
----------------- | -----------
business_unit_id  | The id of the Business Unit to update.










## Delete a Business Unit

```http
DELETE /api/v2/business-units/1/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 204 NO CONTENT
```

This endpoint deletes a single Business Unit resource, as specified by the id parameter.

**`DELETE /business-units/{business_unit_id}/`**

### URL Parameters

Parameter         | Description
----------------- | --------------
business_unit_id  | The id of the Business Unit to delete.
