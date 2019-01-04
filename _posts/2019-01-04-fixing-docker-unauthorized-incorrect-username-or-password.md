---
layout: post
title: "Fixing Docker error unauthorized: incorrect username or password"
date: 2019-01-04 09:46 -0800
---

Trying to run `docker-compose up` or a docker container through the CLI but getting a mysterious error: `unauthorized: incorrect username or password`? Yea me too, it was highly annoying but I was able to fix it.

## Symptoms

* Unable to pull images in the docker CLI tool
* Unable to login into docker hub via the CLI command `docker login`

## Solution

The problem is that the Docker Mac GUI will allow you to login to your DockerHub account with your email address. _However_ the Docker CLI only accepts Docker ID's as valid credentials.

1. Log out of the Docker GUI on Mac by clicking the toolbar icon and selecting "{{ your username }}: sign out"
2. Sign back into Docker GUI **with your Docker ID**. Your Docker ID is your Docker username, _not your email address_.
3. After signing back in, run `docker login`. The Docker CLI will automatically use the Docker GUI credentials.

## Follow up

Check out the ever growing [Github Issue](https://github.com/docker/hub-feedback/issues/935) on this topic for more information. 
