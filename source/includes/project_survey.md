# Project Survey

## Get the project survey of a project

```http
GET /api/v2/projects/1/survey/ HTTP/1.1
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

**`GET /api/v2/projects/{project_id}/survey/`**

---

### Expand Filters

```http
GET /api/v2/projects/1/survey/?expand=answers HTTP/1.1
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
            "selected_by": [],
            "question": "Q100"
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

# Project Survey Draft










## Get the current state of the project survey draft

```http
GET /api/v2/projects/1/survey/draft/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "answers": [{
            "id": "A21",
            "selected": false,
            "valid": true
    }, ...],
    "survey_complete": true,
    "dirty": false
}
```

Returns the current state of the survey draft. All non-hidden answers are returned
along with whether they are selected and whether they are valid for the current
survey state. Dirty is a boolean representing whether the current draft state
is different from the last saved survey.

**`GET /api/v2/projects/{project_id}/survey/draft/`**

### Include Filters

```http
GET /api/v2/projects/1/survey/draft/?include=survey HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "answers": [{
            "id": "A21",
            "selected": false,
            "valid": true
    }, ...],
    "survey_complete": true,
    "dirty": false,
    "survey": {
        "sections": [{
            "id": "S1",
            "title": "Application Survey",
            "slug": "application-survey",
            "subsections": [{
                "id": "Q1",
                "title": "Programming Language",
                "questions": [{
                    "id": "Q21",
                    "text": "Is this a question?",
                    "description": "Help text",
                    "format": "MC", // SC for single choice, else MC
                    "mandatory": false,
                    "satisfied": true,
                    "subquestions": [{
                        "mandatory": false,
                        "description: "",
                        "format: "MC",
                        "text: "Sub Question?",
                        "satisfied": true,
                        "answers": [{
                            "description": "Description 1",
                            "text": "Answer 1",
                            "selected": false,
                            "selected_by": [ ],
                            "valid": true,
                            "id": "A11"
                        }, {
                            "description": "Description 2",
                            "text": "Answer 2",
                            "selected": false,
                            "selected_by": [ ],
                            "valid": true,
                            "id": "A12"
                        }],
                        id: "Q216"
                    }],
                    "answers": [{
                        "id": "A21",
                        "text": "Yes",
                        "description": "Help text",
                        "selected": false,
                        "valid": true,
                        "selected_by": []
                    }, ...]
                }, ...]
            }, ...]
        }, ...]
    }
}
```

See the [Include Parameters](#include-parameters) section for more details.

Parameter | Description
----------|------------
survey    | Includes a full representation of the survey structure with metadata

---










## Reset the draft

```http
DELETE /api/v2/projects/1/survey/draft/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "answers": [{
            "id": "A21",
            "selected": false,
            "valid": true
    }, ...],
    "survey_complete": true,
    "dirty": false,
}
```

Reverts changes to the draft to the last saved state.

**`DELETE /api/v2/projects/{project_id}/survey/draft/`**

---










## Save the draft

```http
POST /api/v2/projects/1/survey/draft/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "answers": [{
            "id": "A21",
            "selected": false,
            "valid": true
    }, ...],
    "survey_complete": true,
    "dirty": false,
}
```

This saves the current changes to the draft to the project. This may cause changes
in the applicable tasks & other content for the project as well as accepting any
other unaccepted changes to the tasks.

**`POST /api/v2/projects/{project_id}/survey/draft/`**

---










## Modify an answer in the draft

```http
PUT /api/v2/projects/1/survey/draft/A21/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{"selected": true}
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "answers": [{
            "id": "A21",
            "selected": true,
            "valid": true
    }, ...],
    "survey_complete": true,
    "dirty": true
}
```

Modifies the specified answer in the draft and returns the full draft state.
This may affect other answer's selected and valid values.

**`PUT /api/v2/projects/{project_id}/survey/draft/{answer_id}/`**

Field    | Required | Description
-------- | -------- | -----------
selected | Yes      | Selects or unselects the specified answer

---










## Clone a profile to the draft

```http
PUT /api/v2/projects/1/survey/draft/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{"profile": "P21"}
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "answers": [{
            "id": "A21",
            "selected": true,
            "valid": true
    }, ...],
    "survey_complete": true,
    "dirty": true
}
```

Clears the current draft and uses the answers set on the specified profile for
the draft instead. Any unsaved changes will be lost.

**`PUT /api/v2/projects/{project_id}/survey/draft/`**

Field    | Required | Description
-------- | -------- | ----------
profile  | Yes      | Profile id of profile to clone from

