require("Function/delay");

Function.prototype.defer = function(timeout) {
  return this.delay();
};
