---
layout: post
title:  "How to actually get free wifi at Philadelphia International Airport."
date:   2015-09-24 14:09:39
tag: web security
---

*The Problem*
You can't connect to the Philadelphia International Airport's free wifi because the "Get Connected!" button never appears. Woof! I could care less you're reading and analyzing every reddit post I stumble upon. Just give me free internet! My flight's not taking off for a few hours.

![Look. The get connected button never appears](/assets/philly_airport/look-no-get-connected-button.png)

You can refresh the page 100 times if you want to, that "Get Connected" button they claim is there will never appear. Trust me.

**So with time to kill and no internet, let's take a deeper look into why that button isn't there and how to fix it.**

1. Open up the page's source code (⌘ + u)

2. Find where the button should be by searching for "Get Connected" in the source code:

![No link or button found what so ever.](/assets/philly_airport/alleged-get-connected-button.png)

There definitely isn't any button or link here to go to a URL to accept the terms and conditions. So we now know there's some fancy javascript that _should_ be creating this promotion box. My theory right now is that the javascript for that isn't working propery, and the code to render the mythical "Get Connected" button is somehow tied. Therefore, 2 heads and no stones so to speak.

3. Cool, so let's start going through the javascript files on the page and see if we can find anything related to generating the promotions on the page or the "Get Connected" button.

4. Lots of searching...

Ah ha! Found it: 


    function showSvAd(activity,client){
    var promo = document.getElementById('promo');
    if (!activity) {
        var fbconfigString = 'ProxyHost=&UserAgent=Mozilla%2f5%2e0+11%3b+Linux+x86%5f64AppleWebKit%2f537%2e36+HTML%2c+like+GeckoChrome%2f44%2e0%2e2403%2e157+Safari%2f537%2e36&TunnelIfId=10555132&authType=&NmdId=489006&ReturnHost=nmd%2ephillyiap03%2ephilapa%2ewayport%2enet&MacAddr=B8%3a8D%3a12%3a1E%3aFD%3a78&IpAddr=10%2e20%2e1%2e206&NduMacAddr=&NduPort=&PortType=Guest&PortDesc=&UseCount=&PaymentMethod=Passthrough&ChargeAmount=&Style=AWS&vsgpId=&pVersion=2&ValidationHash=3d48c7390e29282e29bb35ce07a3b1a7&origDest=&ProxyHost=&vsgId=79214&Ip6Addr=&VlanId=20&ts=1443117444';var fbUrl = 'http://'+window.location.host+'/add-ins/shared/use_sponsored.adp?&'+ fbconfigString;
        promo.innerHTML = "<img src='/graphics/shared/LargeSVCTA.png' alt='Click here to connect'/><div id='connection_button'><img src='/graphics/aws/laptop/button_getconnected.png' alt='Click here to connect'></div>";
        promo.onclick = function(){
            window.location.href = fbUrl;
            return false;
        }
     } else {
        promo.onclick = function(){
            loadSv(activity,client);
          return false;
        }

        promo.innerHTML = "<img align='middle' src='"+activity.image_url+"' alt='"+activity.display_text+"'/><div id='connection_button'><img src='/graphics/aws/laptop/button_getconnected.png' alt='Click here to connect'></div>";
     }
    };

    $(document).ready(function() {
        tall=$(document).height();

    });

So long story short on this function, the promotion should've rendered that button with a laptop graphic (just a hunch based off of the source of the link: `src='/graphics/aws/laptop/button_getconnected.png'` and the title of the link: `alt='Get Connected!'`)

When you clicked on the promotion, this little bit of (ugly) code is executed:

    var fbconfigString = 'ProxyHost=&UserAgent=Mozilla%2f5%2e0+11%3b+Linux+x86%5f64AppleWebKit%2f537%2e36+HTML%2c+like+GeckoChrome%2f44%2e0%2e2403%2e157+Safari%2f537%2e36&TunnelIfId=10555132&authType=&NmdId=489006&ReturnHost=nmd%2ephillyiap03%2ephilapa%2ewayport%2enet&MacAddr=B8%3c8D%3a12%3d1E%3aED%3a78&IpAddr=10%2e20%2e1%2e206&NduMacAddr=&NduPort=&PortType=Guest&PortDesc=&UseCount=&PaymentMethod=Passthrough&ChargeAmount=&Style=AWS&vsgpId=&pVersion=2&ValidationHash=3d48c7390e29282e29bb35ce07a3b1a7&origDest=&ProxyHost=&vsgId=79214&Ip6Addr=&VlanId=20&ts=1443117444';

    var fbUrl = 'http://'+window.location.host+'/add-ins/shared/use_sponsored.adp?&'+ fbconfigString;

    promo.onclick = function(){
        window.location.href = fbUrl;
        return false;
    }

For those who aren't javascript developers, `window.location.href` redirects your browser to whatever site is given to to. In this case it's passing the `fbUrl` variable.

So I did the hard work of reconstructing the `fbUrl` variable for you, specifically for the Phildelphia Airport's link:

`http://nmd.phillyiap03.philapa.wayport.net/add-ins/shared/use_sponsored.adp?&ProxyHost=&UserAgent=Mozilla%2f5%2e0+11%3b+Linux+x86%5f64AppleWebKit%2f537%2e36+HTML%2c+like+GeckoChrome%2f44%2e0%2e2403%2e157+Safari%2f537%2e36&TunnelIfId=10555132&authType=&NmdId=489006&ReturnHost=nmd%2ephillyiap03%2ephilapa%2ewayport%2enet&MacAddr=B8%3a8D%3a12%3a1E%3aFD%3a78&IpAddr=10%2e20%2e1%2e206&NduMacAddr=&NduPort=&PortType=Guest&PortDesc=&UseCount=&PaymentMethod=Passthrough&ChargeAmount=&Style=AWS&vsgpId=&pVersion=2&ValidationHash=3d48c7390e29282e29bb35ce07a3b1a7&origDest=&ProxyHost=&vsgId=79214&Ip6Addr=&VlanId=20&ts=1443117444`

That link will acknowledge you'd like to connect to the wifi network and you'll be that much closer to forgetting how uncomfortable these chairs are. 

![Woo connected to interwebz!](/assets/philly_airport/woo-connection.png)

**TL;DR** If you find yourself unable to find the "Get Connected" button on the Philadephia Airport's wifi network portal page visit this link: 

[Get Connected](http://nmd.phillyiap03.philapa.wayport.net/add-ins/shared/use_sponsored.adp?&ProxyHost=&UserAgent=Mozilla%2f5%2e0+11%3b+Linux+x86%5f64AppleWebKit%2f537%2e36+HTML%2c+like+GeckoChrome%2f44%2e0%2e2403%2e157+Safari%2f537%2e36&TunnelIfId=10555132&authType=&NmdId=489006&ReturnHost=nmd%2ephillyiap03%2ephilapa%2ewayport%2enet&MacAddr=B8%3a8D%3a12%3a1E%3aFD%3a78&IpAddr=10%2e20%2e1%2e206&NduMacAddr=&NduPort=&PortType=Guest&PortDesc=&UseCount=&PaymentMethod=Passthrough&ChargeAmount=&Style=AWS&vsgpId=&pVersion=2&ValidationHash=3d48c7390e29282e29bb35ce07a3b1a7&origDest=&ProxyHost=&vsgId=79214&Ip6Addr=&VlanId=20&ts=1443117444)
