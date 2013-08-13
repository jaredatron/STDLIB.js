require "stdlibjs/version"
require "pathname"

module Stdlibjs

  autoload :Compiler, "stdlibjs/compiler"

  def self.gem_root
    @root ||= Pathname(File.expand_path('../../', __FILE__))
  end

  def self.relative_src_path
    'src'
  end

  def self.relative_javascripts_path
    'app/assets/javascripts'
  end

  def self.src_path
    @src_path ||= gem_root + relative_src_path
  end

  def self.javascripts_path
    @javascripts_path ||= gem_root + relative_javascripts_path
  end
  singleton_class.send :alias_method, :path, :javascripts_path

  def self.libraries
    @libraries ||= Dir[javascripts_path+'**/*.js'].map do |path|
      Pathname(path).relative_path_from(javascripts_path).to_s.sub(/\.js$/,'')
    end.to_set
  end

  def self.generate_sprockets_compatible_src_files!
    from_files_path = src_path
      to_files_path = javascripts_path

    to_files_path.rmtree if to_files_path.exist?

    src_files = Dir[from_files_path+'**/*.js']

    src_files.each do |src_file|
      from = Pathname(src_file)
      path = from.relative_path_from(from_files_path)
      to   = to_files_path + path
      dir  = to.dirname
      dir.mkdir unless dir.exist?
      source = from.read
      source.gsub!(%r{require\('(.+)'\);?}, '//= require \'\1\'')
      to.open('w'){|file| file.write source }
    end
  end

end

Stdlibjs.generate_sprockets_compatible_src_files!

require "stdlibjs/rails" if defined? Rails
