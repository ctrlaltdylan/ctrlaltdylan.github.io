---
title: Add Wifi credentials to your Raspberry Pi without a montior and keyboard
layout: post
date: '2019-07-22 12:57:34'
---

Sometimes you just want to enable Wifi on your Raspberry Pi without leaving your laptop or desktop. I get it.

Luckily Raspbian has made this really easy. You just need to add a file `wpa_supplicant.conf` to the root of the SD card.

The file contents look like this:

```
country=US
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1

network={
    ssid="your network's Wifi name here"
    psk="your network's Wifi password here"
}
```

Then eject your SD card and plug it into the Pi. It should automatically connect to your Wifi.