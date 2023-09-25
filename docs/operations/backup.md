---
title: Backup and restore
sidebar_label: Backup and restore
description:
  Details and resources which describe backup
functionality in QuestDB as means to prevent data
loss.
---

QuestDB provides two ways for creating backups:

- Via [SNAPSHOT statements](/docs/reference/sql/snapshot/)
  - Supports both full backup and incremental snapshots
  - All OSes except Windows
- Via [BACKUP statement](/docs/reference/sql/backup/)
  - Supports full database or table backup only
  - Windows OS only, deprecated on other OSes such as Linux

Here "full backup" means a full copy of all database files while "incremental
snapshots" stands for filesystem snapshots. The latter is based on cloud
provider services.

The `SNAPSHOT` statements should be preferred over the `BACKUP` statement. They
support both full backup as well as filesystem snapshot and provide an easy and
reliable way to back up your database.

## Limitations

QuestDB officially supports the following filesystems:

- APFS
- EXT4
- NTFS
- OVERLAYFS (used by Docker)
- XFS

Other file systems supporting
[mmap](https://man7.org/linux/man-pages/man2/mmap.2.html) feature may work with
QuestDB but they should not be used in production, as QuestDB does not run tests
on them.

:::caution

- A backup includes the contents of the database up to the point of executing a
  backup. Any data inserted while a backup is underway is not stored as part of
  the backup.

- Users can't use NFS or a similar distributed filesystem directly with QuestDB,
  but users may copy a backup to such a filesystem after a backup has been made.

:::
