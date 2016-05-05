# Project Settings

## Get the project settings of a project

```http
GET /api/v2/projects/1/settings/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "answers": [
        "A21",
        "A493"
    ],
    "survey_complete": true
}
```

This endpoint returns data relevant to the profile for the current project

**`GET /api/v2/projects/{project_id}/settings/`**

---

### Expand Filters

```http
GET /api/v2/projects/1/settings/?expand=answers HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "answers": [
        {
            "id": "A21",
            "cpe": "cpe:/question/answer",
            "text": "",
            "selected_by": []
            "question": "Q100",
        }
    ],
    "survey_complete": true
}
```

See the [Expand Parameters](#expand-parameters) section for more details.

Parameter | Description
----------|------------
answers   | answers in answers field are expanded to include id, cpe, text, selected_by
---

