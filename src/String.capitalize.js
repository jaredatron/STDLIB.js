/**
 *  String#capitalize() -> String
 *
 *  Capitalizes the first letter of a string and downcases all the others.
 *
 *  ##### Examples
 *
 *      'hello'.capitalize();
 *      // -> 'Hello'
 *
 *      'HELLO WORLD!'.capitalize();
 *      // -> 'Hello world!'
**/
String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() +
    this.substring(1).toLowerCase();
};
