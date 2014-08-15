if (!Array.prototype.includesAny) {
  Array.prototype.includesAny = function includesAny(enumerable) {
    return enumerable.any(function(){
      return this.indexOf(object) !== -1;
    });
  };
}
