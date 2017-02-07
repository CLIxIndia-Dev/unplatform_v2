# Logging Service

## Introduction

Unplatform provides a generic logging endpoint that then passes data along to its supporting
QBank instance. It blindly passes data along as a blob, and so the assumption is that all
required data is present. No validation is performed.

On the QBank side, the entries will be created in a `default` `log`, since many tools
do not refer to a specific `log` object.

## URLs

The following are in the schema of `url` -> `sub-heading`

```
/api/appdata -> LogEntries
```

### LogEntries

List all available `LogEntries` or create a new `LogEntry`.
`/api/appdata`

#### GET

url parameters (optional):
  - None currently supported

returns:
  - list of `LogEntry` objects.

#### POST

Any form data supplied here is passed along to QBank. If you provide a `session_id` or
`sessionId` parameter, it will be transformed into the QBank `x-api-proxy` header, which
appears in the `LogEntry` as part of the `agentId` parameter.

form data (optional):
  - session_id: A unique session identifier.
  - any other data you want logged.

returns:
  - `LogEntry` object.
