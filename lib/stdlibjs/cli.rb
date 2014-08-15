require 'stdlibjs'

class Stdlibjs::Cli

  def self.run
    new(ARGV)
  end

  def initialize argv
    command = argv.shift
    command ||= :list
    if respond_to? command
      send(command, *argv)
    else
      puts "unknown command #{command}"
    end
  end

  def console
    require 'pry'
    Pry.start
  end

  def compile *libraires
    puts Stdlibjs.compile(libraires)
  end

  def list
    Stdlibjs.libraries.each do |library|
      puts library
    end
  end

  def list_paths
    Stdlibjs.library_paths.each do |library|
      puts library
    end
  end

end
