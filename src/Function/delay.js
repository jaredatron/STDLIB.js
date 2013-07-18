//= require "DelayedFunctionCall"

Function.prototype.delay = function(delay) {
  return new DelayedFunctionCall(this, delay);
};

