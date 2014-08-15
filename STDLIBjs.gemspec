# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'stdlibjs/version'

Gem::Specification.new do |spec|
  spec.name          = "stdlibjs"
  spec.version       = Stdlibjs::VERSION
  spec.authors       = ["Jared Grippe"]
  spec.email         = ["jared@deadlyicon.com"]
  spec.description   = %q{Stdlib.js}
  spec.summary       = %q{Stdlib.js}
  spec.homepage      = ""
  spec.license       = "MIT"

  spec.files         = `git ls-files`.split($/)
  spec.executables   = spec.files.grep(%r{^bin/}) { |f| File.basename(f) }
  spec.test_files    = spec.files.grep(%r{^(test|spec|features)/})
  spec.require_paths = ["lib"]

  spec.add_dependency "sprockets"

  spec.add_development_dependency "bundler"
  spec.add_development_dependency "rake"

end
