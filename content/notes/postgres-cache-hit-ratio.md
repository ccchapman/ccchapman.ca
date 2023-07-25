---
title: "PostgreSQL Cache Hit Ratio"
date: 2023-07-24T20:00:00-07:00
draft: false
tags: ["postgres", "rdms"]
---

The `cache hit ratio` in PostgreSQL is the number of buffer cache hits divided
by the sum of the number of buffer cache hits and the number of disk blocks
read.[^1]  It can be calculated with a query to a `pg_statio_` view.

```postgresql
select
  sum(heap_blks_hit) / (sum(heap_blks_hit) + sum(heap_blks_read))
    as cache_hit_ratio
from
  pg_statio_user_tables;
```

As an example, if your buffer hits total 1,000 and disk blocks read total 5
your `cache hit ratio` is ≈0.995 or ≈99.5%.

[^1]: [The Cumulative Statistics System:
  `pg_statio_all_tables`](https://www.postgresql.org/docs/current/monitoring-stats.html#MONITORING-PG-STATIO-ALL-TABLES-VIEW)
