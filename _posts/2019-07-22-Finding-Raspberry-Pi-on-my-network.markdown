---
title: Find your Raspberry Pi's IP Address
layout: post
date: '2019-07-22 12:57:34'
---

Luckily it only takes 1 command to find your Raspberry Pi's IP address on your local network:

```
ping raspberrypi.local
```

And the result will show the Raspberry Pi's IP Address:

```
PING raspberrypi.local (192.168.1.25): 56 data bytes
64 bytes from 192.168.1.25: icmp_seq=0 ttl=64 time=215.998 ms
```

In this case, my Raspberry Pi's IP address is `192.168.1.25`. Now I can SSH into your Pi:

```
ssh pi@192.168.1.25
```

Replace `192.168.1.25` with your IP address and you'll be set to play.

### Better question, do you even need your Pi's IP address?

To save yourself from looking up this guide again, you can just combine this with the `ssh` command to find and automatically ssh into your Pi:

```
ssh pi@raspberrypi.local
```

Amazing! I wish I knew this years ago. I could've saved _minutes_ of my life. Possibly an hour. Learn from my mistakes, do this instead.