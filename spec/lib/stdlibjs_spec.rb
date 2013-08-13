require 'spec_helper'
require 'stdlibjs'

describe Stdlibjs do
  gem_root = File.expand_path('../../../',__FILE__)

  describe ".rem_root" do
    it "should return #{gem_root}" do
      expect(Stdlibjs.gem_root).to eq Pathname(gem_root)
    end
  end

  describe ".relative_javascripts_path" do
    it "should return 'app/assets/javascripts'" do
      expect(Stdlibjs.relative_javascripts_path).to eq 'app/assets/javascripts'
    end
  end

  describe ".javascripts_path" do
    it "should return #{gem_root+'app/assets/javascripts'}" do
      expect(Stdlibjs.javascripts_path).to eq Pathname(gem_root)+'app/assets/javascripts'
    end
  end

  describe ".libraries" do
    it "should return a list of all the libraies" do
      expected_libraries = Dir['src/**/*.js'].map{|p|
        p.split('src/').last.sub(/\.js$/,'')
      }.to_set
      expect(Stdlibjs.libraries).to eq expected_libraries
    end
  end

end
