require 'sinatra/base'
require 'pry'
require 'stdlibjs/spec_compiler'

class SpecServer < Sinatra::Base

  set :root, File.expand_path('../server', __FILE__)

  get '/' do
    begin
      @compiler = Stdlibjs::Compiler.new(libraries: libraries)
      erb :index
    rescue ArgumentError => error
      @error = error
      erb :error
    end
  end

  get '/build.js' do
    content_type 'application/javascript'
    Stdlibjs::Compiler.new(libraries: libraries).source
  end

  get '/specs.js' do
    content_type 'application/javascript'
    Stdlibjs::SpecCompiler.new(libraries: libraries).source
  end

  helpers do

    def query_string
      request.env['QUERY_STRING']
    end

    def libraries
      return @libraries if defined? @libraries
      @libraries = params.keys.to_set - Set['spec']
      @libraries = Stdlibjs.libraries if @libraries.empty?
      @libraries
    end

  end

end
