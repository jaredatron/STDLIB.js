if (!Array.prototype.includesAll) {
  Array.prototype.includesAll = function includesAll(enumerable) {
    return enumerable.all(function(){
      return this.indexOf(object) !== -1;
    });
  };
}
