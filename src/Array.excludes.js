if (!Array.prototype.excludes) {
  Array.prototype.excludes = function excludes(object) {
    return this.indexOf(object) === -1;
  };
}
