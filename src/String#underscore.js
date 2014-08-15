/**
 *  String#underscore() -> String
 *
 *  Converts a camelized string into a series of words separated by an
 *  underscore (`_`).
 *
 *  ##### Example
 *
 *      'borderBottomWidth'.underscore();
 *      // -> 'border_bottom_width'
 *
 *  ##### Note
 *
 *  Used in conjunction with [[String#dasherize]], [[String#underscore]]
 *  converts a DOM style into its CSS equivalent.
 *
 *      'borderBottomWidth'.underscore().dasherize();
 *      // -> 'border-bottom-width'
**/
String.prototype.underscore = function() {
  return this
    .replace(/::/g, '/')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
    .replace(/([a-z\d])([A-Z])/g, '$1_$2')
    .replace(/-/g, '_')
    .toLowerCase();
};
