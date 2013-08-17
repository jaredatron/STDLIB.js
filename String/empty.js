/**
 *  String#empty() -> Boolean
 *
 *  Checks if the string is empty.
 *
 *  ##### Example
 *
 *      ''.empty();
 *      //-> true
 *
 *      '  '.empty();
 *      //-> false
**/
String.prototype.empty = function(pattern) {
  return this == '';
};
