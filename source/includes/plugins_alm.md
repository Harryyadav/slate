# ALM Plugins

## Get all ALM Plugins

```http
GET /api/v2/plugins/alm/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "results": [
    {
      "id": "github",
      "name": "Github",
      "command": "sync_github",
      "alm_project": {
        "name": "alm_project",
        "label": "ALM Project:",
        "description": "",
        "field_type": "string",
        "default": null,
        "disabled": false,
        "max_length": 255,
        "required": true,
        "placeholder": null,
        "editable_on_project": true,
        "options": []
      },
      "sections": [
        {
          "id": "credentials",
          "label": "Credentials",
          "fields": [
            {
              "name": "alm_method",
              "label": "Protocol:",
              "description": "",
              "field_type": "radio",
              "default": "https",
              "disabled": false,
              "max_length": null,
              "required": false,
              "placeholder": null,
              "editable_on_project": false,
              "options": [
                {
                  "label": "https",
                  "value": "https",
                  "disabled": false
                },
                {
                  "label": "http",
                  "value": "http",
                  "disabled": false
                }
              ]
            },
            {
              "name": "server",
              "label": "Server",
              "description": "",
              "field_type": "string",
              "default": null,
              "disabled": false,
              "max_length": null,
              "required": true,
              "placeholder": "bugs.server.com",
              "editable_on_project": false,
              "options": []
            },
            {
              "name": "token",
              "label": "Token:",
              "description": "",
              "field_type": "string",
              "default": null,
              "disabled": false,
              "max_length": null,
              "required": true,
              "placeholder": "apitoken",
              "editable_on_project": false,
              "options": []
            },
            {
              "name": "github_repo_owner",
              "label": "Owner of this Github Repository:",
              "description": "",
              "field_type": "string",
              "default": null,
              "disabled": false,
              "max_length": null,
              "required": false,
              "placeholder": null,
              "editable_on_project": false,
              "options": []
            },
            {
              "name": "alm_context_root",
              "label": "Context Root",
              "description": "",
              "field_type": "string",
              "default": null,
              "disabled": false,
              "max_length": null,
              "required": false,
              "placeholder": "/",
              "editable_on_project": false,
              "options": []
            }
          ]
        },
        {
          "id": "advanced_github",
          "label": "Advanced Github Configuration",
          "fields": [
            {
              "name": "github_duplicate_label",
              "label": "Github duplicate label:",
              "description": "",
              "field_type": "string",
              "default": null,
              "disabled": false,
              "max_length": null,
              "required": false,
              "placeholder": "duplicate",
              "editable_on_project": false,
              "options": []
            },
            {
              "name": "github_issue_label",
              "label": "Github issue label:",
              "description": "",
              "field_type": "string",
              "default": null,
              "disabled": false,
              "max_length": null,
              "required": false,
              "placeholder": null,
              "editable_on_project": false,
              "options": []
            }
          ]
        },
        {
          "id": "synchronization",
          "label": "Synchronization",
          "fields": [
            {
              "name": "conflict_policy",
              "label": "Choose Authoritative Source",
              "description": "",
              "field_type": "radio",
              "default": "alm",
              "disabled": false,
              "max_length": null,
              "required": false,
              "placeholder": null,
              "editable_on_project": false,
              "options": [
                {
                  "label": "ALM",
                  "value": "alm",
                  "disabled": false
                },
                {
                  "label": "SD Elements",
                  "value": "sde",
                  "disabled": false
                },
                {
                  "label": "Last Status Change",
                  "value": "timestamp",
                  "disabled": true
                }
              ]
            },
            {
              "name": "how_tos_in_scope",
              "label": "Include code sample How-To's in task descriptions",
              "description": "",
              "field_type": "boolean",
              "default": "False",
              "disabled": false,
              "max_length": null,
              "required": false,
              "placeholder": null,
              "editable_on_project": false,
              "options": []
            }
          ]
        },
        {
          "id": "task_sync",
          "label": "Tasks to Synchronize",
          "fields": [
            {
              "name": "sde_min_priority",
              "label": "Tasks having a minimum priority",
              "description": "",
              "field_type": "select",
              "default": "7",
              "disabled": false,
              "max_length": null,
              "required": false,
              "placeholder": null,
              "editable_on_project": false,
              "options": [
                {
                  "label": "10 - High Minimum Priority to Import",
                  "value": "10",
                  "disabled": false
                },
                {
                  "label": "9",
                  "value": "9",
                  "disabled": false
                },
                {
                  "label": "8",
                  "value": "8",
                  "disabled": false
                },
                {
                  "label": "7",
                  "value": "7",
                  "disabled": false
                },
                {
                  "label": "6",
                  "value": "6",
                  "disabled": false
                },
                {
                  "label": "5 - Medium Minimum Priority to Import",
                  "value": "5",
                  "disabled": false
                },
                {
                  "label": "4",
                  "value": "4",
                  "disabled": false
                },
                {
                  "label": "3",
                  "value": "3",
                  "disabled": false
                },
                {
                  "label": "2",
                  "value": "2",
                  "disabled": false
                },
                {
                  "label": "1 - Low Minimum Priority to Import",
                  "value": "1",
                  "disabled": false
                }
              ]
            },
            {
              "name": "sde_statuses_in_scope",
              "label": "Tasks with status",
              "description": "",
              "field_type": "checkbox",
              "default": "TODO",
              "disabled": false,
              "max_length": null,
              "required": false,
              "placeholder": null,
              "editable_on_project": false,
              "options": [
                {
                  "label": "Done",
                  "value": "DONE",
                  "disabled": false
                },
                {
                  "label": "Todo",
                  "value": "TODO",
                  "disabled": false
                },
                {
                  "label": "N/A",
                  "value": "NA",
                  "disabled": false
                }
              ]
            },
            {
              "name": "alm_phases",
              "label": "Tasks having phase",
              "description": "",
              "field_type": "checkbox",
              "default": "requirements,architecture-design,development",
              "disabled": false,
              "max_length": null,
              "required": false,
              "placeholder": null,
              "editable_on_project": false,
              "options": [
                {
                  "label": "Requirements",
                  "value": "requirements",
                  "disabled": false
                },
                {
                  "label": "Architecture & Design",
                  "value": "architecture-design",
                  "disabled": false
                },
                {
                  "label": "Development",
                  "value": "development",
                  "disabled": false
                },
                {
                  "label": "Testing",
                  "value": "testing",
                  "disabled": false
                }
              ]
            },
            {
              "name": "sde_tags_filter",
              "label": "Tasks having all of the following tags (optional)",
              "description": "",
              "field_type": "string",
              "default": null,
              "disabled": false,
              "max_length": null,
              "required": false,
              "placeholder": "New Tag...",
              "editable_on_project": false,
              "options": []
            },
            {
              "name": "sde_verification_filter",
              "label": "Tasks with verification status",
              "description": "",
              "field_type": "checkbox",
              "default": "none,partial-pass,pass,fail",
              "disabled": false,
              "max_length": null,
              "required": false,
              "placeholder": null,
              "editable_on_project": false,
              "options": [
                {
                  "label": "No Status",
                  "value": "none",
                  "disabled": false
                },
                {
                  "label": "Partial Pass",
                  "value": "partial",
                  "disabled": false
                },
                {
                  "label": "Pass",
                  "value": "pass",
                  "disabled": false
                },
                {
                  "label": "Fail",
                  "value": "fail",
                  "disabled": false
                }
              ]
            }
          ]
        },
        {
          "id": "advanced_options",
          "label": "Advanced ALM Options (Beta)",
          "fields": [
            {
              "name": "title_format",
              "label": "ALM Title Format",
              "description": "Customize the issue titles created in the  ALM by choosing one of the templates below.",
              "field_type": "select",
              "default": "$task_id $title",
              "disabled": false,
              "max_length": null,
              "required": false,
              "placeholder": null,
              "editable_on_project": false,
              "options": [
                {
                  "label": "TI: Task title",
                  "value": "$task_id $title",
                  "disabled": false
                },
                {
                  "label": "[Application - Project] T1: Task title",
                  "value": "[$application - $project] $task_id $title",
                  "disabled": false
                },
                {
                  "label": "[Application - Context] T1: Task title",
                  "value": "[$application - $context] $task_id $title",
                  "disabled": false
                },
                {
                  "label": "[Context] T1: Task title",
                  "value": "[$context] $task_id $title",
                  "disabled": false
                }
              ]
            },
            {
              "name": "bypass_cert_validation",
              "label": "Bypass server certificate validation for https (insecure, only for testing purposes):",
              "description": "",
              "field_type": "boolean",
              "default": "False",
              "disabled": false,
              "max_length": null,
              "required": false,
              "placeholder": null,
              "editable_on_project": false,
              "options": []
            },
            {
              "name": "alm_context",
              "label": "Alm context:",
              "description": "Bind like projects together by providing meta information below. Set a value here if the connection has been configured to create custom issue titles containing 'Context'.",
              "field_type": "string",
              "default": null,
              "disabled": false,
              "max_length": null,
              "required": false,
              "placeholder": null,
              "editable_on_project": true,
              "options": []
            }
          ]
        }
      ]
    },
    {
      "id": "jira",
      "name": "JIRA",
      "command": "sync_jira",
      "alm_project": {
        "name": "alm_project",
        "label": "JIRA Key:",
        "description": "",
        "field_type": "string",
        "default": null,
        "disabled": false,
        "max_length": 255,
        "required": true,
        "placeholder": null,
        "editable_on_project": false,
        "options": []
      },
      "sections": [
        {
          "id": "credentials",
          "label": "Credentials",
          "fields": [
            {
              "name": "alm_method",
              "label": "Protocol:",
              "description": "",
              "field_type": "radio",
              "default": "https",
              "disabled": false,
              "max_length": null,
              "required": false,
              "placeholder": null,
              "editable_on_project": false,
              "options": [
                {
                  "label": "https",
                  "value": "https",
                  "disabled": false
                },
                {
                  "label": "http",
                  "value": "http",
                  "disabled": false
                }
              ]
            },
            {
              "name": "server",
              "label": "Server",
              "description": "",
              "field_type": "string",
              "default": null,
              "disabled": false,
              "max_length": null,
              "required": true,
              "placeholder": "bugs.server.com",
              "editable_on_project": false,
              "options": []
            },
            {
              "name": "username",
              "label": "Username:",
              "description": "",
              "field_type": "string",
              "default": null,
              "disabled": false,
              "max_length": null,
              "required": true,
              "placeholder": "username",
              "editable_on_project": false,
              "options": []
            },
            {
              "name": "password",
              "label": "Password:",
              "description": "",
              "field_type": "masked_string",
              "default": null,
              "disabled": false,
              "max_length": null,
              "required": true,
              "placeholder": "password",
              "editable_on_project": false,
              "options": []
            },
            {
              "name": "alm_context_root",
              "label": "Context Root",
              "description": "",
              "field_type": "string",
              "default": null,
              "disabled": false,
              "max_length": null,
              "required": false,
              "placeholder": "/",
              "editable_on_project": false,
              "options": []
            }
          ]
        },
        {
          "id": "advanced_jira",
          "label": "Advanced Jira Configuration",
          "fields": [
            {
              "name": "jira_version",
              "label": "Jira version:",
              "description": "",
              "field_type": "radio",
              "default": "5",
              "disabled": false,
              "max_length": null,
              "required": false,
              "placeholder": null,
              "editable_on_project": false,
              "options": [
                {
                  "label": "4",
                  "value": "4",
                  "disabled": false
                },
                {
                  "label": "5+",
                  "value": "5",
                  "disabled": false
                }
              ]
            },
            {
              "name": "jira_done_statuses",
              "label": "States which map to DONE in SD Elements:",
              "description": "",
              "field_type": "string",
              "default": null,
              "disabled": false,
              "max_length": null,
              "required": false,
              "placeholder": "Resolved,Closed",
              "editable_on_project": false,
              "options": []
            },
            {
              "name": "jira_issue_type",
              "label": "Issue Type:",
              "description": "",
              "field_type": "string",
              "default": null,
              "disabled": false,
              "max_length": null,
              "required": false,
              "placeholder": "Bug",
              "editable_on_project": false,
              "options": []
            },
            {
              "name": "jira_reopen_transition",
              "label": "Jira reopen transition:",
              "description": "",
              "field_type": "string",
              "default": null,
              "disabled": false,
              "max_length": null,
              "required": false,
              "placeholder": "Reopen Issue",
              "editable_on_project": false,
              "options": []
            },
            {
              "name": "jira_close_transition",
              "label": "Jira close transition:",
              "description": "",
              "field_type": "string",
              "default": null,
              "disabled": false,
              "max_length": null,
              "required": false,
              "placeholder": "Close Issue",
              "editable_on_project": false,
              "options": []
            }
          ]
        },
        {
          "id": "synchronization",
          "label": "Synchronization",
          "fields": [
            {
              "name": "conflict_policy",
              "label": "Choose Authoritative Source",
              "description": "",
              "field_type": "radio",
              "default": "alm",
              "disabled": false,
              "max_length": null,
              "required": false,
              "placeholder": null,
              "editable_on_project": false,
              "options": [
                {
                  "label": "ALM",
                  "value": "alm",
                  "disabled": false
                },
                {
                  "label": "SD Elements",
                  "value": "sde",
                  "disabled": false
                },
                {
                  "label": "Last Status Change",
                  "value": "timestamp",
                  "disabled": false
                }
              ]
            },
            {
              "name": "how_tos_in_scope",
              "label": "Include code sample How-To's in task descriptions",
              "description": "",
              "field_type": "boolean",
              "default": "False",
              "disabled": false,
              "max_length": null,
              "required": false,
              "placeholder": null,
              "editable_on_project": false,
              "options": []
            }
          ]
        },
        {
          "id": "task_sync",
          "label": "Tasks to Synchronize",
          "fields": [
            {
              "name": "sde_min_priority",
              "label": "Tasks having a minimum priority",
              "description": "",
              "field_type": "select",
              "default": "7",
              "disabled": false,
              "max_length": null,
              "required": false,
              "placeholder": null,
              "editable_on_project": false,
              "options": [
                {
                  "label": "10 - High Minimum Priority to Import",
                  "value": "10",
                  "disabled": false
                },
                {
                  "label": "9",
                  "value": "9",
                  "disabled": false
                },
                {
                  "label": "8",
                  "value": "8",
                  "disabled": false
                },
                {
                  "label": "7",
                  "value": "7",
                  "disabled": false
                },
                {
                  "label": "6",
                  "value": "6",
                  "disabled": false
                },
                {
                  "label": "5 - Medium Minimum Priority to Import",
                  "value": "5",
                  "disabled": false
                },
                {
                  "label": "4",
                  "value": "4",
                  "disabled": false
                },
                {
                  "label": "3",
                  "value": "3",
                  "disabled": false
                },
                {
                  "label": "2",
                  "value": "2",
                  "disabled": false
                },
                {
                  "label": "1 - Low Minimum Priority to Import",
                  "value": "1",
                  "disabled": false
                }
              ]
            },
            {
              "name": "sde_statuses_in_scope",
              "label": "Tasks with status",
              "description": "",
              "field_type": "checkbox",
              "default": "TODO",
              "disabled": false,
              "max_length": null,
              "required": false,
              "placeholder": null,
              "editable_on_project": false,
              "options": [
                {
                  "label": "Done",
                  "value": "DONE",
                  "disabled": false
                },
                {
                  "label": "Todo",
                  "value": "TODO",
                  "disabled": false
                },
                {
                  "label": "N/A",
                  "value": "NA",
                  "disabled": false
                }
              ]
            },
            {
              "name": "alm_phases",
              "label": "Tasks having phase",
              "description": "",
              "field_type": "checkbox",
              "default": "requirements,architecture-design,development",
              "disabled": false,
              "max_length": null,
              "required": false,
              "placeholder": null,
              "editable_on_project": false,
              "options": [
                {
                  "label": "Requirements",
                  "value": "requirements",
                  "disabled": false
                },
                {
                  "label": "Architecture & Design",
                  "value": "architecture-design",
                  "disabled": false
                },
                {
                  "label": "Development",
                  "value": "development",
                  "disabled": false
                },
                {
                  "label": "Testing",
                  "value": "testing",
                  "disabled": false
                }
              ]
            },
            {
              "name": "sde_tags_filter",
              "label": "Tasks having all of the following tags (optional)",
              "description": "",
              "field_type": "string",
              "default": null,
              "disabled": false,
              "max_length": null,
              "required": false,
              "placeholder": "New Tag...",
              "editable_on_project": false,
              "options": []
            },
            {
              "name": "sde_verification_filter",
              "label": "Tasks with verification status",
              "description": "",
              "field_type": "checkbox",
              "default": "none,partial-pass,pass,fail",
              "disabled": false,
              "max_length": null,
              "required": false,
              "placeholder": null,
              "editable_on_project": false,
              "options": [
                {
                  "label": "No Status",
                  "value": "none",
                  "disabled": false
                },
                {
                  "label": "Partial Pass",
                  "value": "partial",
                  "disabled": false
                },
                {
                  "label": "Pass",
                  "value": "pass",
                  "disabled": false
                },
                {
                  "label": "Fail",
                  "value": "fail",
                  "disabled": false
                }
              ]
            }
          ]
        },
        {
          "id": "advanced_options",
          "label": "Advanced ALM Options (Beta)",
          "fields": [
            {
              "name": "title_format",
              "label": "ALM Title Format",
              "description": "Customize the issue titles created in the  ALM by choosing one of the templates below.",
              "field_type": "select",
              "default": "$task_id $title",
              "disabled": false,
              "max_length": null,
              "required": false,
              "placeholder": null,
              "editable_on_project": false,
              "options": [
                {
                  "label": "TI: Task title",
                  "value": "$task_id $title",
                  "disabled": false
                },
                {
                  "label": "[Application - Project] T1: Task title",
                  "value": "[$application - $project] $task_id $title",
                  "disabled": false
                },
                {
                  "label": "[Application - Context] T1: Task title",
                  "value": "[$application - $context] $task_id $title",
                  "disabled": false
                },
                {
                  "label": "[Context] T1: Task title",
                  "value": "[$context] $task_id $title",
                  "disabled": false
                }
              ]
            },
            {
              "name": "bypass_cert_validation",
              "label": "Bypass server certificate validation for https (insecure, only for testing purposes):",
              "description": "",
              "field_type": "boolean",
              "default": "False",
              "disabled": false,
              "max_length": null,
              "required": false,
              "placeholder": null,
              "editable_on_project": false,
              "options": []
            },
            {
              "name": "alm_issue_label",
              "label": "Issue Labels / Tags:",
              "description": "",
              "field_type": "string",
              "default": null,
              "disabled": false,
              "max_length": null,
              "required": false,
              "placeholder": "SD-Elements",
              "editable_on_project": false,
              "options": []
            },
            {
              "name": "alm_parent_issue",
              "label": "Alm parent issue:",
              "description": "Set the parent issue to indicate that tasks from SD Elements should be imported as children of the parent issue. (The nomenclature between ALMs may differ: sub-tasks, sub-issues, child tasks, etc.) Please get in touch with SD Elements support for help configuring this field.",
              "field_type": "string",
              "default": null,
              "disabled": false,
              "max_length": null,
              "required": false,
              "placeholder": null,
              "editable_on_project": true,
              "options": []
            },
            {
              "name": "alm_priority_map",
              "label": "Custom Priority Mapping (JSON dictionary):",
              "description": "If you need to set up a custom priority mapping please get in touch with SD Elements support for help on filling in the following field.",
              "field_type": "string",
              "default": null,
              "disabled": false,
              "max_length": 1024,
              "required": false,
              "placeholder": null,
              "editable_on_project": false,
              "options": []
            },
            {
              "name": "alm_custom_fields",
              "label": "Custom Priority Mapping (JSON dictionary):",
              "description": "If you have customized your ALM you may need to fill in the following field. Please get in touch with SD Elements support for help.\nField values can use the following dynamic macros. Their values change depending on the project being synced.\n${application} - Application name\n${project} - Project name\n${context} - Value of Alm Context in an integration setup\n",
              "field_type": "string",
              "default": null,
              "disabled": false,
              "max_length": 1024,
              "required": false,
              "placeholder": null,
              "editable_on_project": true,
              "options": []
            },
            {
              "name": "alm_custom_lookup_fields",
              "label": "Custom Lookup Fields (JSON dictionary):",
              "description": "In addition to a task's title, use the following fields and values whenever searching for a task in another ALM project. Field values listed below may also need to be added as custom fields, above or during project integration setup, if they are not automatically filled.\nField values can use the following dynamic macros. Their values change depending on the project being synced.\n${application} - Application name\n${project} - Project name\n${context} - Value of Alm Context in an integration setup\n",
              "field_type": "string",
              "default": null,
              "disabled": false,
              "max_length": 1024,
              "required": false,
              "placeholder": null,
              "editable_on_project": false,
              "options": []
            },
            {
              "name": "alm_context",
              "label": "Alm context:",
              "description": "Bind like projects together by providing meta information below. Set a value here if the connection has been configured to create custom issue titles containing 'Context'.",
              "field_type": "string",
              "default": null,
              "disabled": false,
              "max_length": null,
              "required": false,
              "placeholder": null,
              "editable_on_project": true,
              "options": []
            }
          ]
        }
      ]
    },
    {
      "id": "rational",
      "name": "IBM Rational Team Concert",
      "command": "sync_rational",
      "alm_project": {
        "name": "alm_project",
        "label": "ALM Project:",
        "description": "",
        "field_type": "string",
        "default": null,
        "disabled": false,
        "max_length": 255,
        "required": true,
        "placeholder": null,
        "editable_on_project": true,
        "options": []
      },
      "sections": [
        {
          "id": "credentials",
          "label": "Credentials",
          "fields": [
            {
              "name": "alm_method",
              "label": "Protocol:",
              "description": "",
              "field_type": "radio",
              "default": "https",
              "disabled": false,
              "max_length": null,
              "required": false,
              "placeholder": null,
              "editable_on_project": false,
              "options": [
                {
                  "label": "https",
                  "value": "https",
                  "disabled": false
                },
                {
                  "label": "http",
                  "value": "http",
                  "disabled": false
                }
              ]
            },
            {
              "name": "server",
              "label": "Server",
              "description": "",
              "field_type": "string",
              "default": null,
              "disabled": false,
              "max_length": null,
              "required": true,
              "placeholder": "bugs.server.com",
              "editable_on_project": false,
              "options": []
            },
            {
              "name": "username",
              "label": "Username:",
              "description": "",
              "field_type": "string",
              "default": null,
              "disabled": false,
              "max_length": null,
              "required": true,
              "placeholder": "username",
              "editable_on_project": false,
              "options": []
            },
            {
              "name": "password",
              "label": "Password:",
              "description": "",
              "field_type": "masked_string",
              "default": null,
              "disabled": false,
              "max_length": null,
              "required": true,
              "placeholder": "password",
              "editable_on_project": false,
              "options": []
            },
            {
              "name": "alm_context_root",
              "label": "Context Root",
              "description": "",
              "field_type": "string",
              "default": null,
              "disabled": false,
              "max_length": null,
              "required": false,
              "placeholder": "/",
              "editable_on_project": false,
              "options": []
            }
          ]
        },
        {
          "id": "advanced_rational",
          "label": "Advanced Rational Configuration",
          "fields": [
            {
              "name": "alm_issue_type",
              "label": "Issue Type:",
              "description": "",
              "field_type": "string",
              "default": null,
              "disabled": false,
              "max_length": null,
              "required": false,
              "placeholder": "task",
              "editable_on_project": false,
              "options": []
            },
            {
              "name": "rational_done_statuses",
              "label": "States which map to DONE in SD Elements:",
              "description": "",
              "field_type": "string",
              "default": null,
              "disabled": false,
              "max_length": null,
              "required": false,
              "placeholder": "Completed,Done",
              "editable_on_project": false,
              "options": []
            }
          ]
        },
        {
          "id": "synchronization",
          "label": "Synchronization",
          "fields": [
            {
              "name": "conflict_policy",
              "label": "Choose Authoritative Source",
              "description": "",
              "field_type": "radio",
              "default": "alm",
              "disabled": true,
              "max_length": null,
              "required": false,
              "placeholder": null,
              "editable_on_project": false,
              "options": [
                {
                  "label": "ALM",
                  "value": "alm",
                  "disabled": true
                },
                {
                  "label": "SD Elements",
                  "value": "sde",
                  "disabled": true
                },
                {
                  "label": "Last Status Change",
                  "value": "timestamp",
                  "disabled": true
                }
              ]
            },
            {
              "name": "how_tos_in_scope",
              "label": "Include code sample How-To's in task descriptions",
              "description": "",
              "field_type": "boolean",
              "default": "False",
              "disabled": false,
              "max_length": null,
              "required": false,
              "placeholder": null,
              "editable_on_project": false,
              "options": []
            }
          ]
        },
        {
          "id": "task_sync",
          "label": "Tasks to Synchronize",
          "fields": [
            {
              "name": "sde_min_priority",
              "label": "Tasks having a minimum priority",
              "description": "",
              "field_type": "select",
              "default": "7",
              "disabled": false,
              "max_length": null,
              "required": false,
              "placeholder": null,
              "editable_on_project": false,
              "options": [
                {
                  "label": "10 - High Minimum Priority to Import",
                  "value": "10",
                  "disabled": false
                },
                {
                  "label": "9",
                  "value": "9",
                  "disabled": false
                },
                {
                  "label": "8",
                  "value": "8",
                  "disabled": false
                },
                {
                  "label": "7",
                  "value": "7",
                  "disabled": false
                },
                {
                  "label": "6",
                  "value": "6",
                  "disabled": false
                },
                {
                  "label": "5 - Medium Minimum Priority to Import",
                  "value": "5",
                  "disabled": false
                },
                {
                  "label": "4",
                  "value": "4",
                  "disabled": false
                },
                {
                  "label": "3",
                  "value": "3",
                  "disabled": false
                },
                {
                  "label": "2",
                  "value": "2",
                  "disabled": false
                },
                {
                  "label": "1 - Low Minimum Priority to Import",
                  "value": "1",
                  "disabled": false
                }
              ]
            },
            {
              "name": "sde_statuses_in_scope",
              "label": "Tasks with status",
              "description": "",
              "field_type": "checkbox",
              "default": "TODO",
              "disabled": false,
              "max_length": null,
              "required": false,
              "placeholder": null,
              "editable_on_project": false,
              "options": [
                {
                  "label": "Done",
                  "value": "DONE",
                  "disabled": false
                },
                {
                  "label": "Todo",
                  "value": "TODO",
                  "disabled": false
                },
                {
                  "label": "N/A",
                  "value": "NA",
                  "disabled": false
                }
              ]
            },
            {
              "name": "alm_phases",
              "label": "Tasks having phase",
              "description": "",
              "field_type": "checkbox",
              "default": "requirements,architecture-design,development",
              "disabled": false,
              "max_length": null,
              "required": false,
              "placeholder": null,
              "editable_on_project": false,
              "options": [
                {
                  "label": "Requirements",
                  "value": "requirements",
                  "disabled": false
                },
                {
                  "label": "Architecture & Design",
                  "value": "architecture-design",
                  "disabled": false
                },
                {
                  "label": "Development",
                  "value": "development",
                  "disabled": false
                },
                {
                  "label": "Testing",
                  "value": "testing",
                  "disabled": false
                }
              ]
            },
            {
              "name": "sde_tags_filter",
              "label": "Tasks having all of the following tags (optional)",
              "description": "",
              "field_type": "string",
              "default": null,
              "disabled": false,
              "max_length": null,
              "required": false,
              "placeholder": "New Tag...",
              "editable_on_project": false,
              "options": []
            },
            {
              "name": "sde_verification_filter",
              "label": "Tasks with verification status",
              "description": "",
              "field_type": "checkbox",
              "default": "none,partial-pass,pass,fail",
              "disabled": false,
              "max_length": null,
              "required": false,
              "placeholder": null,
              "editable_on_project": false,
              "options": [
                {
                  "label": "No Status",
                  "value": "none",
                  "disabled": false
                },
                {
                  "label": "Partial Pass",
                  "value": "partial",
                  "disabled": false
                },
                {
                  "label": "Pass",
                  "value": "pass",
                  "disabled": false
                },
                {
                  "label": "Fail",
                  "value": "fail",
                  "disabled": false
                }
              ]
            }
          ]
        },
        {
          "id": "advanced_options",
          "label": "Advanced ALM Options (Beta)",
          "fields": [
            {
              "name": "title_format",
              "label": "ALM Title Format",
              "description": "Customize the issue titles created in the  ALM by choosing one of the templates below.",
              "field_type": "select",
              "default": "$task_id $title",
              "disabled": false,
              "max_length": null,
              "required": false,
              "placeholder": null,
              "editable_on_project": false,
              "options": [
                {
                  "label": "TI: Task title",
                  "value": "$task_id $title",
                  "disabled": false
                },
                {
                  "label": "[Application - Project] T1: Task title",
                  "value": "[$application - $project] $task_id $title",
                  "disabled": false
                },
                {
                  "label": "[Application - Context] T1: Task title",
                  "value": "[$application - $context] $task_id $title",
                  "disabled": false
                },
                {
                  "label": "[Context] T1: Task title",
                  "value": "[$context] $task_id $title",
                  "disabled": false
                }
              ]
            },
            {
              "name": "bypass_cert_validation",
              "label": "Bypass server certificate validation for https (insecure, only for testing purposes):",
              "description": "",
              "field_type": "boolean",
              "default": "False",
              "disabled": false,
              "max_length": null,
              "required": false,
              "placeholder": null,
              "editable_on_project": false,
              "options": []
            },
            {
              "name": "alm_issue_label",
              "label": "Issue Labels / Tags:",
              "description": "",
              "field_type": "string",
              "default": null,
              "disabled": false,
              "max_length": null,
              "required": false,
              "placeholder": "SD-Elements",
              "editable_on_project": false,
              "options": []
            },
            {
              "name": "alm_priority_map",
              "label": "Custom Priority Mapping (JSON dictionary):",
              "description": "If you need to set up a custom priority mapping please get in touch with SD Elements support for help on filling in the following field.",
              "field_type": "string",
              "default": null,
              "disabled": false,
              "max_length": 1024,
              "required": false,
              "placeholder": null,
              "editable_on_project": false,
              "options": []
            },
            {
              "name": "alm_custom_fields",
              "label": "Custom Fields Mapping (JSON dictionary):",
              "description": "If you have customized your ALM you may need to fill in the following field. Please get in touch with SD Elements support for help.\nField values can use the following dynamic macros. Their values change depending on the project being synced.\n${application} - Application name\n${project} - Project name\n${context} - Value of Alm Context in an integration setup\n",
              "field_type": "string",
              "default": null,
              "disabled": false,
              "max_length": 1024,
              "required": false,
              "placeholder": null,
              "editable_on_project": true,
              "options": []
            },
            {
              "name": "alm_context",
              "label": "Alm context:",
              "description": "Bind like projects together by providing meta information below. Set a value here if the connection has been configured to create custom issue titles containing 'Context'.",
              "field_type": "string",
              "default": null,
              "disabled": false,
              "max_length": null,
              "required": false,
              "placeholder": null,
              "editable_on_project": true,
              "options": []
            }
          ]
        }
      ]
    },
    {
      "id": "mingle",
      "name": "Mingle",
      "command": "sync_mingle",
      "alm_project": {
        "name": "alm_project",
        "label": "Mingle Identifier:",
        "description": "",
        "field_type": "string",
        "default": null,
        "disabled": false,
        "max_length": 255,
        "required": true,
        "placeholder": null,
        "editable_on_project": true,
        "options": []
      },
      "sections": [
        {
          "id": "credentials",
          "label": "Credentials",
          "fields": [
            {
              "name": "alm_method",
              "label": "Protocol:",
              "description": "",
              "field_type": "radio",
              "default": "https",
              "disabled": false,
              "max_length": null,
              "required": false,
              "placeholder": null,
              "editable_on_project": false,
              "options": [
                {
                  "label": "https",
                  "value": "https",
                  "disabled": false
                },
                {
                  "label": "http",
                  "value": "http",
                  "disabled": false
                }
              ]
            },
            {
              "name": "server",
              "label": "Server",
              "description": "",
              "field_type": "string",
              "default": null,
              "disabled": false,
              "max_length": null,
              "required": true,
              "placeholder": "bugs.server.com",
              "editable_on_project": false,
              "options": []
            },
            {
              "name": "username",
              "label": "Username:",
              "description": "",
              "field_type": "string",
              "default": null,
              "disabled": false,
              "max_length": null,
              "required": true,
              "placeholder": "username",
              "editable_on_project": false,
              "options": []
            },
            {
              "name": "password",
              "label": "Password:",
              "description": "",
              "field_type": "masked_string",
              "default": null,
              "disabled": false,
              "max_length": null,
              "required": true,
              "placeholder": "password",
              "editable_on_project": false,
              "options": []
            },
            {
              "name": "alm_context_root",
              "label": "Context Root",
              "description": "",
              "field_type": "string",
              "default": null,
              "disabled": false,
              "max_length": null,
              "required": false,
              "placeholder": "/",
              "editable_on_project": false,
              "options": []
            }
          ]
        },
        {
          "id": "advanced_mingle",
          "label": "Advanced Mingle Configuration",
          "fields": [
            {
              "name": "mingle_card_type",
              "label": "Card Type:",
              "description": "",
              "field_type": "string",
              "default": null,
              "disabled": false,
              "max_length": null,
              "required": false,
              "placeholder": "Story",
              "editable_on_project": false,
              "options": []
            },
            {
              "name": "mingle_done_statuses",
              "label": "States which map to DONE in SD Elements:",
              "description": "",
              "field_type": "string",
              "default": null,
              "disabled": false,
              "max_length": null,
              "required": false,
              "placeholder": "Signoff,Accepted",
              "editable_on_project": false,
              "options": []
            },
            {
              "name": "mingle_new_status",
              "label": "Open a card in Mingle in the following state:",
              "description": "",
              "field_type": "string",
              "default": null,
              "disabled": false,
              "max_length": null,
              "required": false,
              "placeholder": "New",
              "editable_on_project": false,
              "options": []
            }
          ]
        },
        {
          "id": "synchronization",
          "label": "Synchronization",
          "fields": [
            {
              "name": "conflict_policy",
              "label": "Choose Authoritative Source",
              "description": "",
              "field_type": "radio",
              "default": "alm",
              "disabled": false,
              "max_length": null,
              "required": false,
              "placeholder": null,
              "editable_on_project": false,
              "options": [
                {
                  "label": "ALM",
                  "value": "alm",
                  "disabled": false
                },
                {
                  "label": "SD Elements",
                  "value": "sde",
                  "disabled": false
                },
                {
                  "label": "Last Status Change",
                  "value": "timestamp",
                  "disabled": true
                }
              ]
            },
            {
              "name": "how_tos_in_scope",
              "label": "Include code sample How-To's in task descriptions",
              "description": "",
              "field_type": "boolean",
              "default": "False",
              "disabled": false,
              "max_length": null,
              "required": false,
              "placeholder": null,
              "editable_on_project": false,
              "options": []
            }
          ]
        },
        {
          "id": "task_sync",
          "label": "Tasks to Synchronize",
          "fields": [
            {
              "name": "sde_min_priority",
              "label": "Tasks having a minimum priority",
              "description": "",
              "field_type": "select",
              "default": "7",
              "disabled": false,
              "max_length": null,
              "required": false,
              "placeholder": null,
              "editable_on_project": false,
              "options": [
                {
                  "label": "10 - High Minimum Priority to Import",
                  "value": "10",
                  "disabled": false
                },
                {
                  "label": "9",
                  "value": "9",
                  "disabled": false
                },
                {
                  "label": "8",
                  "value": "8",
                  "disabled": false
                },
                {
                  "label": "7",
                  "value": "7",
                  "disabled": false
                },
                {
                  "label": "6",
                  "value": "6",
                  "disabled": false
                },
                {
                  "label": "5 - Medium Minimum Priority to Import",
                  "value": "5",
                  "disabled": false
                },
                {
                  "label": "4",
                  "value": "4",
                  "disabled": false
                },
                {
                  "label": "3",
                  "value": "3",
                  "disabled": false
                },
                {
                  "label": "2",
                  "value": "2",
                  "disabled": false
                },
                {
                  "label": "1 - Low Minimum Priority to Import",
                  "value": "1",
                  "disabled": false
                }
              ]
            },
            {
              "name": "sde_statuses_in_scope",
              "label": "Tasks with status",
              "description": "",
              "field_type": "checkbox",
              "default": "TODO",
              "disabled": false,
              "max_length": null,
              "required": false,
              "placeholder": null,
              "editable_on_project": false,
              "options": [
                {
                  "label": "Done",
                  "value": "DONE",
                  "disabled": false
                },
                {
                  "label": "Todo",
                  "value": "TODO",
                  "disabled": false
                },
                {
                  "label": "N/A",
                  "value": "NA",
                  "disabled": false
                }
              ]
            },
            {
              "name": "alm_phases",
              "label": "Tasks having phase",
              "description": "",
              "field_type": "checkbox",
              "default": "requirements,architecture-design,development",
              "disabled": false,
              "max_length": null,
              "required": false,
              "placeholder": null,
              "editable_on_project": false,
              "options": [
                {
                  "label": "Requirements",
                  "value": "requirements",
                  "disabled": false
                },
                {
                  "label": "Architecture & Design",
                  "value": "architecture-design",
                  "disabled": false
                },
                {
                  "label": "Development",
                  "value": "development",
                  "disabled": false
                },
                {
                  "label": "Testing",
                  "value": "testing",
                  "disabled": false
                }
              ]
            },
            {
              "name": "sde_tags_filter",
              "label": "Tasks having all of the following tags (optional)",
              "description": "",
              "field_type": "string",
              "default": null,
              "disabled": false,
              "max_length": null,
              "required": false,
              "placeholder": "New Tag...",
              "editable_on_project": false,
              "options": []
            },
            {
              "name": "sde_verification_filter",
              "label": "Tasks with verification status",
              "description": "",
              "field_type": "checkbox",
              "default": "none,partial-pass,pass,fail",
              "disabled": false,
              "max_length": null,
              "required": false,
              "placeholder": null,
              "editable_on_project": false,
              "options": [
                {
                  "label": "No Status",
                  "value": "none",
                  "disabled": false
                },
                {
                  "label": "Partial Pass",
                  "value": "partial",
                  "disabled": false
                },
                {
                  "label": "Pass",
                  "value": "pass",
                  "disabled": false
                },
                {
                  "label": "Fail",
                  "value": "fail",
                  "disabled": false
                }
              ]
            }
          ]
        },
        {
          "id": "advanced_options",
          "label": "Advanced ALM Options (Beta)",
          "fields": [
            {
              "name": "alm_context",
              "label": "Alm context:",
              "description": "Bind like projects together by providing meta information below. Set a value here if the connection has been configured to create custom issue titles containing 'Context'.",
              "field_type": "string",
              "default": null,
              "disabled": false,
              "max_length": null,
              "required": false,
              "placeholder": null,
              "editable_on_project": true,
              "options": []
            }
          ]
        }
      ]
    }
  ]
}

```

