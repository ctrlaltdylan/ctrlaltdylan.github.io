---
layout: post
title:  Fixing Docker Error "No Space left on Device"
date:   2018-09-25 18:39:39
categories: tutorial docker
---

There are 2 ways to fix this annoying docker error.

## 1. Delete any unused Docker Containers, Images, Volumes and Networks 

Thankfully, Docker has made it very simple to delete "dangling" resources. You can prune your entire Docker setup with 1 command:

```bash
docker system prune
```

*Note:* this will delete _all containers, images, volumes & networks_ that are not currently in use. This has bitten me a few times in the past, make sure your dockerized database is up and running if you have crucial data in it.

Alternatively, instead of nuking your entire setup you can selectively prune by Docker resources:

```bash
docker volume prune
docker network prune
docker image prune
docker container prune
```
## 2. Increase size of your Docker partition

If you have extra space on your hard drive for Docker related things, I recommend this route. You can add additional projects in Docker without worrying about hitting your memory ceiling.

Also, this process is dead simple with the new addition to the Docker Application itself:

![Docker Image Size Settings](/assets/docker-image-size-settings.png)

You can adjust the amount of space allotted for Docker to use on your local machine this way. No need for learning what `cow` or `cow2` is. You're good to go.

Hope this helps you avoid this annoying error. Cheers.
