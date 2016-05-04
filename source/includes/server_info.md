# Server Information

## Get Server Information

```http
GET /api/v2/server-info/ HTTP/1.1
Accept: application/json
Authorization: Token "YOUR SDE ACCESS TOKEN"
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "domain":"localhost.com",
    "jobs_queue_length":0,
    "sso_settings":null,
    "platform":{
        "python":{
            "implementation":"CPython",
            "version":"2.7.10",
            "pip_packages":[
                {
                    "version":"1.0",
                    "package":"some-package"
                },
                {
                    "version":"1.0",
                    "package":"other-package"
                }
            ]
        },
        "system":"Darwin-15.2.0-x86_64-i386-64bit"
    },
    "plugins":{
        "project_reports":[
            {
                "name":"ProjectStatusReport",
                "title":"Completion Status Report"
            },
            {
                "name":"ComplianceReport",
                "title":"Compliance Report"
            },
            {
                "name":"ProblemSummaryReport",
                "title":"Problem Summary Report"
            },
            {
                "name":"AllTasksReport",
                "title":"All Tasks Report"
            }
        ],
        "bu_reports":[

        ],
        "project_connections":[

        ]
    },
    "release":{
        "date":"2015-12-04",
        "name":"3.4"
    }
}
```

This endpoint provides information on SDE release version, domain name, server platform, python version and
implementation, pip modules and their versions, SSO details if applicable, ALM job queue length, and
installed SDE plugins. Available only for SDE super-users.

**`GET /api/v2/server-info/`**
