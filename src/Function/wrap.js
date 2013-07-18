//= require "Object/toArray"

Function.prototype.wrap = function(wrapper) {
  var _function = this;
  return function(){
    return wrapper.call(this, _function, arguments);
  }
};
