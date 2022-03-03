---
layout: post
title: "Get notified every time one of your Shopify apps has a new install - without code"
categories: blog
featured_image: "https://res.cloudinary.com/tinyhouse/image/upload/v1645803252/Blog/Pipedream/New_Project_1.png"
post_image: "https://res.cloudinary.com/tinyhouse/image/upload/v1645803252/Blog/Pipedream/New_Project_1.png"
preview_image: "https://res.cloudinary.com/tinyhouse/image/upload/v1646325290/Blog/Pipedream/New_Project_3.png"
excerpt: Get notifications to your Slack channel every time your Shopify app is installed, subscribed to or uninstalled.
comments: true
---

Why would you want to be alerted when a Shopify store installs, subscribes or uninstalls your Shopify app?

Well when you're finding some time off, enjoying a beer or just away from the laptop it's always nice to see your app working for you.

![Receiving a Slack message that a shop has subscribed to one of your appss](https://res.cloudinary.com/tinyhouse/image/upload/v1645736752/Blog/Pipedream/CleanShot_2022-02-24_at_16.05.14_2x.png)

On the flip side, knowing when a merchant uninstalls your app gives you a chance to immediately respond with a personalized message to try and win them back.

![Receiving a Slack message that a shop has uninstalled and unsubscribed](https://res.cloudinary.com/tinyhouse/image/upload/v1645736753/Blog/Pipedream/CleanShot_2022-02-24_at_16.02.47_2x.png)

Sure, you can accomplish this functionality with coding directly within your app. It sounds easy right? Until you consider all of the steps:

1. Install a Slack package in your app.
2. Craft a message in JSON from Shopify's API data.
3. Upgrade the package with new updates.
4. Create a new background queue for handling these notifications out of band so your app's performance isn't affected.
5. Repeat for installs, uninstalls, subscriptions, deactivations, & reactivations.

<div style="display: flex;justify-content:center;">
<img alt="Ain't nobody got time for that" src="https://media.giphy.com/media/bWM2eWYfN3r20/giphy.gif" />
</div>

Read on for detailed setup instructions, or just copy my Shopify App to Slack notifications workflow here and riff on your own:

{% include copy_pd_workflow.html url='https://pipedream.com/@pierce/shopify-partner-to-slack-p_q6CKZNR' %}

## Enter Pipedream

[Pipedream](https://pipedream.com) is the perfect solution for this kind of integration.

I wrote a Shopify Partner API Integration for Pipedream, it's free and open source to use in your Pipedream workflows.

Or create your own workflows with one of the 500+ pre-built actions, or build one of your own with Node.js, Python, Go or Bash; all without opening your IDE.

## Steal my workflow 

Setting up the workflow doesn't require any code, you just need a few copy pastes from your Shopify Partner dashboard to get started.

Here's how to do it.

First, copy my workflow that already connects Shopify App events to Slack:

{% include copy_pd_workflow.html url='https://pipedream.com/@pierce/shopify-partner-to-slack-p_q6CKZNR' %}

After your register, click **Copy** in the top right of the workflow to copy it to your Pipedream account:

![Click Copy to copy the Shopify Partner Pipedream workflow your your account](https://res.cloudinary.com/tinyhouse/image/upload/v1646321834/Blog/Pipedream/CleanShot_2022-03-03_at_10.36.21_2x.png)

Now you'll have your own version of the workflow saved to your Pipedream account.

### Creating a Shopify Parter API Key

In order to integrate with our new shiny Pipedream workflow with your Shopify Account, you'll need to create an API key.

First login to your [Shopify Partner account](https://partners.shopify.com/).

Then open your account settings, scroll to the bottom of the page and click on the **Manage Partner API Clients** button:

![Enter Shopify Partner API Client management](https://res.cloudinary.com/tinyhouse/image/upload/v1645797451/Blog/Pipedream/CleanShot_2022-02-25_at_08.56.11_2x.png)

Then click the **Create API Client** button:

![Click the Create API Client button](https://res.cloudinary.com/tinyhouse/image/upload/v1645797592/Blog/Pipedream/CleanShot_2022-02-25_at_08.59.25_2x.png)

Awesome. Now you have an Shopify Partner API token you can use to authenticate your Pipedream workflow with:

![Copy the Shopify Partner API Client secret key you created](https://res.cloudinary.com/tinyhouse/image/upload/v1645797834/Blog/Pipedream/CleanShot_2022-02-25_at_09.02.48_2x.png)

### Find your Shopify Partner Organization ID

This one is hidden in plain sight.

Opening up your Shopify Partner Settings reveals your Shopify Partner Organization ID:

![Copy the Shopify Partner Organization ID](https://res.cloudinary.com/tinyhouse/image/upload/v1646322259/Blog/Pipedream/CleanShot_2022-03-03_at_10.43.30_2x.png)

Copy this number too so we can wire our workflow up to it.

### Connecting your Shopify Partner account

Now armed with both your Shopify Partner Organization ID & API Key, we can return to your Pipedream workflow to finish the integration.

![Click Connect Shopify Partner to setup your connection](https://res.cloudinary.com/tinyhouse/image/upload/v1646322070/Blog/Pipedream/CleanShot_2022-03-03_at_10.38.59_2x.png)

Now enter in your Shopify Partner ID we copied from before, your new Shopify Partner API key, and give this integration a name:

![Creating the Shopify Partner source in Pipedream](https://res.cloudinary.com/tinyhouse/image/upload/v1646322596/Blog/Pipedream/CleanShot_2022-03-03_at_10.49.19_2x.png)

### Connecting your Shopify App

The last integration step is to inform the workflow which of your Shopify Apps it should integrate with.

So let's find your App's ID and enter it into the workflow.

### Find your App's ID

Your App ID can be found by visiting your app details in the Shopify Partner Dashboard and viewing the URL.

It's the number after the `/apps/` portion of the URL:

![Finding your Shopify Partner App ID in the Dashboard](https://res.cloudinary.com/tinyhouse/image/upload/v1645813248/Blog/Pipedream/CleanShot_2022-02-25_at_13.20.04_2x.png)

### Entering your Shopify App ID into the workflow

Back in the workflow enter in the App ID in this format:

`gid://partners/App/<your App ID here>`

![Connecting your Shopify App to the Workflow](https://res.cloudinary.com/tinyhouse/image/upload/v1646322857/Blog/Pipedream/CleanShot_2022-03-03_at_10.52.20_2x.png)

Click **Save** to finish the integration.

## Connect to your Slack workspace

Congrats, the hard part is over. Connecting to Slack is a cinch with Pipedream. Scroll down to the last step in the workflow and click **Connect account** to authorize your Slack account:

![Connecting your Slack account to the Workflow](https://res.cloudinary.com/tinyhouse/image/upload/v1646323175/Blog/Pipedream/CleanShot_2022-03-03_at_10.59.10_2x.png)

### Configuring the Slack message

This is the real final step. Enter in these values for the Slack action and click **Save** then **Deploy** in the top bar.

![Configuring the Slack step](https://res.cloudinary.com/tinyhouse/image/upload/v1646323482/Blog/Pipedream/CleanShot_2022-03-03_at_11.00.56_2x.png)

Here's the values for each field to make it easier to copy & paste:

| Option  |  Value  |
|---|---|
| Slack Channel  | Choose from the dropdown menu  |
| Blocks  | `{% raw %}{{ steps.nodejs.$return_value }}{% endraw %}`  |
| Notification Text  | `New Shopify Notification`  |
| Bot Username  | `Shopify Partner`  |
| Icon  | `:shopping_bags:`  |

Don't forget to click **Save** then **Deploy** to make your Workflow live.

If all goes well, you'll be getting updates in real time from your Shopify App.

This is just one example of the cool & useful things you can do with Pipedream.

Want to see another no code workflow example? Send your tutorial requests to me by [email](mailto:me@dylanjpierce.com) or message me on Twitter at [@ctrlaltdylan](https://twitter.com/ctrlaltdylan).

You can also catch me hanging out at the [Pipedream community Slack](https://join.slack.com/t/pipedream-users/shared_invite/zt-11sazmsg0-oS2VW~mZfhtk3XfEEvb~JA) as well as our [forum](https://pipedream.com/community/).

Have a prosperous day!
