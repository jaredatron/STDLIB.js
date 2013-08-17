/** related to: Object.inspect
 *  String#inspect() -> String
 *
 *  Returns a debug-oriented version of the string (i.e. wrapped in single or
 *  double quotes, with backslashes and quotes escaped).
 *
 *  For more information on `inspect` methods, see [[Object.inspect]].
 *
 *  #### Examples
 *
 *      'I\'m so happy.'.inspect();
 *      // -> '\'I\\\'m so happy.\''
 *      // (displayed as 'I\'m so happy.' in an alert dialog or the console)
 *
 *      'I\'m so happy.'.inspect(true);
 *      // -> '"I'm so happy."'
 *      // (displayed as "I'm so happy." in an alert dialog or the console)
**/
String.prototype.inspect = function() {
  var specialChar = {
    '\b': '\\b',
    '\t': '\\t',
    '\n': '\\n',
    '\f': '\\f',
    '\r': '\\r',
    '\\': '\\\\'
  }

  var escapedString = this.replace(/[\x00-\x1f\\]/g, function(character) {
    if (character in specialChar) return specialChar[character];
    return '\\u00' + character.charCodeAt().toPaddedString(2, 16);
  });
  return '"' + escapedString.replace(/"/g, '\\"') + '"';
}
