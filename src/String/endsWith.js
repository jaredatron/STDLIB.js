//= require "Object/isNumber"

/**
 *  String#endsWith(substring[, position]) -> Boolean
 *  - substring (String): The characters to be searched for at the end of
 *    this string.
 *  - [position] (Number): Search within this string as if this string were
 *    only this long; defaults to this string's actual length, clamped
 *    within the range established by this string's length.
 *
 *  Checks if the string ends with `substring`.
 *
 *  `String#endsWith` acts as an ECMAScript 6 [polyfill](http://remysharp.com/2010/10/08/what-is-a-polyfill/).
 *  It is only defined if not already present in the user's browser, and it
 *  is meant to behave like the native version as much as possible. Consult
 *  the [ES6 specification](http://wiki.ecmascript.org/doku.php?id=harmony%3Aspecification_drafts) for more
 *  information.
 *
 *  ##### Example
 *
 *      'slaughter'.endsWith('laughter')
 *      // -> true
 *      'slaughter'.endsWith('laugh', 6)
 *      // -> true
**/
String.prototype.endsWith = function(pattern, position) {
  pattern = String(pattern);
  position = Object.isNumber(position) ? position : this.length;
  if (position < 0) position = 0;
  if (position > this.length) position = this.length;
  var d = position - pattern.length;
  // We use `indexOf` instead of `lastIndexOf` to avoid tying execution
  // time to string length when string doesn't end with pattern.
  return d >= 0 && this.indexOf(pattern, d) === d;
}
