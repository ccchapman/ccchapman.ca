---
title: "PostgreSQL Last Vacuum"
date: 2023-07-25T08:00:40-07:00
draft: false
tags: ["postgres", "rdms"]
---

This query will return the `last_vacuum` and `last_autovacuum` timestamps for
all user tables.

```postgresql
select relname, last_vacuum, last_autovacuum from pg_stat_user_tables;
```
