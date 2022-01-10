# use ruby 2.6.6
source "https://rubygems.org"

# gem "jekyll"

gem 'jekyll', '3.9.0'

require 'json'
require 'open-uri'
# require 'pry'
versions = JSON.parse(open('https://pages.github.com/versions.json').read)
# for drafting via cli
# gem 'jekyll-compose', group: [:jekyll_plugins]
# gem 'jekyll-admin', group: :jekyll_plugins

group :jekyll_plugins do
  gem 'jekyll-paginate'
  gem 'jekyll-sitemap'
end

gem 'jekyll-redirect-from'
gem "kramdown-parser-gfm"
