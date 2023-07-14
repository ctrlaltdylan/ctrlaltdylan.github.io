---
layout: post
title: "Build a Currency Exchange API - without code"
categories: tutorial shopify pipedream 
featured_image: "https://res.cloudinary.com/tinyhouse/image/upload/v1689352272/Blog/Photos/DALL_E_2023-07-14_12.30.49.png"
post_image: "https://res.cloudinary.com/tinyhouse/image/upload/v1689352272/Blog/Photos/DALL_E_2023-07-14_12.30.49.png"
preview_image: "https://res.cloudinary.com/tinyhouse/image/upload/v1689352272/Blog/Photos/DALL_E_2023-07-14_12.30.49.png"
excerpt: A reflection on the heavy restrictions on the Twitter & Reddit APIs that helped build my early career over 10 years ago.
comments: true
---

Recently, [Shopify has removed the `total_price_usd` field from their Admin Order API.](https://shopify.dev/docs/api/release-notes/2022-10#deprecated-order-and-lineitem-properties) This caused me a big headache personally. Long story short, now I had to find a way to quickly convert orders back into USD.

Unfortunately, I couldn't find a currency conversion API in Shopify, but I did find an API that offered a free tier. [Open Exchange Rates](https://openexchangerates.org/) offers 1,000 calls per month for free.

Great. But in this case I'm processing quite well over that, and I can't afford the usage here for the value provided.

Yes, I'm known to be frugal, I drive a 2003 Corrolla. 

So I've found a way to leverage Pipedream workflows and a data store to cache the prices and then serve a real time API endpoint to respond to requests.

This hack essentially offers a free exchange API with an hourly refresh on currency rates back to USD. Lucky for you, I'm sharing the two workflows for you too, so you just need to register an API key and plug it in.

## Storing current currency exchange rates in a Data Store

The sole purpose of this workflow is to retrieve and store the current currency exchange rates for USD into a Data Store.

[Copy this workflow to your Pipedream account to get started.](https://pipedream.com/new?h=tch_ORVfvQ)

The first step is to set up a workflow that will update a Data Store of current exchange rates. We're going to use the Open Exchange Rate API that grants a generous 1,000 API requests per month.

After signing up for an account and confirming your email address, you'll be granted an App ID (a.k.a. your API key).

This workflow is configured to run every hour, so the math comes out to 24 calls per day * 31 days per month = 744 calls per month, which is under the 1,000 calls limit for this API.

Now that you have an API key, use it in this workflow by connecting it:

![Connecting your Open Exchange Rate account to this workflow](https://res.cloudinary.com/tinyhouse/image/upload/v1689352901/Blog/Photos/CleanShot_2023-07-14_at_12.41.29.png)

So next you'll need to create a new Data Store, I named mine `Exchange Rates` for simplicity:

![Naming the data store as Exchange Rates for easier tracking](https://res.cloudinary.com/tinyhouse/image/upload/v1689353218/Blog/Photos/CleanShot_2023-07-14_at_12.46.46.png)

Then after deploying, when you open your Data Store you'll see the `rates` property is updated every hour with a mapping of all prices:

![Example of the cached exchange rates API response](https://res.cloudinary.com/tinyhouse/image/upload/v1689352728/Blog/Photos/CleanShot_2023-07-14_at_12.38.33.png)

## Creating the Conversion API

The second and last workflow we need to copy will create a simple GET endpoint to allow us to query this data store of fresh exchange rates.

[Copy this workflow to your Pipedream account to create the endpoint.]()

The only step you need to perform here is connecting your brand new `Exchange Rates` data store, and you're good to go!

![Connecting your data store to the API endpoint](https://res.cloudinary.com/tinyhouse/image/upload/v1689353390/Blog/Photos/CleanShot_2023-07-14_at_12.49.13.png)

Don't forget to also set the `key` property to `rates` so it can find our stored exchange rates:

![Select the rates property within the data store](https://res.cloudinary.com/tinyhouse/image/upload/v1689353445/Blog/Photos/CleanShot_2023-07-14_at_12.49.22.png)

Now use this endpoint to pass the `currency_code` and `amount` as query params, then the response will include the cached currency rate from your data store.

It's wicked fast, and it scales.

This pattern is pretty interesting to me, I'm starting to leverage Pipedream to cache various APIs or add an abstraction layer on top of APIs to make them easier to use.

This is especially useful for semi-hidden or undocumented APIs that you want to interact with. I'll have to share more about that in a latter post.


