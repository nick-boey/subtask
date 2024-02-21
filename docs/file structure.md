# File structure

Subtask uses local storage to store all tasks and emails in a single folder, structured as per the below.

```
_data\
  data.json
  settings.json

_emails\
  role 1\
    filed_email.msg
  role 2\

unfiled_email.msg
```

## `_data\data.json`

Subtask stores tasks using JSON in the `data.json` file.

```JSON
{
  "first_name": "Nick",
  "last_name": "Boey",
  "roles": [roles],
  "unfiled_emails": [emails],
  "settings": {settings}
}
```

`roles` and `emails` contains any number of roles and emails as defined in the schema below.

### `roles`

```JSON
{
  "id": "role-9483-f9382-f93j-f9234",
  "role": "Engineer",
  "color": "#FF0000",
  "tasks": [tasks]
}
````

`tasks` contains any number of `task`s in an array.

## `task`

```JSON
{
  "id": "task-3940-20f9-2340f-2340f",
  "task": "Create new task management software",
  "due": ["2024-01-19", "2024-01-20", "2024-02-05"],
  "type": "u-n-i", // u-i, n-u-i, u-n-i, n-u-n-i
  "tags": ["#software", "#productivity"],
  "complete": "2024-02-08",
  "delegated_to": "",
  "emails": [emails],
  "attachments": ["notes.pdf"],
  "subtasks": [subtasks],
  "notes": "Any valid **Markdown** can be used for notes"
}
```

Any task can contain any number of `task`s in `subtasks` and any number of `email`s in `emails`

### `email`

```JSON
{
  "id": "email-9380-f9234-s039-039",
  "date": "2024-01-19",
  "path": "2024-01-19.msg",
  "subject": "This is an email regarding creating new task management software",
  "from": "Peter Rabbit",
  "to": "Beatrix Potter",
  "cc": "Donna Rabbit",
  "aconex_link": "https://au1.aconex.com.au/link_to_aconex"
}
```
## `_data\settings.json`

Settings are stored here for all application features.

Settings to be determined...