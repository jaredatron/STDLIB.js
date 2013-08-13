require 'spec_helper'
require 'stdlibjs/compiler'

describe Stdlibjs::Compiler do

  it_behaves_like "a compiler"

  describe ".javascripts_path" do
    it "should return the full path to the compiler javascripts" do
      expect(described_class.javascripts_path).to eq Stdlibjs.javascripts_path
    end
  end

  describe "#libraries" do
    it "should return the given libraries plus the required_libraries" do
      compiler = described_class.new libraries: %w[Array/clear]
      expect(compiler.libraries).to eq Set['Array/clear']

      compiler = described_class.new libraries: Stdlibjs.libraries
      expect(compiler.libraries).to eq Stdlibjs.libraries
    end
  end

  describe "#resolved_libraries" do
    it "should return a list of all the included libraries" do
      compiler = described_class.new libraries: %w[Arguments]
      expect(compiler.resolved_libraries).to eq Set[
        "STDLIB",
        "STDLIB/global",
        "Object/isNaN",
        "Object/type",
        "Object/isNumber",
        "Arguments"
      ]

      compiler = described_class.new libraries: Stdlibjs.libraries
      expect(compiler.libraries).to eq Stdlibjs.libraries
    end
  end

  describe "#source" do
    it "should return the source including the given libraries" do
      compiler = described_class.new libraries: %w[Array/clear]
      expect(compiler.source).to include 'Array.prototype.clear = '
      expect(compiler.source.split($/).length).to be_within(40).of(50)

      compiler = described_class.new libraries: Stdlibjs.libraries
      expect(compiler.source.split($/).length).to be_within(1000).of(2000)
    end
  end

end
