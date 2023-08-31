---
layout: post
title: "How to not fight compute piracy"
categories: fraud
comments: true
excerpt: How to detect and beat freemium compute piracy, without killing your conversion rates
description: How to detect and beat freemium compute piracy, without killing your conversion rates 
featured_image: "https://res.cloudinary.com/tinyhouse/image/upload/v1693482496/Blog/Photos/CleanShot_2023-08-24_at_10.06.03_2x.png"
post_image: "https://res.cloudinary.com/tinyhouse/image/upload/v1693482496/Blog/Photos/CleanShot_2023-08-24_at_10.06.03_2x.png"
preview_image: "https://res.cloudinary.com/tinyhouse/image/upload/v1693482496/Blog/Photos/CleanShot_2023-08-24_at_10.06.03_2x.png"
---

Just last week, my I went to launch my development environment powered by Gitpod to fix a quick bug on one of my apps.

However, to my dismay, I found my paid account was now blocked without any recourse. I was effectively blocked from running my trusty development environment for the better part of the day.

![The dreaded "Your account has been blocked" gitpod message](https://res.cloudinary.com/tinyhouse/image/upload/v1693482496/Blog/Photos/CleanShot_2023-08-24_at_10.06.03_2x.png)

Eventually after sending several emails and messages over Discord, the Gitpod team realized my account was falsely flagged and they reverted the ban.

I’m actually lucky to have this situation resolved relatively quickly. Larger teams or enterprises are notorious for outright ignoring blocked users, because the almighty fraud algorithm determined you’re guilty. No appeals. No do overs.

As an end customer this is a terrible experience. There was no explanation and no answer to why it happened, and lack luster reasoning at best.

![Lack of explanation from the Gitpod team](https://res.cloudinary.com/tinyhouse/image/upload/v1693482761/Blog/Photos/CleanShot_2023-08-31_at_07.52.21_2x.png)

## The nature of the beast

I empathize with the these product teams though. Freemium fraud is a particularly nasty beast. It’s a fine line between providing a sample of value to developers evaluating your product, while at the same time preventing losses from crypto mining, command and control bot net servers, or proxying exploits or data theft.

Let’s imagine you’re offering compute as a service. Perhaps you’ve started a hosting company that specializes hosting Node.js apps or scripts.

Naturally developers need to try the tool before committing to even the basic plan. Developers are also fickle and really need to sample before they buy. They also want self service and they want no interaction with sales at all if they can help it.

So practically industry standard to offer a Free tier. But the issue is the bad actors that leverage your free tier to crypto mine to the free tier limits and scale up on as many free tier accounts as possible.

## Nailing jelly to a wall

So you implement detections on NPM package names to ban accounts. That will work for potentially awhile, but the bad guys are just as technical. They can republish these packages under new names on NPM.org. Or they can deploy the code directly in the Node.js app, without even using a package manager.

You can even scan the code itself, search for mentions of similar variable names from a known bad signature. Or certain port usage, network usage.

Or you can start to detect nefarious use by unusual resource consumption, which I believe what got me into trouble recently.

## The cure can be worse than the disease

Be very careful with your anti-fraud detection schemes.

You can unintentionally block or impede your paying customers, self-inflict churn and hurt your brand reputation.

Anti-fraud detection rules that automatically employ bans or suspensions should always follow these basic guidelines:

1. Don’t automatically ban paying or trusted users
2. Allow automatic unblocking after passing KYC
3. Evaluate efficiency of the rule periodically

### Don’t ban trusted users

There should be very clear actions that elevate a users trust level in your system.

For our sample hosting company, potentially the strongest signals are payments. If a customer is in good standing on their subscription with multiple payments, then most likely they are not going to revert to a Free plan and crypto mine or abuse your service.

Define a list of actions or attributes that a trusted account takes that an bad actor cannot. These will define your trusted users.

- Verified email addresses
- Verified phone numbers
- At least one successful payment

Then design your anti-fraud processes to exclude these trusted accounts.

### Keep the door half open

Now that you have employed a rule to automatically ban or suspend users based on an algorithm, expect false flags.

Not only is it a terrible experience to those falsely banned, but it also leads to lost sales.

To alleviate the customer support operational burden, give the flagged user a means to prove trust.

One simple way to set this up is by adding a KYC gate. This gates are extremely effective at thwarting repeat bad actors. They stop fraud by identifying the customers real world information like a drivers license, passport, etc.

Now this is the most sure fire option, but there are other trust signals that you can employ instead, like verifying a phone number with a one time code in an SMS message.

The severity of the potential fraud should dictate which KYC gate should be used to prevent it.

### Continuously evaluate your rules

Anti-fraud rules are short lived because they are used against financially motivated and actors. Eventually these rules will be circumvented or their actions so blended against real traffic and good user activity that once again you have to split the hairs and make new rules.

You also have to be careful to not introduce too much friction and over flag accounts. This is worse than actually defeating the fraud in most cases.

## Please steal these ideas

Why am I so confident these methods work? I have personally employed them at [RVshare](https://rvshare.com) as I set up the Trust & Safety dashboard app, processes, analytics, product integrations and eventually a small team dedicated to this set of particular problems. I've seen what works well and what doesn't.

Rental marketplace fraud is an entirely different set of bad actors and attack vectors, but the motivations and methodologies can apply to any business to weave the needle between prevention and conversion optimization.

Dealing with a particularly nasty form of fraud and need help? [Please message me.](/contact) I’m always happy to help.