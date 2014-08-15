if (this.Hash) Hash.prototype.inspect = function() {
  return this.constructor.name+Object.inspect(this._object);
};
