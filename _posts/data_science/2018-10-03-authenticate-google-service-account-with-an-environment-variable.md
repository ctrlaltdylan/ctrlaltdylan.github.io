---
layout: post
title:  Authenticate Google Service Account Credentials with an Environment Variable
date:   2018-10-03 18:39:39
categories: tutorial google google-api environment-variables
---

I can't believe I have to write a blog post on what is essentially Google breaking best practices for storing application configuration in 2018. But here we are.

## Google API Keys vs. Google Service Accounts

Not that long ago you could use a single Google API Key to interact with many Google API services. You would just head on over to the wonderful [Google Dev Console](https://console.developers.google.com) and generate API keys.

After obtaining an API key, you would store that value in an environment variable. The result: your app could use different API keys depending on the environment that app was in. The environment variable ensured that the sensitive API key was not placed in the application code. This method was secure, easy to understand, and hard to screw up.

Google Service acccounts however are the new way of authenticating with Google API Services. It's only affecting new services like [DialogFlow](http://dialogflow.com) & [Google Cloud Vision](https://cloud.google.com/vision/) for now. However I bet there's a migration to this new authentication method for older APIs as well.

## How to Authenticate with a Google Service Account

Google already gives you [solid documentation on how to create a Google Service Account](https://cloud.google.com/iam/docs/creating-managing-service-accounts). It's relatively straightforward.

Unlike the API key method, in order to prove you own a particular Google Service Account, instead of sending a simple API Token - you'll need to send Google the Service Account's credentials that is stored as a JSON file.

To make matters more complicated, from Google's own documentation they encourage you to _store the credentials JSON in code_.

The `GOOGLE_APPLICATION_CREDENTIALS` environment variable accepts a path to the JSON credentials _file_. Check out the [Googe Cloud Storage API Client Authorization documentation](https://cloud.google.com/storage/docs/authentication) for an example.

Ok so they don't outright say this, but the new Google API Clients' constructors accept a _path to the JSON file_. How else are you supposed to guarantee the file is present on your development, staging & production environments?

This is inheritly insecure and non-commmon sense.

## Storing the JSON in an Environment Variable instead

I wish Google's documentation would include this little workaround, but here is what I'm doing to bypass this crazyness.

First, copy the content of the JSON into an environment variable. For me, I like something simple like `GOOGLE_API_CREDS`.

Then in your application code, retrieve that environment variable and parse the JSON contents back into an object/hash/array - whatever language you're using:

In Ruby:

```

credentials = JSON.parse(ENV['GOOGLE_API_CREDS'])

```

In PHP:

```

$credentials = json_decode($_ENV['GOOGLE_API_CREDS']);

```

In Javascript (Node):

```

const credentials = JSON.parse(node.process.GOOGLE_API_CREDS);

```

*Then* you can pass this `credentials` variable to the constructor of your Google API Service of Choice.

Thanks for sticking with my long winded rant. This is highly annoying that a large tech giant is stepping away from what's been working fine for several years in order to make it more convient for users of their cloud hosting at the expense of those using AWS or Azure.
