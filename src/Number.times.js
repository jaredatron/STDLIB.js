/**
 *  Number#times(iterator) -> Number
 *  - iterator (Function): The function to use as a iterator.
**/
Number.prototype.times = function(handler) {
  var index = 0;
  while(index < this) handler(index++);
  return this
};
