---
layout: post
title:  DialogFlow first impressions
date:   2018-10-17 18:39:39
category: service-review
---

Some background before I start my review of DialogFlow:

1. I am not a data scientist by trade
2. I have not made any successful ML algorithms in production yet

So as a developer I was curious about DialogFlow as a solution for creating conversational chatbots. There are lots of open source packages and services that offer tools to build chatbots.

## Why not use an Open Source Package?

Open source packages are wonderful to kickstarting development. However, the existing package based solutions are still in the "dumber" area of NLP (Natural Language Processing). Why?

First, they don't use NLP Machine Learning Algorithms under the hood. They offer an easy way to organize _keyword based_ triggers. But are not very flexible. For an implementation to be successful, the user must follow a very narrow & linear path in the conversation.

Here are the key concepts in DialogFlow

## Why choose Hosted Services

IBM's Watson and Google's DialogFlow (formerly known as API.AI) offer a web based interface to create your conversational flows. They're less based on a tree type of structure to map out a conversation but rather an "intent driven" approach.

Some background on the terminology you'll see in NLU (Natural Language Understanding) / Conversational Chat Bot Services, specifically DialogFlow:

### Intents

An _intent_ the intention extracted from a given message from the customer. An intent is made up of a series of training phrases like "I'd like to order pizza", "Do you have deep dish?", and "I'd like to order a large pie".

All of these expressions express the same _intent_. Except the last one if you're not in Northeast U.S. but I digress.

### Entities

An _entity_ is an extracted phrase from a message. An entity is usually a noun, adjective, or verb. For example in our past examples of pizza we'd probably have a set of synonyms for pizza:


| entity | synonyms |
|--------|----------|
| pizza  | pizza, deep dish, pie |
|--------|-----------------------|
| size   | large, small, medium  |
|--------|-----------------------|

### Contexts

A _context_ describes the current state of the conversation. This is how you control flow in a conversation with a Chatbot. Essentially contexts dictate _responses_ to a given message. Contexts can be used like conditionals, only responding under certain situations or setting expectations for the customer's next message.

## Pros of DialogFlow

*Great Documentation -* DialogFlow's documentation gets an A in this category. They have excellent written and video instructions on getting started. This includes an API reference & officially supported open source client-side SDK libraries.

*Ease of Use -* Because DialogFlow is primarily a web interface, it's very simple to get started building your chat bot's conversational awareness in tandem of a developer integrating it into your application.

## Cons of DialogFlow

*Lack of Popularity -* At the moment, DialogFlow doesn't seem all that popular. It may just be the beginnings of NLP as a Service. The terminology can seem daunting at first, but it's very understandable. Perhaps the industry has yet to catch up.

*Web Console Speed -* Like I mentioned, the primary interface for configuring chat bots in DialogFlow is the web console. This application looks nice & is well organized. However, it does mysteriously slow to a crawl after a few hours of use.

*Web Console Clunkiness -* It's a nice workbench, but some of the individual tools are clunky. For example, when editing an Intent, if you're mid typing a Content and switch tabs, then that Context is auto saved. Unfortunately you cannot edit a context, you can only delete it and start over.

## Result





## Hosted Services Democratize ChatBot Training

The other advantage of a service is the ease of training. You are able to easily track incoming conversations that were not handled well and update your intents with new training phrases *without code*. With training, a non-developer can update the chat bot to recognize new expressions on their own time.

You no longer require a deep understanding of NLP or ML algorithms to create sophisticated automated dialog.
