---
title: qStudio
description:
  Guide for querying QuestDB using qStudio
---

[qStudio](https://www.timestored.com/qstudio/) is a free SQL GUI, it allows running SQL scripts, easy browsing of tables, charting and exporting of results. 
qStudio includes powerful charting functionality including time-series charting which is particularly useful with QuestDB.
It works on every operating system and with every database including QuestDB via the PostgreSQL driver. 

## Prerequisites

- A running QuestDB instance

## Configure QuestDB connection

1. [Download qStudio](https://www.timestored.com/qstudio/download) for your OS.
2. Launch qStudio.
3. Go to `Server->Add Server`.
4. Click `Add data source`
5. Choose the `PostgreSQL` plugin and configure it with the following settings:

```
host:localhost
port:8812
database:qdb
user:admin
password:quest
```

## Sending Queries

Queries can be ran by either pressing Ctrl+Enter to run the current line or by pressing Ctrl+E to run the highlighted code.

![Screenshot of the qStudio UI query](/img/guides/qstudio/qstudio-query.png)

## See also

- [QuestDB Postgres wire protocol](/docs/reference/api/postgres/)
