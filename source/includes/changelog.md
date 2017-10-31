# Changelog

## v4.10
- Add support for creation and deletion of manually added library tasks to Tasks endpoint
  - Add `manually_added_from_library` field to Task resources
  - The `ad_hoc` field has been renamed to `project_specific`

## v4.9
- Add `tags` to the Application endpoint
- Add `application_tags` to Project endpoint
- Change `related_tasks` to include the title, phase, and url of each related task in the Tasks and specific Task endpoints.
- Change `notify_tasks` attribute of UserProfile to include id, name.
- Change `updater` field to be expanded by default in Task Notes endpoint.

## v4.8
- Rename `base` to `base_project` for the Project endpoint
- Add incomplete_tasks include filter and redesign task_counts include filter on projects endpoint.
- Remove `business_unit` as expand filter
- Expand instances of `business_unit` in `applications` by default
- Add ALM plugins endpoint, which returns metadata for each ALM integration. Used to render ALM forms.
- Add params field to connector endpoint & make connector endpoint writeable.


## v4.7
- Add `base` (original project that spawned any number of new releases) to the Project endpoint. (Note: this field will be renamed to `base_project` in v4.8)

## v4.6
- Add `persist_phases` to Business Unit endpoint
- Add `updater` and `updated` fields to Analysis Note endpoint
- Rename ldap group query field to group base dn
- Original SDE phases can now be edited via the API

## v4.5

- Phases can be created, edited, or deleted.
- Changed the value of user to email instead of id, since we filter users by email.
- Password can be changed, password metadata retrieved on GET (session / basic authentication only)
- Password reset questions can be created, edited, or deleted
- API tokens can be generated, revoked or regenerated
- Email notification settings can be updated
- Group endpoint now has sync_connections include filter to fetch LDAP connections
  that reference groups
- Group can no longer be deleted if referenced by LDAP connection
- User Profile can be retrieved or updated via `/users/me/`
- LDAP Connections
  - Added `ldap_start_tls`
  - Removed `ldap_method`
  - Renamed deactivation to `deactivate_stale_users`
  - Change group_mapping to use SDE group ids instead of group names

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
