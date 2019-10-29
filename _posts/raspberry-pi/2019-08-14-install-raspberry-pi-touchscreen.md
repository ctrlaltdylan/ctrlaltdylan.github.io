---
layout: post
title: How to install a Touchscreen on Raspberry Pi - the missing manual
date: 2019-10-28 18:39:39
preview_image: /assets/img/raspberry-pi-touchscreen-finished-product-preview.jpg
permalink: /raspberry-pi/install-raspberry-pi-touchscreen
category: raspberry-pi
comments: true
---



Installing a touchscreen on a Raspberry Pi is a cheap and easy way to start out an awesome project. It's a great introductory build for those who want to start building out incredible home-built things like custom car dashboards, beer serving robots, and so much more.

One of the best things about these touchscreens is that you don't need to solder anything or undergo any complicated driver software installation.

The official Raspberry Pi Touchscreen by Element 14 just works right out of the box.

One oddity I noticed immediately when opening the package is that it doesn't come with a manual. So consider this the missing manual for installing a touchscreen for your Raspberry Pi.

![Raspberry Pi + Touchscreen](/assets/img/raspberry-pi-touchscreen-finished-product.jpg)

## Things you'll need

This project really doesn't require much. Here's the basics you'll need via Amazon:

* [a Raspberry Pi](https://amzn.to/2osOqUt){:target="_blank"}
* [Official Touchscreen for the Raspberry Pi](https://amzn.to/2MV1dIA){:target="_blank"}
* [50mm Philips screwdriver](https://amzn.to/2oxJZYA){:target="_blank"}
* 30 minutes

## How to setup the Touchscreen on your Raspberry Pi

Great, so your touchscreen and Raspberry Pi kit have come in the mail. Mine came in this very official looking packaging:

![Raspberry Pi Touchscreen Box](/assets/img/raspberry-pi-touchscreen-box.jpg)

Once you open the box, you should find these components:

* The touchscreen itself
* 4 little jumper wires
* A white ribbon connector
* A set of really small screws

### Laying out the Components

![Raspberry Pi Touchscreen Components](/assets/img/raspberry-pi-touchscreen-components-breakdown.jpg)

Let's start with the touchscreen. Remove it from the plastic wrapping and place it facedown on a flat clean surface to avoid scratches.

You'll want to make sure the HDMI port of the touchscreen is facing to the right, the metal looking silver on the other side of the chip is where the ribbon cable fits.

Then to the left of the touchscreen, go ahead and place your Raspberry Pi down. You'll want to make sure the Ethernet ports of the Raspberry Pi are facing to the left. That little white bump up is going to be where we'll attach the Raspberry Pi to the ribbon cable.

Final step. Now it's time to get the ribbon cable. You'll notice that the ribbon cable itself has offset sides. One side of the ribbon cable will have a little blue tab at the very end. If you flip the ribbon cable over, you'll notice that the blue tab appears on the opposite side.

You'll want to have the blue tab pointing towards the touchscreen. The other side of the blue tab exposes metal which makes the connection between the Raspberry Pi and the touchscreen.

Check out the diagram below for a visual guide:


![Raspberry Pi Touchscreen Ribbon Cable laid out](/assets/img/raspberry-pi-touchscreen-ribbon-layout.jpg)

### Attaching the Ribbon Cable to the Touchscreen

The ribbon cable is like an HDMI cord between the Pi and the Touchscreen. It sends visual & touch screen data between the 2 components.

If you look closely at the left side of the touchscreen on that little metal part, you'll notice there are 2 little black tabs. They're smaller than tictacs.

You'll want to pull those out so it creates a centimeter gap for your ribbon cable to fit snuggly in:

![Raspberry Pi Touchscreen Pull Tabs open example](/assets/img/raspberry-pi-touchscreen-pull-tabs-open.jpg)

With these tabs open, insert one side of the ribbon cable with the silver end of the cable facing **upwards**:

![Inserting the ribbon cable into the Raspberry Pi touchscreen](/assets/img/raspberry-pi-touchscreen-inserting-cable.jpg)

While holding the ribbon cable into place inside of the touchscreen's port, use your free hand to close the tiny little black tabs into place. This will secure the ribbon cable into place.

Double check that the ribbon cable is secure by giving it a little tug. Don't worry you won't snap the cable.

Trust me, you'll want to make sure this is nice and tight. It's annoying when this cable pops out and you have to disassemble the whole setup to redo this.

![The ribbon cable secured in the Raspberry Pi Touchscreen](/assets/img/raspberry-pi-touchscreen-ribbon-attached.jpg)

Great, you're already halfway done with the hard part. On to the Raspberry Pi.

### Attaching the Raspberry Pi to the Touchscreen

Now that the ribbon cable to the touchscreen is set, we can go ahead and screw the touchscreen to the bottom of the Raspberry Pi.

You'll notice there are 4 screw mounts on the back of the touchscreen. These are what we'll use to attach the Raspberry Pi to the touchscreen:

![The mounts for the Raspberry Pi to the Touchscreen](/assets/img/raspberry-pi-touchscreen-mounts.jpg)

The Raspberry Pi sits **face up** on these mounts. And you can use the 50mm Phillips screwdriver to screw the provided screws into place:

![The mounts for the Raspberry Pi to the Touchscreen](/assets/img/raspberry-pi-touchscreen-screwing-in.jpg)

Once you have all 4 screws set into place, there's only 1 more step left.

### The Final Ribbon Cable

As you probably guessed, the last step is to attach the loose end of the ribbon cable into the Raspberry Pi itself. This will close the connection between the Raspberry Pi and the touchscreen.

Nothing fancy to do here, just follow the same steps as with the Touchscreen: pull the tabs on the Raspberry Pi to open the little gap, fit the ribbon cable into place and shut the tabs onto the cable:

![Attaching the ribbon cable to the Raspberry Pi](/assets/img/raspberry-pi-touchscreen-final-ribbon-cable.jpg)

### Turning the Touchscreen && Raspberry Pi on

Final final step is to actually turn both the Touchscreen & the Raspberry Pi. I recommend plugging in the touchscreen _before_ plugging in the Raspberry Pi to power.

You should be rewarded with the Raspberry Pi bootscreen and eventually the Raspberry Pi desktop.

You won't need to install or configure any more software to make the touchscreen work. You should be able to click and drag across the screen. Super cool right?

Now you'll be able to interact with the Raspberry Pi as if it were a tablet. All applications will work as normal. Now you'll be able to build photobooths, your own car dashboard, or even your own smart bartender. The possibilities are really endless with this.

![Booting up the Raspberry Pi with it's fancy new touchscreen](/assets/img/raspberry-pi-touchscreen-boot-sequence.jpg)

### BONUS: Jumper Cables

So you probably noticed there's 4 jumper cables in the box there are crying out for attention.

You don't _need_ to install these, but it's really worth it. The ribbon cables allow the Raspberry Pi to communicate visual and touch data to the touchscreen.

However, the jumper cables allow the Raspberry Pi to power the touchscreen itself.

Installing the jumper cables will allow you to only use 1 microUSB cable to power the Raspberry Pi **and** the touchscreen. Also, it looks way cooler with some random wires coming out.

Here's what the final result will look like:

![Raspberry Pi & Touchscreen with jumper cables installed](/assets/img/raspberry-pi-touchscreen-jumper-cables-installed.jpg)

The jumper cables attach from the Raspberry Pi's GPIO Pins (G.eneral P.urpose I.nput O.utput) to the corresponding pins on the touchscreen.

Starting with the touchscreen, the jumper cables should be inserted into the pins in this order:

* Black
* Yellow
* Green
* Empty (no jumper cable for this pin)
* Red

See the picture below for a better example:

![Touchscreen with jumper cables example](/assets/img/raspberry-pi-touchscreen-pins.jpg)

Now on the Raspberry Pi you can use this handy diagram to attach the remaining pins:
![Raspberry Pi 3 Touchscreen GPIO pins diagram](/assets/img/raspberry-pi-touchscreen-gpio-pins.png)

Now you'll only need to use a microUSB cable to power the Raspberry Pi and **both** the touchscreen & the Raspberry Pi will boot up.




