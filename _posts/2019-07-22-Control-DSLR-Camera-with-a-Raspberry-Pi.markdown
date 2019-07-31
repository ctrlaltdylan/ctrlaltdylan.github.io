---
title: Control a DSLR Camera with a Raspberry Pi
category: raspberry-pi
---

Controlling a full fledged DSLR Camera with a Raspberry Pi opens up so many possiblities for your projects. You can create your own custom photo booths featuring a touchscreen and printer.

It's a perfect project for weddings or special occasions where you want friends and family to have fun and also capture the moment.

Anyway. I digress. For this project you'll need a camera that's compatible with the software the communicates with DLSRs via the mini USB port on the camera.

This driver-level-esque software is called gphoto2 and it supports over a thousand devices. You can check if your camera is compatible on their big ole list.

## Installing gphoto2

I saw some other guides on the internet compiling gphoto2 and gphoto2lib (the underlying library) by compiliing it from source. I don't know about you but I'm not that cool and I don't have the time for that. Instead you can just use `apt-get`. On your Raspberry Pi's command line just enter:

```bash
sudo apt-get update && sudo apt-get install -y gphoto2 gphotowlib
```
