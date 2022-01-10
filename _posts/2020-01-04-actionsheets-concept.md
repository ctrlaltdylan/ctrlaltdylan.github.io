---
layout: post
title:  "Actionsheets concept"
date:   2020-01-04 11:39:39
category: personal
excerpt: "Actionsheets is a concept on improving the tried & true spreadsheet for manual processing work, but with a focus on enabling end users to take actions on individual rows of the spreadsheet."
comments: true
---

Actionsheets is a concept I've been thinking on for some time, it's a possiblity thanks to the rise of popularity of cloud based spreadsheets coupled with serverless function technology.

![Actionsheets Concept](/assets/img/actionsheets_concept.png)

## What's the problem with Google Sheets?

There really isn't any problem with Google Sheets in general. However, this are use cases that aren't necessarily on the fringe that Google Sheets is clunky but is the best option.

How many times have you uploaded a set of customer data to a Google Spreadsheet and had to manually process it with a team? I know I've done it plenty of times, and playing both roles.

The data provider, a.k.a. developer has to run a query to retrieve the data needed and provides a .csv of the the data.

The processor, a.k.a. customer support, finance, accounting, business development etc. will then process each row individually. More often than not the processor will have to change the status of each row they've worked on to show to the rest of the team the progress of the work.

This typically is a column called "Status" and has a conditional formatting to show green is good/done, red is bad/can't be done now, grey is pending an action, etc.

## Who are Actionsheets for?

Actionsheets are for startups/companies that rely on manual processing for day to day tasks, or perhaps periodic programs that prune accounts/send notices manually, etc.

It's a general category but it improves the efficiency of 3 groups in particular:

### The Processors

these are the end main users of Actionsheets, they actively work on each sheet and process the data. They apply actions based on the information on the sheet.

Actionsheets enables these end users to take action on the real time data with minimal outside extra-skilled help.

### The Developers

Let's be honest, these are the people that are the blockers of the processors most of the time. Developers time is a hot commodity, and it's very difficult to have them pull data manually or build out new funcotionality in the companies internal admin apps to enable crucial back office work.

Actionsheets incorporate serverless functions that tie into buttons a.k.a. "actions". This means that developers will be able to quickly produce actionable queues with minimal code.

### Management

Upper tiers of management will have real insight into manual task processing and efficency in their business workflows.

Actionsheets provides analytics on each of the end processors efficiency and provides key metrics that tell the story of each spreadsheet.

### How do Actionsheets work?

Actionsheets compose of 2 simple steps:

### Data pipelining

Spreadsheets require data, and historically you would need to provide a .csv file to insert data into a spreadsheet. Here's how Actionsheets are different - instead of perodic manual uploading, instead Actionsheets are supplied fresh data by SQL queries.

Developers will easy integrate your database and be able to write SQL queries that fetch the data to populate the Actionsheet. It's that easy.

Then processors, management or developers will be able to run these definied queries manually or on a schedule with an easy point and click interface.

### Custom Actions

Using our serverless function technology, developers will be able to configure buttons the correpond to actions performed on your API. No visual frontend code required.

Once written, savvy end processors will be able to reuse these buttons on other Actionsheets. This enables your developers work to be reused, and freeing up your customer support, finance, accounting and anti-fraud teams to reuse actions they already understand.

## Think this could be useful for your team?

This is just a concept, but would like to make it a reality. But I need your feedback to put me on the right track. Tell me your use case and how Actionsheets could maximize your productivity.
