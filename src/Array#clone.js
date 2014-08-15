//= require Object.isNull

if (!Array.prototype.clone) {
  Array.prototype.clone = function() {
    return this.slice(0);
  };
}
