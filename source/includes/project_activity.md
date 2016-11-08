# Project Activities

## Get Activities associated with a Project

This endpoint returns a list of Activities associated with a Project. Activities are events that have occurred in the application. The date the event occurred and some additional data is returned.

**`GET /api/v2/projects/{project_id}/activities/`**

### URL Parameters

Parameter        | Description
---------------- | -----------
project_id       | The id of the Project to retrieve the activities of.


```http
GET /api/v2/projects/{project_id}/activities/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
	count: 3,
	next: null,
	previous: null,
	results: [
		{
			id: 4278,
			name: "ModifiedProjectActivity",
			actor: 1,
			text: "Admin Testerton modified project 123444321443 in application Flipism",
			date: "2016-10-31T19:43:23.648726Z",
			data: {
				project_desc: "123444321443",
				application_desc: "Flipism",
				project: 11,
				application: 5,
				business_unit: 1,
				business_unit_desc: "Test BU"
			},
			icon: "modify",
			log_level: "modify"
		},
		{
			id: 4271,
			name: "CreatedProjectActivity",
			actor: 1,
			text: "Admin Testerton created project 123444321 in application Flipism",
			date: "2016-10-31T19:20:13.887289Z",
			data: {
				project_desc: "123444321",
				application_desc: "Flipism",
				project: 11,
				application: 5,
				business_unit: 1,
				business_unit_desc: "Test BU"
			},
			icon: "createProject",
			log_level: "create"
		},
		{
			id: 4270,
			name: "AddedUserToProjectActivity",
			actor: 1,
			text: "Admin Testerton added Admin Testerton to project 123444321 in application Flipism",
			date: "2016-10-31T19:20:12.570855Z",
			data: {
				project_desc: "123444321",
				application_desc: "Flipism",
				project: 11,
				application: 5,
				business_unit: 1,
				user: "U1",
				user_desc: "Admin Testerton",
				business_unit_desc: "Test BU"
			},
			icon: "personAdd",
			log_level: "user"
		}
	]
}
```
