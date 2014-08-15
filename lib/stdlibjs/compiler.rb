require 'stdlibjs'
require 'sprockets'

class Stdlibjs::Compiler

  def self.compile options={}
    new(options).to_s
  end

  def initialize options={}
    @libraries = options[:libraries]
  end

  def libraries
    @libraries ||= Stdlibjs.libraries
  end

  def dependencies
    @dependencies ||= libraries.map do |library|
      dependencies_for library
    end.flatten.uniq.sort
  end

  def all_libraries
    @all_libraries ||= libraries + dependencies
  end

  def comment
    @comment ||= <<-JS.gsub(/^      /,'')
      /* Stdlib.js
       *
       * requested:
       *   #{libraries.to_a.sort.join("\n       *   ")}
       *
       * included:
       *   #{all_libraries.to_a.sort.join("\n       *   ")}
       *
       */
    JS
  end

  def to_s
    @to_s ||= asset.to_s
  end

  def asset
    sprockets.libraries = libraries
    sprockets.comment = comment
    sprockets.find_asset('build.js')
  end

  def sprockets
    return @sprockets if defined? @sprockets
    @sprockets = Sprockets::Environment.new(Stdlibjs.root)
    @sprockets.append_path 'lib/stdlibjs/compiler/javascripts'
    @sprockets.append_path Stdlibjs.src
    @sprockets.class.class_eval{
      attr_accessor :libraries, :comment
    }
    @sprockets
  end

  def dependencies_for library
    sprockets.find_asset(library).dependencies.map do |dependency|
      dependency.pathname.relative_path_from(Stdlibjs.src).to_s.sub(/\.js$/,'')
    end
  end

end

















if false

  def self.javascripts_path
    Stdlibjs.javascripts_path
  end

  def initialize options
    @download_url = options[:download_url]
    @libraries = options.fetch(:libraries).to_set
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
    [Stdlibjs.javascripts_path, self.class.javascripts_path]
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
