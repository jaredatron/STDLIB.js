require 'capybara'
require 'capybara/dsl'
require 'pry'

Capybara.register_driver :selenium do |app|
  Capybara::Selenium::Driver.new(app, browser: :chrome)
end

Capybara.ignore_hidden_elements = true
Capybara.javascript_driver      = ENV['SELENIUM'] == 'true' ? :selenium : :webkit
Capybara.default_driver         = Capybara.javascript_driver
Capybara.default_selector       = :css
Capybara.default_wait_time      = 5

Dir[Bundler.root+'spec/support/**/*.rb'].each(&method(:require))

RSpec.configure do |config|
  config.order = "random"
end
