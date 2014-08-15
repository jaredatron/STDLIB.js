if (!Array.prototype.includes) {
  Array.prototype.includes = function includes(object) {
    return this.indexOf(object) !== -1;
  };
}
