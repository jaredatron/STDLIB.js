Number.prototype.clone = function(handler) {
  return new this.constructor(this);
};
