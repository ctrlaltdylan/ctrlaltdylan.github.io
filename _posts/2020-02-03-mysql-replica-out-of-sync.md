---
layout: post
title:  "MySQL read replica out of date"
date:   2020-02-03 11:39:39
category: mysql
comments: true
---

You expect read-only replica databases to be in sync with the real production database - especially when AWS is managing them for you *cough*.

Sometimes this isn't the case, and there's a little query that can allow you to diagnose if your replica is having issues.

On the replica instance, run this query for debugging information about the replica's syncing status:

```
   SHOW SLAVE STATUS;
```

The result will show an array of statuses, one column in particular is very useful: `Seconds_Behind_Master`. This is the measure in seconds of how far behind your replica's data is from it's master copy.

For instance, sometimes a reboot is all that's necessary to fix a stopped replication. If you run `SHOW SLAVE STATUS` multiple times you _hopefully_ should see this number decrease.

Hopefully this sheds some light into your issue. Comments, questions, concerns below in the comments section.
