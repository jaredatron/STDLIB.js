//= require "Arguments"

Function.prototype.methodize = function() {
  if (this._methodized) return this._methodized;
  var _function = this;
  return this._methodized = function() {
    return _function.apply(this, Arguments([this], arguments));
  };
};
