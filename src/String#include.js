/**
 *  String#include(substring) -> Boolean
 *
 *  Checks if the string contains `substring`.
 *
 *  ##### Example
 *
 *      'Prototype framework'.include('frame');
 *      //-> true
 *      'Prototype framework'.include('frameset');
 *      //-> false
**/
String.prototype.include = function(pattern) {
  return this.indexOf(pattern) !== -1;
}
