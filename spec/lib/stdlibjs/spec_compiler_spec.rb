require 'spec_helper'
require 'stdlibjs/spec_compiler'

describe Stdlibjs::SpecCompiler do

  it_behaves_like "a compiler"

  describe ".javascripts_path" do
    it "should return the full path to the compiler javascripts" do
      expect(described_class.javascripts_path).to eq \
        Stdlibjs.gem_root + 'spec/src'
    end
  end

  describe "#libraries" do
    it "should return the given libraries plus the required_libraries" do
      compiler = described_class.new libraries: %w[Array/clear]
      expect(compiler.libraries).to eq Set['Array/clear.spec']

      compiler = described_class.new libraries: Stdlibjs.libraries
      expect(compiler.libraries).to eq plus_spec(Stdlibjs.libraries)
    end
  end

  describe "#resolved_libraries" do
    it "should return a list of all the included libraries" do
      compiler = described_class.new libraries: %w[Arguments]
      expect(compiler.resolved_libraries).to eq Set[
        "isNaN.spec", "Object/type.spec", "Object/isNumber.spec", "Arguments.spec"
      ]

      compiler = described_class.new libraries: Stdlibjs.libraries
      expect(compiler.libraries).to eq plus_spec(Stdlibjs.libraries)
    end
  end

  describe "#source" do
    it "should return the source including the given libraries" do
      compiler = described_class.new libraries: %w[Array/clear]
      expect(compiler.source).to include 'describe("Array#clear", function(){'
      expect(compiler.source.split($/).length).to be_within(40).of(50)

      compiler = described_class.new libraries: Stdlibjs.libraries
      expect(compiler.source.split($/).length).to be_within(200).of(500)
    end
  end

  def plus_spec(libraries)
    libraries.map{|x| x+'.spec' }.to_set
  end

end
