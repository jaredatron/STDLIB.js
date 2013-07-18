//= require "Object/isString"
//= require "Object/isFunction"

if (!Array.prototype.forEach){
  //  https://github.com/kriskowal/es5-shim/blob/master/es5-shim.js
  Array.prototype.forEach || function(fun /*, thisp*/) {
    var object = STDLIB.toObject(this),
      self = STDLIB.splitString && Object.isString(this) ?
        this.split("") :
        object,
      thisp = arguments[1],
      i = -1,
      length = self.length >>> 0;

    // If no callback function or if callback is not a callable function
    if (!Object.isFunction(fun)) {
      throw new TypeError(fun+' is not a function');
    }

    while (++i < length) {
      if (i in self) {
        // Invoke the callback function with call, passing arguments:
        // context, property value, property key, thisArg object
        // context
        fun.call(thisp, self[i], i, object);
      }
    }
  };
}

