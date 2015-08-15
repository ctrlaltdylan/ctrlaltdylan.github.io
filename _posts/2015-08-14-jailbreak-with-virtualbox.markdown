---
layout: post
title:  "Jailbreak an iPhone with Virtualbox"
date:   2015-08-14 18:39:39
categories: jailbreak tutorial
---
Like me you're probably itching to get the latest iOS jailbreak on your iPhone, but alas! The newest jailbreaking software is written for ..._Windows only?!?_. Fret not. Regardless if you're using OSX or Ubuntu, if it can run Virtualbox you can still jailbreak your iPhone very easily.

In this tutorial we're going to be using a Virtual Machine running on Virtualbox to perform the jailbreak. In order for your Windows Virtual Machine to be able to communicate to your physically plugged in iPhone, we're going to need to perform a few steps. Don't worry, no code needed.

## You'll need

* [Virtualbox installed] on your computer (aka the "host machine")
* A version of Windows installed on Virtualbox instance (I performed this with Windows 7)

**Note:** Don't bother downloading the jailbreaker executable to your host machine, you'll end up having to redownload or sharing a folder with your Windows virtual machine anyway.

## Steps
1. After your VM is setup with Windows, boot up the machine. Install the latest version of iTunes because it includes drivers the jailbreaking tool is going to need. Shutdown the virtual machine.

2. Plug in your iPhone to your computer, does not need to be mounted by your host machine for this to work.

3. Open VirtualBox and with your Windows VM shut down, got to the main settings menu
![Main settings menu](/assets/step-1-vm-settings.png) 

4. Go into the `USB` tab and then use the new USB filter buttons on the right hand side to add your iPhone device to be shared with your Windows VM.
![Add iPhone USB Filter](/assets/step-2-add-iphone.png)

5. Start up your Windows VM.

6. Right click the USB icon at the bottom of the screen to bring up another USB filter menu. Just ensure that the iPhone is indeed selected. 
![iPhone USB activity](/assets/step-3-iphone-activity.png)

7. Open up iTunes and verify that your VM can now communicate through your host machine to the iPhone. 

8. Download the latest jailbreaking tool inside of your VM. [Follow these instructions] to jailbreak your iPhone with the appropriate tool. That's it! Enjoy!

As of this tutorial it's TaiG's Jailbreak Tool v2.4.3 for iOS 8.4. However this is just a method to patch the USB communications from your host machine through a VM. Newer versions of iOS and the Jailbreaking tool should have no problem with this. For the latest jailbreaking tool and compatibility the best resource as always is /r/Jailbreak.

- Pierce

[Virtualbox installed]: https://www.virtualbox.org/wiki/Downloads
[Follow these instructions]: http://www.jailbreakqa.com/questions/297948/jailbreaking-ios-8
[/r/Jailbreak]: https://reddit.com/r/jailbreak