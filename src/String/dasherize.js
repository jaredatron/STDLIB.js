/** related to: Object.inspect
 *  String#inspect([useDoubleQuotes = false]) -> String
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
String.prototype.dasherize = function() {
  return this.replace(/_/g, '-');
};
