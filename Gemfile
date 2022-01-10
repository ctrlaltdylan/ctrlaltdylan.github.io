# use ruby 2.6.6
source "https://rubygems.org"

gem 'jekyll', '3.9.0'

require 'json'
require 'open-uri'
# require 'pry'
versions = JSON.parse(open('https://pages.github.com/versions.json').read)
gem "kramdown-parser-gfm"

group :jekyll_plugins do
  gem 'jekyll-paginate'
  gem 'jekyll-sitemap'
end
gem 'jekyll-redirect-from'

