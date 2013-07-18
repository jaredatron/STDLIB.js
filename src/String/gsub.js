String.prototype.gsub = function(pattern, replacement) {
  var result = '', source = this, match, replacer;

  replacer = Object.isFunction(replacement) ?
    replacement :
    function(){ return replacement };

  if (Object.isString(pattern))
    pattern = RegExp.escape(pattern);

  while (source.length > 0) {
    if (match = source.match(pattern)) {
      result += source.slice(0, match.index);
      result += replacer(match);
      source  = source.slice(match.index + match[0].length);
    } else {
      result += source;
      source = '';
    }
  }
  return result;
};
