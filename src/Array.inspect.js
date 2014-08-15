Array.prototype.inspect = function() {
  return '[' + this.map(Object.inspect).join(', ') + ']';
};