This endpoint retrieves a list of ALM Integration Plugin resources.


## Get a Specific ALM Plugin

```http
GET /api/v2/plugins/alm/mingle/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "id": "mingle",
  "name": "Mingle",
  "command": "sync_mingle",
  "alm_project": {
    "name": "alm_project",
    "label": "Mingle Identifier:",
    "description": "",
    "field_type": "string",
    "default": null,
    "disabled": false,
    "max_length": 255,
    "required": true,
    "placeholder": null,
    "editable_on_project": true,
    "options": []
  },
  "sections": [
    {
      "id": "credentials",
      "label": "Credentials",
      "fields": [
        {
          "name": "alm_method",
          "label": "Protocol:",
          "description": "",
          "field_type": "radio",
          "default": "https",
          "disabled": false,
          "max_length": null,
          "required": false,
          "placeholder": null,
          "editable_on_project": false,
          "options": [
            {
              "label": "https",
              "value": "https",
              "disabled": false
            },
            {
              "label": "http",
              "value": "http",
              "disabled": false
            }
          ]
        },
        {
          "name": "server",
          "label": "Server",
          "description": "",
          "field_type": "string",
          "default": null,
          "disabled": false,
          "max_length": null,
          "required": true,
          "placeholder": "bugs.server.com",
          "editable_on_project": false,
          "options": []
        },
        {
          "name": "username",
          "label": "Username:",
          "description": "",
          "field_type": "string",
          "default": null,
          "disabled": false,
          "max_length": null,
          "required": true,
          "placeholder": "username",
          "editable_on_project": false,
          "options": []
        },
        {
          "name": "password",
          "label": "Password:",
          "description": "",
          "field_type": "masked_string",
          "default": null,
          "disabled": false,
          "max_length": null,
          "required": true,
          "placeholder": "password",
          "editable_on_project": false,
          "options": []
        },
        {
          "name": "alm_context_root",
          "label": "Context Root",
          "description": "",
          "field_type": "string",
          "default": null,
          "disabled": false,
          "max_length": null,
          "required": false,
          "placeholder": "/",
          "editable_on_project": false,
          "options": []
        }
      ]
    },
    {
      "id": "advanced_mingle",
      "label": "Advanced Mingle Configuration",
      "fields": [
        {
          "name": "mingle_card_type",
          "label": "Card Type:",
          "description": "",
          "field_type": "string",
          "default": null,
          "disabled": false,
          "max_length": null,
          "required": false,
          "placeholder": "Story",
          "editable_on_project": false,
          "options": []
        },
        {
          "name": "mingle_done_statuses",
          "label": "States which map to DONE in SD Elements:",
          "description": "",
          "field_type": "string",
          "default": null,
          "disabled": false,
          "max_length": null,
          "required": false,
          "placeholder": "Signoff,Accepted",
          "editable_on_project": false,
          "options": []
        },
        {
          "name": "mingle_new_status",
          "label": "Open a card in Mingle in the following state:",
          "description": "",
          "field_type": "string",
          "default": null,
          "disabled": false,
          "max_length": null,
          "required": false,
          "placeholder": "New",
          "editable_on_project": false,
          "options": []
        }
      ]
    },
    {
      "id": "synchronization",
      "label": "Synchronization",
      "fields": [
        {
          "name": "conflict_policy",
          "label": "Choose Authoritative Source",
          "description": "",
          "field_type": "radio",
          "default": "alm",
          "disabled": false,
          "max_length": null,
          "required": false,
          "placeholder": null,
          "editable_on_project": false,
          "options": [
            {
              "label": "ALM",
              "value": "alm",
              "disabled": false
            },
            {
              "label": "SD Elements",
              "value": "sde",
              "disabled": false
            },
            {
              "label": "Last Status Change",
              "value": "timestamp",
              "disabled": true
            }
          ]
        },
        {
          "name": "how_tos_in_scope",
          "label": "Include code sample How-To's in task descriptions",
          "description": "",
          "field_type": "boolean",
          "default": "False",
          "disabled": false,
          "max_length": null,
          "required": false,
          "placeholder": null,
          "editable_on_project": false,
          "options": []
        }
      ]
    },
    {
      "id": "task_sync",
      "label": "Tasks to Synchronize",
      "fields": [
        {
          "name": "sde_min_priority",
          "label": "Tasks having a minimum priority",
          "description": "",
          "field_type": "select",
          "default": "7",
          "disabled": false,
          "max_length": null,
          "required": false,
          "placeholder": null,
          "editable_on_project": false,
          "options": [
            {
              "label": "10 - High Minimum Priority to Import",
              "value": "10",
              "disabled": false
            },
            {
              "label": "9",
              "value": "9",
              "disabled": false
            },
            {
              "label": "8",
              "value": "8",
              "disabled": false
            },
            {
              "label": "7",
              "value": "7",
              "disabled": false
            },
            {
              "label": "6",
              "value": "6",
              "disabled": false
            },
            {
              "label": "5 - Medium Minimum Priority to Import",
              "value": "5",
              "disabled": false
            },
            {
              "label": "4",
              "value": "4",
              "disabled": false
            },
            {
              "label": "3",
              "value": "3",
              "disabled": false
            },
            {
              "label": "2",
              "value": "2",
              "disabled": false
            },
            {
              "label": "1 - Low Minimum Priority to Import",
              "value": "1",
              "disabled": false
            }
          ]
        },
        {
          "name": "sde_statuses_in_scope",
          "label": "Tasks with status",
          "description": "",
          "field_type": "checkbox",
          "default": "TODO",
          "disabled": false,
          "max_length": null,
          "required": false,
          "placeholder": null,
          "editable_on_project": false,
          "options": [
            {
              "label": "Done",
              "value": "DONE",
              "disabled": false
            },
            {
              "label": "Todo",
              "value": "TODO",
              "disabled": false
            },
            {
              "label": "N/A",
              "value": "NA",
              "disabled": false
            }
          ]
        },
        {
          "name": "alm_phases",
          "label": "Tasks having phase",
          "description": "",
          "field_type": "checkbox",
          "default": "requirements,architecture-design,development",
          "disabled": false,
          "max_length": null,
          "required": false,
          "placeholder": null,
          "editable_on_project": false,
          "options": [
            {
              "label": "Requirements",
              "value": "requirements",
              "disabled": false
            },
            {
              "label": "Architecture & Design",
              "value": "architecture-design",
              "disabled": false
            },
            {
              "label": "Development",
              "value": "development",
              "disabled": false
            },
            {
              "label": "Testing",
              "value": "testing",
              "disabled": false
            }
          ]
        },
        {
          "name": "sde_tags_filter",
          "label": "Tasks having all of the following tags (optional)",
          "description": "",
          "field_type": "string",
          "default": null,
          "disabled": false,
          "max_length": null,
          "required": false,
          "placeholder": "New Tag...",
          "editable_on_project": false,
          "options": []
        },
        {
          "name": "sde_verification_filter",
          "label": "Tasks with verification status",
          "description": "",
          "field_type": "checkbox",
          "default": "none,partial-pass,pass,fail",
          "disabled": false,
          "max_length": null,
          "required": false,
          "placeholder": null,
          "editable_on_project": false,
          "options": [
            {
              "label": "No Status",
              "value": "none",
              "disabled": false
            },
            {
              "label": "Partial Pass",
              "value": "partial",
              "disabled": false
            },
            {
              "label": "Pass",
              "value": "pass",
              "disabled": false
            },
            {
              "label": "Fail",
              "value": "fail",
              "disabled": false
            }
          ]
        }
      ]
    },
    {
      "id": "advanced_options",
      "label": "Advanced ALM Options (Beta)",
      "fields": [
        {
          "name": "alm_context",
          "label": "Alm context:",
          "description": "Bind like projects together by providing meta information below. Set a value here if the connection has been configured to create custom issue titles containing 'Context'.",
          "field_type": "string",
          "default": null,
          "disabled": false,
          "max_length": null,
          "required": false,
          "placeholder": null,
          "editable_on_project": true,
          "options": []
        }
      ]
    }
  ]
}
```

This endpoint retrieves a specific ALM Integration Plugin resource, as specified by the id parameter.

**`GET /api/v2/phases/{alm_id}/`**

### URL Parameters

Parameter  | Description
---------- | ---------------
alm_id     | The id of the alm plugin to retrieve
