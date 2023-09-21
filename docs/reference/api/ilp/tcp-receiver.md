---
title: InfluxDB Line Protocol TCP Receiver Tuning
sidebar_label: InfluxDB Line Protocol Tuning
description: Performance tuning of InfluxDB Line Protocol TCP receiver.
---

## Capacity planning

TCP receiver makes use of 3 logical thread pools:

- I/O worker pool - `line.tcp.io.worker.count`, threads responsible for handling
  incoming TCP connections and parsing received InfluxDB Line Protocol messages
- writer pool - `line.tcp.writer.worker.count`, threads responsible for non-WAL
  table writes
- WAL apply pool - `wal.apply.worker.count`, threads responsible for applying
  data written to [Write-Ahead Log](/docs/concept/write-ahead-log/) (WAL) to WAL
  tables
- shared pool - `shared.worker.count`, threads responsible for handling
  out-of-order data

Depending on the number of concurrent TCP connections `io worker pool` size
might need to be adjusted. The ideal ratio is `1:1` - a thread per connection.
In less busy environments it is possible for single `io worker` thread to handle
multiple connections simultaneously. We recommend starting with conservative
ratio, measure and increase the ratio up to `1:1`. More threads than connections
will be wasting server CPU.

Another consideration applicable to non-WAL tables only is the number of tables
updated concurrently. `writer pool` should be tuned to increase concurrency.
`writer` threads can also handle multiple non-WAL tables concurrently. `1:1`
ratio is the maximum required ratio between `writer` threads and tables. If
`1:1` ratio is not an option, avoid writing to all tables from each connection.
Instead, group connections and tables. For example, if there are 10 non-WAL
tables, 8 TCP connections and `writer pool` size is set to 2, 4 TCP connections
may be used to write into tables 1-5, while 4 connections may write into tables
6-10.

Note that the last recommendation does not apply to WAL tables as QuestDB
supports concurrent writes to these tables removing the need for the
`writer pool`. Instead, WAL tables use `wal apply pool`, but since applying WAL
data to the end table is much more efficient than non-WAL writes, tuning this
pool is very seldomly required.

:::note

Sending updates for multiple tables from a single TCP connection might be
inefficient. Consider using multiple connections to improve performance. If a
single connection is unavoidable, keep `writer pool` size set to 1 for optimal
CPU resource utilization.

:::

When ingesting data out of order (O3) `shared pool` accelerates O3 tasks. It is
also responsible for SQL execution. `shared pool` size should be set to use the
remaining available CPU cores.
