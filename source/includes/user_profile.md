# User Profile

## Get User Profile

```http
GET /api/v2/users/me/profile/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "plaintext_emails_only": false,
  "notify_on_task_status_changed": true,
  "notify_on_task_note_added": true,
  "notify_on_job_failed": true,
  "notify_on_new_relevant_tasks_in_project": true,
  "notify_on_task_assigned": true,
  "notify_on_task_added_to_project": true,
  "notify_on_task_team_changed": true,
  "notify_tasks": [{
    "id": "T514",
    "name": "Prevent formula injection in CSV Excel"
  },{
    "id": "T506",
    "name": "Verify that iOS in-app purchases are securely implemented"
  }]
}
```

This endpoint returns the profile data of the current user.

**`GET /api/v2/users/me/profile/`**










## Update User Profile

```http
PATCH /api/v2/users/me/profile/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
Content-Type: application/json

{
  "plaintext_emails_only": false,
  "notify_on_task_status_changed": false,
  "notify_on_task_note_added": false,
  "notify_on_job_failed": true,
  "notify_on_new_relevant_tasks_in_project": true,
  "notify_on_task_assigned": true,
  "notify_on_task_added_to_project": true,
  "notify_on_task_team_changed": true,
  "notify_tasks": ["T514"]
}
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "plaintext_emails_only": false,
  "notify_on_task_status_changed": true,
  "notify_on_task_note_added": true,
  "notify_on_job_failed": true,
  "notify_on_new_relevant_tasks_in_project": true,
  "notify_on_task_assigned": true,
  "notify_on_task_added_to_project": true,
  "notify_on_task_team_changed": true,
  "notify_tasks": [{
    "id": "T514",
    "name": "Prevent formula injection in CSV Excel in 0"
  }]
}
```

Update the current user's profile.

**`PATCH /api/v2/users/me/profile/`**

