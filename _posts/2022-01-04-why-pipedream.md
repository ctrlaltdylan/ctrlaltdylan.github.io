---
layout: post
title: "Why Pipedream?"
categories: low-code, personal
featured_image: "https://res.cloudinary.com/tinyhouse/image/upload/v1641424488/Blog/Pipedream/pipedream_banner.png"
post_image: "https://res.cloudinary.com/tinyhouse/image/upload/v1641424488/Blog/Pipedream/pipedream_banner.png"
comments: true
---

I just wanted to make a quick write up on the next team I've joined and the product we're building - [Pipedream](https://pipedream.com).

## What is Pipedream?

![Pipedream - connect APIs remarkably fast](https://res.cloudinary.com/tinyhouse/image/upload/v1641424488/Blog/Pipedream/pipedream_banner.png)

In layman's terms, Pipedream is a workflow builder. It's a platform where you can build workflows from a series of pre-built steps - or build your own.

For example, with just a few clicks in Pipedream you can build a workflow to listen for a specific hashtag on Twitter and add them onto a Google Spreadsheet:

<iframe width="560" height="315" src="https://www.youtube.com/embed/6eq813uEExc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

What's even more amazing is that this workflow will keep populating this spreadsheet the the newest tweets. Your spreadsheet is now a real time database, with just a few clicks.

There are over 500 integrations available out of the box, which means you can build nearly limitless applications.

You might be saying - ok cool Dylan; but I can do this same thing in Zapier or IFTT? What's the big deal?

The big deal is that with Pipedream you can jump down into code _at any time_. You don't need to register as a developer, you don't need to jump through hops to customize a workflow to meet your needs. It's abstracted just enought to get started, and flexible enough to grow with your requirements.

## The dog food tastes good

"Eating your own dog food" is tech speak for writing tools that you actually use.

It's a silly phrase, but the idea is powerful. By building products you actually use, you become the expert in the customer's wants and needs.

I loved working for RVshare because I am very much into travel and for a time lived out of tiny house full time. It was very close to dog fooding.

Pipedream is like that, except for maybe renting an RV once a year, I have used Pipedream to do all kinds of interesting workflows _without coding_:

- Adding subscribers to a Mailerlite group automatically to kick off welcome & marketing email campaigns
- Notifying a `#finance` Slack channel whenever my business bank account balance changes
- Sending me a daily summary of revenue & profit from my Shopify apps

You might be saving to yourself, yea doesn't Zapier & IFFT kind of do the same thing?

In a ways yes, but Pipedream takes it a step further because you can create artibitrary living Node scripts on the fly.

## The difference between high code & no code

You're probably aware of how often Google Spreadsheets replaces an application. It's a quick & dirty malleable database with some basic permission handling, very vague history logging, and does an OK job at showing data.

Where it falls short is painfully obvious for many reasons [I've written about before](https://dylanjpierce.com/personal/2020/01/04/actionsheets-concept.html).

But it's the backbone for many "side" effect work in businesses for one off tasks or follow ups by various departments. Anyone with or without coding skills can edit a spreadsheet's structure, modify values and formatting.

On the flipside - a high code solutions are much closer to concrete - they're much more rigid, slow and expensive to implement. The pro side is they are the operating closer to bare metal - a custom application can fit any mold, withstand change management thanks to [Git](https://github.com) and make custom interfaces.

![No code vs code-ful vs high code](https://res.cloudinary.com/tinyhouse/image/upload/v1641606146/Blog/Pipedream/Screen_Shot_2022-01-07_at_8.41.52_PM.png)

Pipedream is not another application framework, nor is it a replacement for no-code tools like Zapier or IFTT. Instead it's enchancing the productivity for all by building a solution in the sweet spot of low code.

## At the end of the day, we're all just internet plumbers

Whether we like to admit it or not, too much or most of our time as developers is spent on wiring our application with 3rd party services. We give ourselves lofty titles like Full Stack Engineer, Software Developer, etc. But let's be honest, we know our apps just are clever integrations of 2 or more APIs with some custom logic between and the right interface for our audience.

We could ship more and faster, but we're held back by necessary yet trivial work.

How many times have you had to program

- Add a newly user to your marketing email provider to start a drip campaign?
- Make a one off CLI task to upload some data to a Google Sheet for accounting?
- Make a Slack message on a specific event or on a timer for debugging or operation purposes?

The reality is we have to provide operational, marketing, accounting, and

**How developers would like to spend their time**

![How we think we're spending out time](https://res.cloudinary.com/tinyhouse/image/upload/v1641424463/Blog/Pipedream/Untitled-2022-01-05-1729.png)

**The reality**

![How we're actually spending our time](https://res.cloudinary.com/tinyhouse/image/upload/v1641424463/Blog/Pipedream/reality.png)

After the first 3 dozen times installing a official package for your language or framework of choice, wiring it up to your business logic - you've already fallen for the maintainence trap.

Heaven forbid you forget to make sure your app doesn't crash when the service is down. And now you're having to keep up with maintaince and security updates on this package within the core of your application.

> Your time is expensive, you should focus on providing real value to your customers via your differentiated core product above all else.

## Democraticizing serverless & event based systems

The promise of serverless is _mostly_ misguided. The idea that your application would separate into microservices with sharply narrowed focus sounds smart, but in reality it _adds complexity_ not reduces it.

The worst of it is that it's a heavy investment of time & learning without the gain of saving time in the long run. The holy grail of infinite scalability for "free" actually costs in terms of moving the debugging level up to the network, resource intensive & heavily complex dev environments. Heck, the concept of keeping "warm" doesn't exist for apps running on 1 server. Long running functions? Woof be careful there.

The real benefits of serverless are only harvested by large teams that had dedicated engineers to just documenting and developing these cases, well until now.

> Your app should only be concerned providing the primary process that brings value to your customer - everything else can be handled with asychronous & out of band workflows.

Since Pipedream's interface to your application is really just HTTP webhooks, you get an event based serverless workflow without learning a new framework or an complex event system like Kafka.

With Pipedream you can create workflows that trigger on your business events, freeing up your developers to concentrate on building the best experience for your customers:

- `customer.registered`
- `order.created`
- `subscription.upgraded`

All of these events have clear primary objectives in your businesses application. However, there are secondary actions like registering new customers with your marketing email providers, reporting to analytics dashboards, etc.

## Raising the stakes, by lowering the bar

More often than not a good tool will do the following:

- Organizing complexity
- Lowering the bar to entry
- Empower a wider audience to build solutions they couldn't before

Pipedream is checks all of these boxes above, and is just getting started.

Interested in learning more?

- [Build your first workflow](https://pipedream.com/docs/quickstart/hello-world/)
- [Develop a Pipedream integration](https://pipedream.com/docs/components/quickstart/nodejs/actions/)
- [Tweet @ me](https://twitter.com/ctrlaltdylan)
- [Email me](pierce@pipedream.com)
- [Join our Slack community](https://join.slack.com/t/pipedream-users/shared_invite/zt-ernlymsn-UHfPg~Dfp08uGkAd8dpkww)
