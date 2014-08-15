/**
 *  String#startsWith(substring[, position]) -> Boolean
 *  - substring (String): The characters to be searched for at the start of
 *    this string.
 *  - [position] (Number): The position in this string at which to begin
 *    searching for `substring`; defaults to 0.
 *
 *  Checks if the string starts with `substring`.
 *
 *  `String#startsWith` acts as an ECMAScript 6 [polyfill](http://remysharp.com/2010/10/08/what-is-a-polyfill/).
 *  It is only defined if not already present in the user's browser, and it
 *  is meant to behave like the native version as much as possible. Consult
 *  the [ES6 specification](http://wiki.ecmascript.org/doku.php?id=harmony%3Aspecification_drafts) for more
 *  information.
 *
 *  ##### Example
 *
 *      'Prototype JavaScript'.startsWith('Pro');
 *      //-> true
 *      'Prototype JavaScript'.startsWith('Java', 10);
 *      //-> true
**/
String.prototype.startsWith = function(pattern, position) {
  position = Object.isNumber(position) ? position : 0;
  // We use `lastIndexOf` instead of `indexOf` to avoid tying execution
  // time to string length when string doesn't start with pattern.
  return this.lastIndexOf(pattern, position) === position;
}
