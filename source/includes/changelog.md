# Changelog

## v4.6
- Add persist_phases to Business Unit endpoint

## v4.5

- Phases can be created, edited, or deleted.
- Changed the value of user to email instead of id, since we filter users by email.
- Password can be changed, password metadata retrieved on GET (session / basic authentication only)
- Password reset questions can be created, edited, or deleted
- API tokens can be generated, revoked or regenerated
- Email notification settings can be updated
- User Profile can be retrieved or updated
- LDAP Connections
-- Added ldap_start_tls
-- Removed ldap_method
-- Renamed deactivation to deactivate_stale_users
-- Change group_mapping to use SDE group ids instead of group names

## v4.4

- Added include field `last_job` for connections returned by the ALM, Analysis and LDAP Connection endpoints.
- Added `updater`field tasks returned from the `tasks` endpoint.
- Added documentation for LDAP connections and jobs
- LDAP Connections can be created, edited, or deleted.
- LDAP Jobs can be initiated or the results may be submitted.

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
