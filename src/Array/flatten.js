require("Array/isArray");

if (!Array.prototype.flatten){
  Array.prototype.flatten = function() {
    return this.inject([], function(array, value) {
      if (Array.isArray(value))
        return array.concat(value.flatten());
      array.push(value);
      return array;
    });
  };
}
