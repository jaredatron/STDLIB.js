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
    @to_s ||= sprockets.find_asset('build.js').to_s
  end

  def sprockets
    return @sprockets if defined? @sprockets
    @sprockets = Sprockets::Environment.new(Stdlibjs.root)
    @sprockets.append_path 'lib/stdlibjs/compiler/javascripts'
    @sprockets.append_path Stdlibjs.src
    @sprockets.class.class_eval{
      attr_accessor :libraries, :comment
    }
    @sprockets.libraries = libraries
    @sprockets.comment = comment
    @sprockets
  end

  def dependencies_for library
    sprockets.find_asset(library).dependencies.map do |dependency|
      dependency.pathname.relative_path_from(Stdlibjs.src).to_s.sub(/\.js$/,'')
    end
  end

end
