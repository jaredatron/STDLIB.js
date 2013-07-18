//= require "Arguments"

Function.prototype.curry = function() {
  var _function = this, args = arguments;
  return function() {
    return _function.apply(this, Arguments(args, arguments));
  }
}
