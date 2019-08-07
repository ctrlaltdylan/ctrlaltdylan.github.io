---
title: Install NodeJS and NPM on Raspberry Pi in 2 steps
layout: post
category: raspberry-pi
post_image: "/assets/img/node-leaf.jpg"
preview_image: "/assets/img/node-leaf-preview.jpg"
---

Not all Raspberry Pi applications are Python based; NodeJs is a great choice to build on Raspberry Pis. In fact, the widespread adoption of Electron.js allows Web developers to easily migrate to building desktop applications.

Because of Javascript's ubiquity, it's becoming popular very quickly.

To install NodeJS and NPM, simply these commands to register the Nodesource PPA (the official NodeJS repository for Raspberry Pi) and install Node itself:

     curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
     sudo apt-get install -y nodejs
		 
## Installing older NodeJS versions

At the time of writing NodeJS v12 is the latest stable major version. Here are examples to install each of the LTS (long term support) versions of Node:

**Node v11**

     curl -sL https://deb.nodesource.com/setup_11.x | sudo -E bash -
     sudo apt-get install -y nodejs

**Node v10**

     curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
     sudo apt-get install -y nodejs

**Node v8**

     curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
     sudo apt-get install -y nodejs