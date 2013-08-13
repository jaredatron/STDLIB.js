require('../STDLIB');


STDLIB.toPrimitive = function(input) {
  var val, valueOf, toString;
  if (STDLIB.isPrimitive(input)) {
    return input;
  }
  valueOf = input.valueOf;
  if (typeof valueOf === "function") {
    val = valueOf.call(input);
    if (STDLIB.isPrimitive(val)) {
      return val;
    }
  }
  toString = input.toString;
  if (typeof toString === "function") {
    val = toString.call(input);
    if (STDLIB.isPrimitive(val)) {
      return val;
    }
  }
  throw new TypeError();
};

