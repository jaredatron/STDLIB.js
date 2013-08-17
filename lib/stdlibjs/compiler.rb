require 'stdlibjs'
require 'sprockets'

class Stdlibjs::Compiler

  def self.javascripts_path
    Stdlibjs.gem_root
  end

  def initialize options={}
    @download_url = options[:download_url]
    @libraries = options.fetch(:libraries){ Stdlibjs.libraries }.to_set
    if libraries.empty?
      raise ArgumentError, "libraries cannot be empty"
    end
    unless invalid_libraries.empty?
      raise ArgumentError, invalid_libraries.length > 1 ?
        "#{invalid_libraries.join(', ')} are invalid libraries" :
        "#{invalid_libraries.first} is an invalid library"
    end
  end

  attr_accessor :libraries

  def comment
    @comment ||= <<-JS.gsub(/^      /,'')
      /* Stdlib.js
       *
       * #{@download_url}
       *
       * includes:
       *   #{libraries.to_a.sort.join("\n       *   ")}
       *
       */
    JS
  end

  def resolved_libraries
    asset.dependencies.map do |asset|
      asset.pathname.relative_path_from(self.class.javascripts_path).to_s.sub(/\.js$/,'')
    end.to_set
  end

  def source
    asset.source
  end

  private

  def sprockets_paths
    [self.class.javascripts_path]
  end

  def asset
    @asset ||= begin
      @sprockets_env = Sprockets::Environment.new(Stdlibjs.gem_root)
      @sprockets_env.append_path 'lib/stdlibjs/compiler/javascripts'
      @sprockets_env.append_path self.class.javascripts_path
      @sprockets_env.class.class_eval{
        attr_accessor :libraries, :comment
      }
      @sprockets_env.libraries = libraries
      @sprockets_env.comment = comment
      @sprockets_env.find_asset('build.js')
    end
  end

  def invalid_libraries
    @invalid_libraries ||= libraries.reject do |library|
      self.class.javascripts_path.join(library+'.js').file?
    end
  end

end
