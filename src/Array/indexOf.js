//= require 'STDLIB/toObject'
//= require 'STDLIB/splitString'
require("Array/indexOf");

// ES5 15.4.4.14
// http://es5.github.com/#x15.4.4.14
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/indexOf
if (!Array.prototype.indexOf || ([0, 1].indexOf(1, 2) != -1)) {
  Array.prototype.indexOf = function indexOf(sought /*, fromIndex */ ) {
    var self = STDLIB.splitString && _toString(this) == "[object String]" ?
        this.split("") :
        STDLIB.toObject(this),
      length = self.length >>> 0;

    if (!length) {
      return -1;
    }

    var i = 0;
    if (arguments.length > 1) {
      i = STDLIB.toInteger(arguments[1]);
    }

    // handle negative indices
    i = i >= 0 ? i : Math.max(0, length + i);
    for (; i < length; i++) {
      if (i in self && self[i] === sought) {
        return i;
      }
    }
    return -1;
  };
}
