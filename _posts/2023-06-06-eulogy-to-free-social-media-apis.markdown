---
layout: post
title: "A Eulogy to Free Social Media APIs"
categories: opinion blog
featured_image: "https://res.cloudinary.com/tinyhouse/image/upload/v1686050696/Blog/Photos/DALL_E_2023-06-06_07.22.54_-_twitter_and_reddit_logos_painted_on_a_canvas_at_a_funeral.png"
post_image: "https://res.cloudinary.com/tinyhouse/image/upload/v1686050696/Blog/Photos/DALL_E_2023-06-06_07.22.54_-_twitter_and_reddit_logos_painted_on_a_canvas_at_a_funeral.png"
preview_image: "https://res.cloudinary.com/tinyhouse/image/upload/v1686050696/Blog/Photos/DALL_E_2023-06-06_07.22.54_-_twitter_and_reddit_logos_painted_on_a_canvas_at_a_funeral.png"
excerpt: A reflection on the heavy restrictions on the Twitter & Reddit APIs that helped build my early career over 10 years ago.
comments: true
---

Recently both Twitter and Reddit have effectively killed their APIs to the public. Much to the chagrin of their users. [A handful of the most popular subreddits like /r/videos, /r/reactiongifs and /r/lifeprotips are staging a protest by voluntarily shutting down June](https://www.theverge.com/2023/6/5/23749188/reddit-subreddit-private-protest-api-changes-apollo-charges); some even threating to shut down permanently.

This new user hostile policy will also end 3rd party clients to Reddit as well, leaving the only option left analytics leaden spyware that is the official Reddit client.

This is a trend that I personally don't see reversing, and it will only expand to non-text based social media platforms next.

Looking back at the decade plus that these APIs offered a real-time firehose into organic rich content, it should have been obivious. Programmatic access to effectively a rich feed of near infinite dynamic actual human generated content - for absolutely nothing. Just stay within our polling limits please; have fun kids.

These platforms that opened up their APIs saw innovations exceed their own capabilities, and often enriched the platform. [The RemindMe bot on Reddit](https://www.reddit.com/r/RemindMeBot/comments/24duzp/remindmebot_info/) was one of my favorite examples, especially when it came to internet strangers holding a grunge over some prediction of a future event: `RemindMe! 2 years "Was the term 'highly regarded' used in the Presidential Debate?"`

We, I, took these APIs for granted. I leveraged them to power my first startup client, a social media aggregator aimed for university administrators. I'll always look back fondly learning to build an ETL pipeline to load, abstract and store these feeds of content into a normalized database (heck even [reverse engineering one](https://prezi.com/p/bs1ogovpxxsg/copy-of-yakattack/)). There was no gate, I didn't need capital. Just armed with my laptop, a few PHP tutorials and a will to learn.

## Don't hate the players, hate the A.I.

In the end, I can see why the writing is on the walls. 

If these platforms were vulnerable to bots gaming posts or unfairly influencing posts away from organic discussion before, the cat's out of the bag now. The heuristic line of quickly detecting a bot vs a human on social media has become that much more blurred.

Even if that isn't the primary reason, consider the hosting costs of unlimited access to databases that are most likely transfering petabytes if not zettabytes of data per day; consider the reputational cost of unfettered bot access powered by LLMs to these text based platforms. The sugar high of low interest rates over the past decade is over, [tax write offs for software development too](https://www.cnbc.com/2023/04/18/software-firms-face-huge-tax-bills-that-threaten-tech-startup-survival.html). 

## Mourn for the next generation

It's not all bad. On one hand, never before has learning software development been so accessible also thanks to LLMs. However, there's a stark difference between learning `"Hello, world"` on an isolated computer and actually retrieving real time content from social media platforms that are the lowest barrier to entry for learning API interactions that actually leverage the power of the internet.

Sure, you can learn a weather, Pokemon or Star Wars character API - the fundamentals are the same. But it's just not that compelling to new learners.

I specifically remember my first successful API call to search Twitter with a simple API I registered with on the same day. The rush of understanding the possibilities that lay before me. Now those opportunities are locked behind an approval process and a credit card.

Now, it's possible that I'm just overly nostaglic, but all of the fringes of the internet that were open and free are now closing. There must be new edges the next generation of learners are finding, and it's just out of my perspective. But I reflect on how lucky I was to find these while they were open.

Thanks for the good times!

Disagree? [@ me](https://twitter.com/ctrlaltdylan).