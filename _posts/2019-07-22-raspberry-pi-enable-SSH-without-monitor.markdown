---
title: Enable SSH access on a Raspberry Pi without a Monitor or Keyboard
categories: raspberry-pi
layout: post
date: '2019-07-22 12:57:34'
---

Sometimes you just want to start a Raspberry Pi without plugging it into a monitor or keyword/mouse and you'd like to start it headless. This is super convienent if your Pi project doesn't necessarily require a monitor to function. I just learned this trick to enable SSH access on a Pi without having to plug it into a Monitor at all. It's awesome.

## Steps to auto enable SSH access on boot

1. First things first, you'll need to install a vanilla Raspian Image onto your Pi. You can download the latest one from the [official site](https://www.raspberrypi.org/downloads/raspbian/). I used the Lite image because I won't be using the Desktop at all for my project.
2. Flash the image to your SD card with a tool like [Etcher](https://www.balena.io/etcher/)
3. After the SD card has been flashed with Raspbian, physically unplug and replug your SD card back into your computer. This will make your computer re-mount the SD card so you can view the contents.
4. Once the SD card is mounted, it should appear as a volume named `boot`. If you're using Mac you can run this command to create a file named `ssh` directly in the root directory of the SD card:

`touch /Volumes/boot/ssh`

On boot, Raspbian looks for the empty file called `ssh` and that will trigger it to enable the SSH server. It's that simple!

To verify you've created the file, run this command and it should show the file:

`ls /Volumes/boot | grep ssh`

If it doesn't, then you need to double check your command above.

**Note for Linux users:** if you don't see a `Volumes` directory, it's because you're using Linux and not Mac. You'll need to look up where your distro mounts volumes by default. It's probably in there.

**Note for Windows users:** Do yourself a favor and use Linux instead. Just kidding. You can just open the SD card and create an empty file with your mouse by right clicking in the folder and creating the file. I'm not familiar with the Window's command line, if you know and it want to share please do.

### Uhh dude this isn't working

So one gotcha I came across myself was that the `ssh` file _gets deleted after booting_. Yea it must be some kind of security feature.

Basically, if you turn your Pi on and then off for whatever reason, you're going need to recreate that `ssh` file in the root of your Pi's SD Card.

This next section is optional. If you're plugging your Pi directly into your network with ethernet you can skip it.

## Adding your Wifi credentials to your Pi without a montior or keyboard

Check out this guide if you'd like to add your[ Wifi credentials to a Raspberry Pi headlessly](/2019/07/22/add-wifi-credentials-to-raspberry-pi-without-monitor-or-keyboard.html) because life is too short to constantly swap monitors and keyboards.