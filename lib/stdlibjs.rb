require "stdlibjs/version"
require "pathname"

module Stdlibjs

  autoload :Compiler, "stdlibjs/compiler"

  def self.gem_root
    @root ||= Pathname(File.expand_path('../../', __FILE__))
  end

  def self.relative_javascripts_path
    'src'
  end

  def self.javascripts_path
    @javascripts_path ||= gem_root + relative_javascripts_path
  end

  def self.libraries
    @libraries ||= Dir[javascripts_path+'**/*.js'].map do |path|
      Pathname(path).relative_path_from(javascripts_path).to_s.sub(/\.js$/,'')
    end.to_set
  end

end

require "stdlibjs/rails" if defined? Rails
