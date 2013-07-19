# STDLIB.js


STDLIB.js is a collection of commonly desired polyfills and additions that extend native JavaScript objects.

Most of STDLIB.js has been heavily borrowed from or inspired by the following libraries:

  * [prototype.js](http://prototypejs.org/)
  * [es5-shim.js](https://github.com/kriskowal/es5-shim/)


## WARNING

__This is some serious BETA software__. All of code borrowed has not had it's tests ported yet and there is no documentation to speak of. That said I am actively working on this so I should have an rc1 out soon.


## STDLIB.js is also a Ruby GEM

### Why?

STDLIB.js uses Sprockets to build any combination of libraries available within it. Because we use sprockets you can include the the `stdlibjs` gem into any rails project that uses Sprockets and require the libraries at will.


## Usage

### Stand alone

Go to [stdlibjs.com](http://stdlibjs.com), select that libraries you want, build and download.

### Rails

Add this line to your application's Gemfile:

    gem 'stdlibjs'

Add something like this to any JavaScript asset

    //= require 'Array/include'

### Command line


Install the gem:

    gem install stdlibjs

And build away:

    stdlibjs build Array/include Function/clone Number/times


## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## TODO

* Finish porting / writing all of the tests
* Come up with some form of documentation to be available at [stdlibjs.com](http://stdlibjs.com)
