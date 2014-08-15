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


  def self.compile
    puts Compiler.new.compile
  end

end

require "stdlibjs/rails" if defined? Rails
