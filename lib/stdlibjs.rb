require "stdlibjs/version"
require "pathname"

module Stdlibjs
  autoload :Compiler, "stdlibjs/compiler"

  def self.root
    @root ||= Pathname File.expand_path('../..', __FILE__)
  end

  def self.src
    @src ||= root.join('src')
  end

  def self.specs
    @specs ||= root.join('specs')
  end

  def self.library_paths
    @library_paths ||= Dir[src.join('**/*.js')].map do |path|
      Pathname(path)
    end.sort.freeze
  end

  def self.libraries
    @libraries ||= library_paths.map do |path|
      path.relative_path_from(src).to_s.sub(/\.js$/,'')
    end.sort.freeze
  end

  def self.compile(libraries=nil)
    Compiler.compile(libraries: libraries)
  end

  def self.path_for library
    src.join("#{library}.js")
  end

  def self.dependencies_for library, deep=false
    dependencies = []
    path_for(library).each_line do |line|
      dependency = line[%r{^//= require (.+)}, 1] or break
      dependencies << dependency
      dependencies += dependencies_for(dependency) if deep
    end
    dependencies.uniq
  end

  class Library
    def initialize name
      @name = name
    end
    attr_reader :name
    def path
      Stdlibjs.src.join("#{name}.js")
    end
  end

end

require "stdlibjs/rails" if defined? Rails
