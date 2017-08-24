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
            "id":"trac",
            "name":"Trac",
            "short_name":"Trac",
            "command":"sync_trac",
            "sections":[
                {
                    "label":null,
                    "optional":false,
                    "fields":[
                        {
                            "name":"alm_project",
                            "label":"Trac Milestone",
                            "description":"",
                            "field_type":"string",
                            "default":null,
                            "readonly":false,
                            "max_length":255,
                            "required":true,
                            "deprecated":false,
                            "placeholder":null,
                            "scope":[
                                "project"
                            ],
                            "help_text":"",
                            "options":[

                            ]
                        }
                    ]
                },
                {
                    "label":"Connection Details",
                    "optional":false,
                    "fields":[
                        {
                            "name":"alm_method",
                            "label":"Protocol",
                            "description":"",
                            "field_type":"radio",
                            "default":"https",
                            "readonly":false,
                            "max_length":null,
                            "required":true,
                            "deprecated":false,
                            "placeholder":"https",
                            "scope":[
                                "system"
                            ],
                            "help_text":"",
                            "options":[
                                {
                                    "label":"https",
                                    "value":"https",
                                    "disabled":false
                                },
                                {
                                    "label":"http",
                                    "value":"http",
                                    "disabled":false
                                }
                            ]
                        },
                        {
                            "name":"alm_server",
                            "label":"Server",
                            "description":"",
                            "field_type":"string",
                            "default":null,
                            "readonly":false,
                            "max_length":null,
                            "required":true,
                            "deprecated":false,
                            "placeholder":"bugs.server.com",
                            "scope":[
                                "system"
                            ],
                            "help_text":"",
                            "options":[

                            ]
                        },
                        {
                            "name":"alm_context_root",
                            "label":"Context Root",
                            "description":"",
                            "field_type":"string",
                            "default":null,
                            "readonly":false,
                            "max_length":null,
                            "required":false,
                            "deprecated":false,
                            "placeholder":"/",
                            "scope":[
                                "system"
                            ],
                            "help_text":"Normally left empty unless the service is installed at a non-standard location",
                            "options":[

                            ]
                        }
                    ]
                },
                {
                    "label":"Credentials",
                    "optional":false,
                    "fields":[
                        {
                            "name":"alm_user",
                            "label":"Trac Username",
                            "description":"",
                            "field_type":"string",
                            "default":null,
                            "readonly":false,
                            "max_length":null,
                            "required":true,
                            "deprecated":false,
                            "placeholder":null,
                            "scope":[
                                "system"
                            ],
                            "help_text":"",
                            "options":[

                            ]
                        },
                        {
                            "name":"alm_pass",
                            "label":"Trac Password",
                            "description":"",
                            "field_type":"masked_string",
                            "default":null,
                            "readonly":false,
                            "max_length":null,
                            "required":true,
                            "deprecated":false,
                            "placeholder":null,
                            "scope":[
                                "system"
                            ],
                            "help_text":"",
                            "options":[

                            ]
                        }
                    ]
                },
                {
                    "label":"Synchronization",
                    "optional":true,
                    "fields":[
                        {
                            "name":"conflict_policy",
                            "label":"Choose Authoritative Source",
                            "description":"",
                            "field_type":"radio",
                            "default":"alm",
                            "readonly":false,
                            "max_length":null,
                            "required":false,
                            "deprecated":false,
                            "placeholder":"alm",
                            "scope":[
                                "system"
                            ],
                            "help_text":"The de facto source for the status of an SD Elements task",
                            "options":[
                                {
                                    "label":"Trac",
                                    "value":"alm",
                                    "disabled":false
                                },
                                {
                                    "label":"SD Elements",
                                    "value":"sde",
                                    "disabled":false
                                },
                                {
                                    "label":"Last Status Change",
                                    "value":"timestamp",
                                    "disabled":true
                                }
                            ]
                        },
                        {
                            "name":"how_tos_in_scope",
                            "label":"Include code sample How-To's in task descriptions",
                            "description":"",
                            "field_type":"boolean",
                            "default":false,
                            "readonly":false,
                            "max_length":null,
                            "required":false,
                            "deprecated":false,
                            "placeholder":"False",
                            "scope":[
                                "system"
                            ],
                            "help_text":"",
                            "options":[

                            ]
                        }
                    ]
                },
                {
                    "label":"Tasks to Synchronize",
                    "optional":true,
                    "fields":[
                        {
                            "name":"sde_min_priority",
                            "label":"Tasks having a minimum priority",
                            "description":"",
                            "field_type":"select",
                            "default":"7",
                            "readonly":false,
                            "max_length":null,
                            "required":false,
                            "deprecated":false,
                            "placeholder":"7",
                            "scope":[
                                "system"
                            ],
                            "help_text":"",
                            "options":[
                                {
                                    "label":"10 - High Minimum Priority to Import",
                                    "value":"10",
                                    "disabled":false
                                },
                                {
                                    "label":"9",
                                    "value":"9",
                                    "disabled":false
                                },
                                {
                                    "label":"8",
                                    "value":"8",
                                    "disabled":false
                                },
                                {
                                    "label":"7",
                                    "value":"7",
                                    "disabled":false
                                },
                                {
                                    "label":"6",
                                    "value":"6",
                                    "disabled":false
                                },
                                {
                                    "label":"5 - Medium Minimum Priority to Import",
                                    "value":"5",
                                    "disabled":false
                                },
                                {
                                    "label":"4",
                                    "value":"4",
                                    "disabled":false
                                },
                                {
                                    "label":"3",
                                    "value":"3",
                                    "disabled":false
                                },
                                {
                                    "label":"2",
                                    "value":"2",
                                    "disabled":false
                                },
                                {
                                    "label":"1 - Low Minimum Priority to Import",
                                    "value":"1",
                                    "disabled":false
                                }
                            ]
                        },
                        {
                            "name":"sde_statuses_in_scope",
                            "label":"Tasks with status",
                            "description":"",
                            "field_type":"checkbox",
                            "default":"TODO",
                            "readonly":false,
                            "max_length":null,
                            "required":false,
                            "deprecated":false,
                            "placeholder":"TODO",
                            "scope":[
                                "system"
                            ],
                            "help_text":"",
                            "options":[
                                {
                                    "label":"Done",
                                    "value":"DONE",
                                    "disabled":false
                                },
                                {
                                    "label":"Todo",
                                    "value":"TODO",
                                    "disabled":false
                                },
                                {
                                    "label":"N/A",
                                    "value":"NA",
                                    "disabled":false
                                }
                            ]
                        },
                        {
                            "name":"alm_phases",
                            "label":"Tasks having phase",
                            "description":"",
                            "field_type":"checkbox",
                            "default":"requirements,architecture-design,development",
                            "readonly":false,
                            "max_length":null,
                            "required":false,
                            "deprecated":false,
                            "placeholder":"requirements,architecture-design,development",
                            "scope":[
                                "system"
                            ],
                            "help_text":"",
                            "options":[
                                {
                                    "label":"Requirements",
                                    "value":"requirements",
                                    "disabled":false
                                },
                                {
                                    "label":"Architecture & Design",
                                    "value":"architecture-design",
                                    "disabled":false
                                },
                                {
                                    "label":"Development",
                                    "value":"development",
                                    "disabled":false
                                },
                                {
                                    "label":"Testing",
                                    "value":"testing",
                                    "disabled":false
                                }
                            ]
                        },
                        {
                            "name":"sde_tags_filter",
                            "label":"Tasks having all of the following tags",
                            "description":"",
                            "field_type":"string",
                            "default":null,
                            "readonly":false,
                            "max_length":null,
                            "required":false,
                            "deprecated":false,
                            "placeholder":"tag1,tag2",
                            "scope":[
                                "system"
                            ],
                            "help_text":"",
                            "options":[

                            ]
                        },
                        {
                            "name":"sde_verification_filter",
                            "label":"Tasks with verification status",
                            "description":"",
                            "field_type":"checkbox",
                            "default":"none,partial,pass,fail",
                            "readonly":false,
                            "max_length":null,
                            "required":false,
                            "deprecated":false,
                            "placeholder":"none,partial,pass,fail",
                            "scope":[
                                "system"
                            ],
                            "help_text":"Filter tasks based on their verification status",
                            "options":[
                                {
                                    "label":"No Status",
                                    "value":"none",
                                    "disabled":false
                                },
                                {
                                    "label":"Partial Pass",
                                    "value":"partial",
                                    "disabled":false
                                },
                                {
                                    "label":"Pass",
                                    "value":"pass",
                                    "disabled":false
                                },
                                {
                                    "label":"Fail",
                                    "value":"fail",
                                    "disabled":false
                                }
                            ]
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
GET /api/v2/plugins/alm/trac/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id":"trac",
    "name":"Trac",
    "short_name":"Trac",
    "command":"sync_trac",
    "sections":[
        {
            "label":null,
            "optional":false,
            "fields":[
                {
                    "name":"alm_project",
                    "label":"Trac Milestone",
                    "description":"",
                    "field_type":"string",
                    "default":null,
                    "readonly":false,
                    "max_length":255,
                    "required":true,
                    "deprecated":false,
                    "placeholder":null,
                    "scope":[
                        "project"
                    ],
                    "help_text":"",
                    "options":[

                    ]
                }
            ]
        },
        {
            "label":"Connection Details",
            "optional":false,
            "fields":[
                {
                    "name":"alm_method",
                    "label":"Protocol",
                    "description":"",
                    "field_type":"radio",
                    "default":"https",
                    "readonly":false,
                    "max_length":null,
                    "required":true,
                    "deprecated":false,
                    "placeholder":"https",
                    "scope":[
                        "system"
                    ],
                    "help_text":"",
                    "options":[
                        {
                            "label":"https",
                            "value":"https",
                            "disabled":false
                        },
                        {
                            "label":"http",
                            "value":"http",
                            "disabled":false
                        }
                    ]
                },
                {
                    "name":"alm_server",
                    "label":"Server",
                    "description":"",
                    "field_type":"string",
                    "default":null,
                    "readonly":false,
                    "max_length":null,
                    "required":true,
                    "deprecated":false,
                    "placeholder":"bugs.server.com",
                    "scope":[
                        "system"
                    ],
                    "help_text":"",
                    "options":[

                    ]
                },
                {
                    "name":"alm_context_root",
                    "label":"Context Root",
                    "description":"",
                    "field_type":"string",
                    "default":null,
                    "readonly":false,
                    "max_length":null,
                    "required":false,
                    "deprecated":false,
                    "placeholder":"/",
                    "scope":[
                        "system"
                    ],
                    "help_text":"Normally left empty unless the service is installed at a non-standard location",
                    "options":[

                    ]
                }
            ]
        },
        {
            "label":"Credentials",
            "optional":false,
            "fields":[
                {
                    "name":"alm_user",
                    "label":"Trac Username",
                    "description":"",
                    "field_type":"string",
                    "default":null,
                    "readonly":false,
                    "max_length":null,
                    "required":true,
                    "deprecated":false,
                    "placeholder":null,
                    "scope":[
                        "system"
                    ],
                    "help_text":"",
                    "options":[

                    ]
                },
                {
                    "name":"alm_pass",
                    "label":"Trac Password",
                    "description":"",
                    "field_type":"masked_string",
                    "default":null,
                    "readonly":false,
                    "max_length":null,
                    "required":true,
                    "deprecated":false,
                    "placeholder":null,
                    "scope":[
                        "system"
                    ],
                    "help_text":"",
                    "options":[

                    ]
                }
            ]
        },
        {
            "label":"Synchronization",
            "optional":true,
            "fields":[
                {
                    "name":"conflict_policy",
                    "label":"Choose Authoritative Source",
                    "description":"",
                    "field_type":"radio",
                    "default":"alm",
                    "readonly":false,
                    "max_length":null,
                    "required":false,
                    "deprecated":false,
                    "placeholder":"alm",
                    "scope":[
                        "system"
                    ],
                    "help_text":"The de facto source for the status of an SD Elements task",
                    "options":[
                        {
                            "label":"Trac",
                            "value":"alm",
                            "disabled":false
                        },
                        {
                            "label":"SD Elements",
                            "value":"sde",
                            "disabled":false
                        },
                        {
                            "label":"Last Status Change",
                            "value":"timestamp",
                            "disabled":true
                        }
                    ]
                },
                {
                    "name":"how_tos_in_scope",
                    "label":"Include code sample How-To's in task descriptions",
                    "description":"",
                    "field_type":"boolean",
                    "default":false,
                    "readonly":false,
                    "max_length":null,
                    "required":false,
                    "deprecated":false,
                    "placeholder":"False",
                    "scope":[
                        "system"
                    ],
                    "help_text":"",
                    "options":[

                    ]
                }
            ]
        },
        {
            "label":"Tasks to Synchronize",
            "optional":true,
            "fields":[
                {
                    "name":"sde_min_priority",
                    "label":"Tasks having a minimum priority",
                    "description":"",
                    "field_type":"select",
                    "default":"7",
                    "readonly":false,
                    "max_length":null,
                    "required":false,
                    "deprecated":false,
                    "placeholder":"7",
                    "scope":[
                        "system"
                    ],
                    "help_text":"",
                    "options":[
                        {
                            "label":"10 - High Minimum Priority to Import",
                            "value":"10",
                            "disabled":false
                        },
                        {
                            "label":"9",
                            "value":"9",
                            "disabled":false
                        },
                        {
                            "label":"8",
                            "value":"8",
                            "disabled":false
                        },
                        {
                            "label":"7",
                            "value":"7",
                            "disabled":false
                        },
                        {
                            "label":"6",
                            "value":"6",
                            "disabled":false
                        },
                        {
                            "label":"5 - Medium Minimum Priority to Import",
                            "value":"5",
                            "disabled":false
                        },
                        {
                            "label":"4",
                            "value":"4",
                            "disabled":false
                        },
                        {
                            "label":"3",
                            "value":"3",
                            "disabled":false
                        },
                        {
                            "label":"2",
                            "value":"2",
                            "disabled":false
                        },
                        {
                            "label":"1 - Low Minimum Priority to Import",
                            "value":"1",
                            "disabled":false
                        }
                    ]
                },
                {
                    "name":"sde_statuses_in_scope",
                    "label":"Tasks with status",
                    "description":"",
                    "field_type":"checkbox",
                    "default":"TODO",
                    "readonly":false,
                    "max_length":null,
                    "required":false,
                    "deprecated":false,
                    "placeholder":"TODO",
                    "scope":[
                        "system"
                    ],
                    "help_text":"",
                    "options":[
                        {
                            "label":"Done",
                            "value":"DONE",
                            "disabled":false
                        },
                        {
                            "label":"Todo",
                            "value":"TODO",
                            "disabled":false
                        },
                        {
                            "label":"N/A",
                            "value":"NA",
                            "disabled":false
                        }
                    ]
                },
                {
                    "name":"alm_phases",
                    "label":"Tasks having phase",
                    "description":"",
                    "field_type":"checkbox",
                    "default":"requirements,architecture-design,development",
                    "readonly":false,
                    "max_length":null,
                    "required":false,
                    "deprecated":false,
                    "placeholder":"requirements,architecture-design,development",
                    "scope":[
                        "system"
                    ],
                    "help_text":"",
                    "options":[
                        {
                            "label":"Requirements",
                            "value":"requirements",
                            "disabled":false
                        },
                        {
                            "label":"Architecture & Design",
                            "value":"architecture-design",
                            "disabled":false
                        },
                        {
                            "label":"Development",
                            "value":"development",
                            "disabled":false
                        },
                        {
                            "label":"Testing",
                            "value":"testing",
                            "disabled":false
                        }
                    ]
                },
                {
                    "name":"sde_tags_filter",
                    "label":"Tasks having all of the following tags",
                    "description":"",
                    "field_type":"string",
                    "default":null,
                    "readonly":false,
                    "max_length":null,
                    "required":false,
                    "deprecated":false,
                    "placeholder":"tag1,tag2",
                    "scope":[
                        "system"
                    ],
                    "help_text":"",
                    "options":[

                    ]
                },
                {
                    "name":"sde_verification_filter",
                    "label":"Tasks with verification status",
                    "description":"",
                    "field_type":"checkbox",
                    "default":"none,partial,pass,fail",
                    "readonly":false,
                    "max_length":null,
                    "required":false,
                    "deprecated":false,
                    "placeholder":"none,partial,pass,fail",
                    "scope":[
                        "system"
                    ],
                    "help_text":"Filter tasks based on their verification status",
                    "options":[
                        {
                            "label":"No Status",
                            "value":"none",
                            "disabled":false
                        },
                        {
                            "label":"Partial Pass",
                            "value":"partial",
                            "disabled":false
                        },
                        {
                            "label":"Pass",
                            "value":"pass",
                            "disabled":false
                        },
                        {
                            "label":"Fail",
                            "value":"fail",
                            "disabled":false
                        }
                    ]
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
