require 'spec_helper'
require 'server'

describe "JavaScript specs" do

  let(:page){ Capybara::Session.new(:selenium, SpecServer) }

  it "should all pass" do
    page.visit '/'
    Timeout::timeout(20) do
      while results.nil?
        raise page.evaluate_script('document.body.innerHTML') if page.text.include? 'ERROR: '
        sleep 0.25
      end
    end

    unless results['passed']
      specs = specs_for(results).reject{|spec| spec["passed"] }
      failures = specs.map{ |spec| "  "+ spec["description"] }.join("\n")
      raise "The following Javascript specs failed:\n#{failures}\n\n#{page.text}"
    end
  end

  def results
    return @results unless @results.nil?
    @results = page.evaluate_script 'jasmine.results' rescue return nil
    @results = JSON.parse(@results) unless @results.nil?
  end

  def specs_for(suite)
    specs = suite["specs"] || []
    suite["suites"].each do |suite|
      specs += specs_for(suite)
    end
    specs.each do |spec|
      spec["description"] = %{#{suite["description"]} #{spec["description"]}}
    end
    return specs
  end

end
