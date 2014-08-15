require 'stdlibjs'

class Stdlibjs::Cli

  def self.run
    new(ARGV)
  end

  def initialize argv
    binding.pry
    # command = argv.first
    # command ||= :list
    # if respond_to? command
    #   send(command)
    # else
    #   puts "unknown command #{command}"
    # end
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
