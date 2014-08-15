/**
 *  String#camelize() -> String
 *
 *  Converts a string separated by dashes into a camelCase equivalent. For
 *  instance, `'foo-bar'` would be converted to `'fooBar'`.
 *
 *  Prototype uses this internally for translating CSS properties into their
 *  DOM `style` property equivalents.
 *
 *  ##### Examples
 *
 *      'background-color'.camelize();
 *      // -> 'backgroundColor'
 *
 *      '-moz-binding'.camelize();
 *      // -> 'MozBinding'
**/
String.prototype.camelize = function() {
  return this.replace(/(?:^|_+)(.)?/g, function(match, chr) {
    return chr ? chr.toUpperCase() : '';
  });
};
