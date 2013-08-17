Function.prototype.new = function() {
  var instance = Object.create(this.prototype)
  this.apply(instance, arguments);
  return instance;
};
