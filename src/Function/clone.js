Function.prototype.clone = function() {
  var _function = this;
  return function(){
    return _function.apply(this, arguments);
  };
};
