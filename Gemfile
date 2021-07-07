# use ruby 2.6.6
source "https://rubygems.org"

# gem "jekyll"

gem 'jekyll', '3.8.7'
gem "s3_website"

require 'json'
require 'open-uri'
# require 'pry'
versions = JSON.parse(open('https://pages.github.com/versions.json').read)
# for drafting via cli
gem 'jekyll-compose', group: [:jekyll_plugins]
# gem 'jekyll-admin', group: :jekyll_plugins
group :jekyll_plugins do
  gem 'jekyll-paginate'
  gem 'jekyll-sitemap'
end
gem 'jekyll-redirect-from'

gem 'github-pages', versions['github-pages']
