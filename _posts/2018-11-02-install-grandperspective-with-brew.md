---
layout: post
title:  How to install GrandPerspective with Brew
date:   2018-11-02 18:39:39
categories: tutorial
---

Back in my day (circa early 2000's), we used this awesome tool called Disk Inventory X to peek into our limited hard drives to find old legally sourced .avi's that were chewing up valuable disk space.

It would allow you to visualize your disk usage at a glance. Seriously valuable stuff when 80 gigabyte hard drives were price-y.

![Disk Inventory looks cool right?](http://derlien.com/screenshots/assets/main.jpg "Disk Inventory X in it's glory")

However, times have changed. Recently I tried to kick the tires on my computer with Disk Inventory X to see where I could save a few gigs of space.

After about 10 minutes of chugging along - poor Disk Inventory X couldn't handle the load and crashed like that one famous zepplin. Sad!

![Hindenberg or Disk Inventory X](https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA5MS83OTgvb3JpZ2luYWwvaGluZGVuYnVyZy1kaXNhc3Rlci0wMDEuanBn "Hidenburg or Disk Inventory X?")

## Introducing GrandPerspective

Apparently, while I was focusing on other tools and a newer competitior emerged on the market and it's eloquently named [GrandPerspective](http://grandperspectiv.sourceforge.net/).

![GrandPerspective](http://grandperspectiv.sourceforge.net/ScreenShots/1_0-FoldersBujumbura.png "GrandPerspective")

Don't be fooled by it's rather outdated website with Times New Roman font. This is the most active open source disk usaged analyzer on the market.

However, I'm always wary of things still hosted on [SourceForge](https://www.howtogeek.com/218764/warning-don%E2%80%99t-download-software-from-sourceforge-if-you-can-help-it/).

## GrandPerspective + Brew == Chocolate + Peanut Butter

[Brew](https://brew.sh/) is the "missing package manager" for Mac. Meaning it's like the Apple Store where updates are automatic - but Brew is 93% less annoying. _Unless_ you're trying to switch PHP versions; but I digress.

Anyway, here's the command you came for:

    $ brew cask install grandperspective

This will install GrandPerspective as an App in your `Applications` folder. Just like any other App.

Alternatively you could buy GrandPerspective on the App Store and get the same exact benefits of rolling updates - but that'll run you $2.

Great, so I saved you $2. Feel free to Western Union or Dogecoin me a buck for the service.

Yours Truly,
[@ctrlaltdylan](https://twitter.com/ctrlaltdylan) 
