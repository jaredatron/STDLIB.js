require('STDLIB');

// ES5 9.9
// http://es5.github.com/#x9.9
STDLIB.toObject = function (o) {
  if (o == null) { // this matches both null and undefined
    throw new TypeError("can't convert "+o+" to object");
  }
  return Object(o);
};
