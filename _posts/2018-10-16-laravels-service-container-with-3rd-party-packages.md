---
layout: post
title:  How to use Laravel's Service Container with 3rd party packages
date:   2018-10-16 18:39:39
category: laravel 
tags: tutorial laravel dependency-injection service-container
---

This is a pretty common scenario in day to day programming. You want to include an official 3rd party PHP package in your Laravel application. However, the API provider like Google Spreadsheets doesn't provide a Laravel PHP package.

I'm going to show you how to Laravel-ify any PHP package easily inside of your exisiting Laravel application.

To show you how to do it, I'm going to use Googlesheets PHP Client. So in your `package.json` you should have it installed:

    $ composer require google/apiclient:^2.0

## Generating a Service Provider

Now in Laravel to define a _Service_ you'll first need to create a Service Provider. You can quickly generate one with an artisan command:

    $ php artisan make:provider GoogleServiceProvider

That should generate a brand new `GoogleServiceProvider` in `app/providers/GoogleServiceProvider.php`.

## Registering your new Service Provider

Now you need to register your shiny new ServiceProvider with your Laravel application. In `config/app.php` scroll down till you find the `providers` array. Add your new provider to it:

    use App\ServiceProvider\GoogleServiceProvider;


    // rest of config/app.php
    $providers = [
      // other providers
      GoogleServiceProvider::class,
    ];

Great now your Laravel application knows to look for `GoogleServiceProvider` when it's booting up.

## Defining your Google Spreadsheet as a Service

Now we can actually create your Google SpreadSheet Client as a Service. This will allow us to _inject_ your Google SpreadSheet Client anywhere in your Laravel application without reinstantating it over and over again.

 Open up your `GoogleServiceProvider`:

    use Google_Client;
    use Google_Service_Sheets;

    class GoogleServiceProvider extends ServiceProvider
    {
        /**
         * Register bindings in the container.
         *
         * @return void
         */
        public function register()
        {
            $this->app->singleton('google_spreadsheet_client', function ($app) {
              // we will instantiate the Google Spread Sheet Client once in this function
              $client = new Google_Client();
              $client->setApplicationName('Google Sheets API PHP Quickstart');
              $client->setScopes(Google_Service_Sheets::SPREADSHEETS_READONLY);
              $client->setAuthConfig('credentials.json');
              $client->setAccessType('offline');
              $client->setPrompt('select_account consent');


              $service = new Google_Service_Sheets($client);
              return $service;
            });
        }
    }

Great! Now you have wired up your Google Spread Sheet client as a service named `google_spreadsheet_client`. You can also bind services to Interfaces or Class names, but let's keep things simple for this tutorial.

## Using your new Google SpreadSheet Service in your application code

Now that you have defined a service, you can use the Laravel container helper to instantiate it anywhere:


    class SpreadsheetsController extends Controller {
      /**
       * Get all spreadsheets
       */
      public function index() {
        $spreadsheets = this->app->make('google_speadsheets_client');

        // now you can use Google_Spread_Sheets client in anyway your choose
      }

    }

*Note:* you can also use the global helper `resolve('google_spreadsheets_client')` to access the container, if you want to access your service outside of a controller.

I hope this helps. If you have any other questions reach out to me at @ctrlaltdylan on the Twitters.
