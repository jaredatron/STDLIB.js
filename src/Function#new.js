//= require Object.create

Function.prototype.new = function() {
  var instance = Object.create(this.prototype)
  var returnValue = this.apply(instance, arguments);
  return returnValue === undefined ? instance : returnValue;
};
