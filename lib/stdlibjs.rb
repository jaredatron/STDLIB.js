require "stdlibjs/version"
require "pathname"

module Stdlibjs


  autoload :Compiler, "stdlibjs/compiler"

  def self.gem_root
    @root ||= Pathname(File.expand_path('../../', __FILE__))
  end

  def self.spec_path
    @spec_path ||= Stdlibjs.gem_root+'spec'
  end

  def self.source_files
    @source_files ||= begin
      @source_files = gem_root.join('source_files.txt').read.split(/\n/)
      @source_files.map!{|p| Stdlibjs.gem_root.join(p).to_s }
      @source_files = Dir[*@source_files]
      @source_files.map!(&method(:Pathname))
    end
  end

  def self.spec_files
    @spec_files ||= source_files.map do |path|
      relative_path = path.relative_path_from(gem_root)
      gem_root.join 'spec', relative_path.to_s.sub(/\.js/, '.spec.js')
    end
  end

  # def self.relative_src_path
  #   'src'
  # end

  # def self.relative_javascripts_path
  #   'app/assets/javascripts'
  # end

  # def self.src_path
  #   @src_path ||= gem_root + relative_src_path
  # end

  # def self.javascripts_path
  #   @javascripts_path ||= gem_root + relative_javascripts_path
  # end
  # singleton_class.send :alias_method, :path, :javascripts_path

  def self.libraries
    source_files.map do |path|
      path.relative_path_from(gem_root).to_s.sub(/\.js$/,'')
    end.to_set
  end

  def self.generate_sprockets_compatible_src_files!
    to_files_path = javascripts_path
    to_files_path.rmtree if to_files_path.exist?

    source_files.each do |src_file|
      from = Pathname(src_file)
      path = from.relative_path_from(gem_root)
      to   = to_files_path + path
      dir  = to.dirname
      dir.mkdir unless dir.exist?
      source = from.read
      source.gsub!(%r{require\('(.+)'\);?}, '//= require \'\1\'')
      to.open('w'){|file| file.write source }
    end
  end

end

# Stdlibjs.generate_sprockets_compatible_src_files!

require "stdlibjs/rails" if defined? Rails
