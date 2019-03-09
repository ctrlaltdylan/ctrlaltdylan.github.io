# A sample Gemfile
source "https://rubygems.org"

gem "jekyll"

require 'json'
require 'open-uri'
# require 'pry'
versions = JSON.parse(open('https://pages.github.com/versions.json').read)
# for drafting via cli
gem 'jekyll-compose', group: [:jekyll_plugins]

gem 'github-pages', versions['github-pages']
