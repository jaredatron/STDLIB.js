Function.prototype.clone = function() {
  var method = this;
  return function(){
    return method.apply(this, arguments);
  };
};
