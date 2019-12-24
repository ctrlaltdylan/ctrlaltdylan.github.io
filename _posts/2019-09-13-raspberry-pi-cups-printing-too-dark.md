---
title: Raspberry Pi printer printing too dark
category: raspberry-pi
---

This was a really annoying issue for me. I was able to setup CUPS on my Raspberry Pi for my photobooth project; however, when the physical photo printed the image was much too dark.

I tried different drivers, even attempting to download a .deb package from the Canon website for my printer to install on the Pi. Nothing worked.

But in my case, switching the default options for the printer did the trick! No special drivers required.

In your CUPS administration web portal hosted at https://raspberrypi.local:613/admin, simply change the default color setting of the printer from `RGB` to `CYM`.

Your printer may need a different color setting. Just experimenting with the other options and you may find the optimal one for your printer. Happy hacking!
