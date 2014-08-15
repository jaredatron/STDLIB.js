//= require STDLIB.toObject
//= require STDLIB.splitString

// ES5 15.4.4.22
// http://es5.github.com/#x15.4.4.22
// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduceRight
if (!Array.prototype.reduceRight) {
  Array.prototype.reduceRight = function reduceRight(fun /*, initial*/) {
    var object = STDLIB.toObject(this),
      self = STDLIB.splitString && _toString(this) == "[object String]" ?
        this.split("") :
        object,
      length = self.length >>> 0;

    // If no callback function or if callback is not a callable function
    if (_toString(fun) != "[object Function]") {
      throw new TypeError(fun + " is not a function");
    }

    // no value to return if no initial value, empty array
    if (!length && arguments.length == 1) {
      throw new TypeError("reduceRight of empty array with no initial value");
    }

    var result, i = length - 1;
    if (arguments.length >= 2) {
      result = arguments[1];
    } else {
      do {
        if (i in self) {
          result = self[i--];
          break;
        }

        // if array contains no values, no initial value to return
        if (--i < 0) {
          throw new TypeError("reduceRight of empty array with no initial value");
        }
      } while (true);
    }

    if (i < 0) {
      return result;
    }

    do {
      if (i in this) {
        result = fun.call(void 0, result, self[i], i, object);
      }
    } while (i--);

    return result;
  };
}
