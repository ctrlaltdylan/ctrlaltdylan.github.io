---
layout: post
title: Using colons in Jeykll titles
date: 2019-01-04 10:01 -0800
category: jekyll
---

## Colons in Jekyll titles or front matter

This blog is currently a Jeykll powered blog. One of my recent posts had a colon in the title. It was something like this:

    ---
    title: Jekyll Problems: Using a colon in a title
    ---

I tried wrapping the `title` entry with quotes but with no luck. The Jeykll parser would still hiccup.

Instead I've found a workaround by using the HTML entity for the colon symbol: `&#58;`.

Here's an example:


    ---
    title: Jekyll Problems&#58; Using a colon in a title
    ---

It makes the title less readable, but it did solve the issue for displaying the `:` symbol.

If you know of a better way in 2019, please ping me!
