---
published: true
layout: post
title: State of Headless Jekyll Headers in 2020
date: 2020-02-13T00:54:18.694Z
comments: true
---
## A GUI + Jekyll = peanut butter & chocolate

I'm on a search. A search for the ultimate blogging experience. The web has been around for 30+ years, this should be easy right? Eh nah.

WordPress is ubiquitous as a blogging platform, but I know too much about software engineering to wrap my brain around their documentation. I missed that boat a long time ago, and I'm not looking to learn a whole new ecosystem just to have a nice frontend to my markdown files.

## Jekyll Options Reviewed

So for this post, I'm just going to share my experiences with the options out there in 2020. I've started with a nice collection of resources at [Awesome Jekyll](https://github.com/planetjekyll/awesome-jekyll-editors).

### Jekyll Admin

This is a cool gem you can install on your Jekyll instance just via a gem. It's alright, I didn't stick with it for a couple of reasons. From what I remember here's my pros & cons list:

Pros

* Easy install (2 min max)
* It runs locally
* Free
* Metadata & post creation is purty nice

Cons

* Dated and it shows. Last substantial commit was 2 months ago
* Documentation is sparse at best
* Image uploading a little confusing

Ultimately, I got tired of manually uploading photos. It's a pain and would like a seamless experience.

### Netlify CMS

I personally use netlify to serve this blog. It's great. Before I would self deploy with s3-sites and I hand configured an S3 bucket + AWS CDN to serve my jekyll assets. Netlify just makes the whole experience painless. No more configuration or rereading documentation to remember how you deployed your site.

On top of that, their installation process was a breeze compared to the wrestling I had to do with AWS and my DNS provider to correctly SSL'ify my S3 bucket. The whole experience was fun the first time, but subsequent blogs were a pain.

So with Netlify's deployment offering being so great, I thought maybe their CMS would be a contender.

However, after playing with for about an hour, some immediate problems arose for me:

1. The documentation is out of date already. You can tell that settings have moved since the original documentation was written. It's a petty thing, but searching for a setting is not a great first impression
2. It's not out-of-the-box possible to run `/admin` locally. By run I mean, it's possible to run and install the CMS application but it's not possible to authenticate. What's crazy is that there's [a well supported public issue on the tracker](https://github.com/netlify/netlify-cms/issues/2335) that's approaching a year old. No progress.
3. I couldn't even find the method to invite an admin (aka invite myself) with the "Invite Only" option. I've searched, double and triple searched their Identity settings page but to no avast.

That said, I really hope they get their game together. I love their deployment product, and the installation itself of this CMS product is pretty slick, but they missed some key core concepts. I hope they can write this wrong - and no I don't mean [shoe horning in another dev server process](https://www.netlifycms.org/docs/beta-features/#working-with-a-local-git-repository).

### Prose.io

I'm just working my way down the top 3 contenders as it comes to github stars. Prose.io is very similar to Netlify CMS in that it's service based. You authenticate with Github and simply navigate to your blog repository.

Bonus points, it's open source so if you're *motivated* you can deploy your own Prose instance, even forking is possible.

It seems to automatically understand Jekyll conventions and it was pretty easy to get started. Heck this post was written with Prose.io.

Below is me trying out the images uploading feature. You thought this post was a well written and edited piece of writing? Ha. I'm trying this out as I go, that's agile baby.

![Photo on 6-28-19 at 12.57 PM #2.jpg]({{site.baseurl}}/assets/Photo on 6-28-19 at 12.57 PM #2.jpg)

So far I'm liking Prose.io. I know my past gripes with Netlify CMS was that it wasn't possible to run locally. But now that I'm seeing the power of just writing online, it's pretty nice. You don't have to make the cognitive break to switch to your jeykll project, start up the jekyll server, write, `git add` the files, and then `git commit` the files, then `git push` the thing.

Instead you just write online, and publish. Maybe that crazy WordPress idea was up to something after all.

 **UPDATE:**  that image doesn't load. Which means out of the box default image handling in Prose is broken for Jekyll drafts. Bummer.

 **UPDATE #2**  remembering your metadata needed for a post is kind of annoying too. Not a fan of that. But metadata is editable from the GUI which is really nice.

**UPDATE #3** got over my grips about local logins with Netlify CMS. This latest edit is done directly on "prod" with Netlify CMS and it *feels* great. I'll be using this editor for awhile.