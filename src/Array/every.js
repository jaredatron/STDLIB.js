require('STDLIB/toObject');
require('STDLIB/splitString');

// ES5 15.4.4.16
// http://es5.github.com/#x15.4.4.16
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/every
if (!Array.prototype.every) {
  Array.prototype.every = function every(fun /*, thisp */) {
    var object = STDLIB.toObject(this),
      self = STDLIB.splitString && _toString(this) == "[object String]" ?
        this.split("") :
        object,
      length = self.length >>> 0,
      thisp = arguments[1];

    // If no callback function or if callback is not a callable function
    if (_toString(fun) != "[object Function]") {
      throw new TypeError(fun + " is not a function");
    }

    for (var i = 0; i < length; i++) {
      if (i in self && !fun.call(thisp, self[i], i, object)) {
        return false;
      }
    }
    return true;
  };
}
