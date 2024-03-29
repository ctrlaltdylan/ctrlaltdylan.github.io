---
layout: post
title:  "Rails HTTP Status Symbols"
date:   2020-01-29 18:39:39
category: ruby-on-rails
comments: true
---

You'd think `request.headers` would contain an array of HTTP headers. However, in Rails this variable includes _the entire rack environment_.

Instead you'll need to use a regex to filter out HTTP headers from the rest of the environment:

```
  http_headers = request.env.select { |k, _v| k =~ /\A[A-Za-z0-9\-_]+\z/ }
```

Here's the list of headers that will be included in the array:

```
SCRIPT_NAME
QUERY_STRING
SERVER_PROTOCOL
SERVER_SOFTWARE
GATEWAY_INTERFACE
REQUEST_METHOD
REQUEST_PATH
REQUEST_URI
HTTP_VERSION
HTTP_HOST
HTTP_CONNECTION
HTTP_DNT
HTTP_UPGRADE_INSECURE_REQUESTS
HTTP_USER_AGENT
HTTP_SEC_FETCH_USER
HTTP_ACCEPT
HTTP_SEC_FETCH_SITE
HTTP_SEC_FETCH_MODE
HTTP_ACCEPT_ENCODING
HTTP_ACCEPT_LANGUAGE
SERVER_NAME
SERVER_PORT
PATH_INFO
REMOTE_ADDR
ROUTES_70282879079520_SCRIPT_NAME
ORIGINAL_FULLPATH
ORIGINAL_SCRIPT_NAME

```

## Actually, use request.filtered_env instead

The problem with `request.env` is that it includes a field called `RAW_POST_BODY`. The problem with this is particularly with login actions peformed by users.

The `request.env['RAW_POST_BODY']` will include unobfuscated passwords, credit card data, API keys, anything. Whereas `request.filtered_env` will filter out this sensitive data.

So rewriting what I recommended above, but with sensitive parameters blocked:

```
  http_headers = request.filtered_env.select { |k, _v| k =~ /\A[A-Za-z0-9\-_]+\z/ }

```

