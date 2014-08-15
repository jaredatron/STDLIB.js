/**
 *  String#blank() -> Boolean
 *
 *  Check if the string is "blank" &mdash; either empty (length of `0`) or
 *  containing only whitespace.
 *
 *  ##### Example
 *
 *      ''.blank();
 *      //-> true
 *
 *      '  '.blank();
 *      //-> true
 *
 *      ' a '.blank();
 *      //-> false
**/
String.prototype.blank = function(pattern) {
  return /^\s*$/.test(this);
};
