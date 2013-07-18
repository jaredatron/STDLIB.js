//= require "Object/isNumber"

function Arguments() {
  if (this instanceof arguments.callee)
    throw new TypeError('Illegal constructor');

  var sum=[], source, i, sum_length, source_length;

  for (i = 0; i < arguments.length; i++) {
    source = arguments[i];
    if (!Object.isNumber(source.length))
        throw TypeError('expected '+source+' to be an enumerable');
    source_length = source.length;
    sum_length = sum.length;
    while (source_length--)
      sum[sum_length + source_length] = source[source_length];
  };

  return sum;
};
