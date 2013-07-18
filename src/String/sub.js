//= require "String/gsub"

String.prototype.sub = function(pattern, replacement, count) {
  var replacer = Object.isFunction(replacement) ?
    replacement :
    function(){ return replacement };

  count = Object.isUndefined(count) ? 1 : count;

  return this.gsub(pattern, function(match) {
    if (--count < 0) return match[0];
    return replacer(match);
  });
}
