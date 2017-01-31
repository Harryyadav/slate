# Changelog

## v4.4

- Added include field `last_job` for connections returned by the ALM, Analysis and LDAP Connection endpoints.
- Added `updater`field tasks returned from the `tasks` endpoint.

## v4.3

- Initiate a password reset via the API (session / basic authentication only)
- Global roles can be created, edited, or deleted.

## v4.2

- Add documentation for session and basic authentication.
- Business Units, Groups, and Tasks includes the role of the users the resource returns.
- Include the first name, last name for the users returned by the tasks endpoint.
- ALM and Analysis Connections include whether they are accessible or not, and the id of their parent Connector.
- ALM and Analysis Connections can be created, edited, or deleted.
- ALM sync jobs can be initiated by POSTing to the alm jobs endpoint.
- Analysis import jobs can be initiated by POSTing to the analysis jobs endpoint.
- Project Role can be ordered and searched for by name.
- (Customer created) Project Roles can be deleted.
- Users endpoint returns if a password reset is in progress.

## v4.1, v4.0, v3.9, etc.

- The dark times where we had no change log.
