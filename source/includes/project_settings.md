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

# Project Settings Draft

## Get the current state of the project settings draft

```http
GET /api/v2/projects/1/settings/draft/ HTTP/1.1
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
Returns the current state of the settings draft. All non-hidden answers are returned
along with whether they are selected and whether they are valid for the current
survey state. Dirty is a boolean representing whether the current draft state
is different from the last saved settings.


**`GET /api/v2/projects/{project_id}/settings/draft/`**

### Include Filters

```http
GET /api/v2/projects/1/settings/draft/?expand=answers HTTP/1.1
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
            "title": "Application Settings",
            "slug": "application-settings",
            "subsections": [{
                "id": "Q1",
                "title": "Programming Language",
                "questions": [{
                    "id": "Q21",
                    "text": "Is this a question?",
                    "description": "Help text",
                    "format": "MC" # SC for single choice, else MC
                    "mandatory": false,
                    "satisfied": true,
                    "subquestions": [...]
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

Reverts changes to the draft to the last saved state.

**`DELETE /api/v2/projects/{project_id}/project-settings/draft/`**

---

## Save the draft

This saves the current changes to the draft to the project. This may cause changes
in the applicable tasks & other content for the project as well as accepting any
other unaccepted changes to the tasks.

**`POST /api/v2/projects/{project_id}/project-settings/draft/`**

---

## Modify an answer in the draft

```http
PUT /api/v2/projects/1/settings/draft/A21/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{'selected': true}
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
Other answers may be affected because of the change due to answer implications
changing the selected state and match conditions affecting answer validity.

**`PUT /api/v2/projects/{project_id}/project-settings/draft/{answer_id}/`**

Field    | Required | Description
-------- | -------- | -----------
selected | Yes      | Selects or unselects the specified answer

---

## Clone a profile to the draft

```http
PUT /api/v2/projects/1/settings/draft/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"

{'profile': 'P21'}
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

**`PUT /api/v2/projects/{project_id}/project-settings/draft/`**

Field    | Required | Description
-------- | -------- | ----------
profile  | Yes      | Profile id of profile to clone from


