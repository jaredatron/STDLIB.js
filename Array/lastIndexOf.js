require('../STDLIB/toObject');
require('../STDLIB/toInteger');

// ES5 15.4.4.15
// http://es5.github.com/#x15.4.4.15
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/lastIndexOf
if (!Array.prototype.lastIndexOf || ([0, 1].lastIndexOf(0, -3) != -1)) {
  Array.prototype.lastIndexOf = function lastIndexOf(sought /*, fromIndex */) {
    var self = splitString && _toString(this) == "[object String]" ?
        this.split("") :
        STDLIB.toObject(this),
      length = self.length >>> 0;

    if (!length) {
      return -1;
    }
    var i = length - 1;
    if (arguments.length > 1) {
      i = Math.min(i, STDLIB.toInteger(arguments[1]));
    }
    // handle negative indices
    i = i >= 0 ? i : length - Math.abs(i);
    for (; i >= 0; i--) {
      if (i in self && sought === self[i]) {
        return i;
      }
    }
    return -1;
  };
}
