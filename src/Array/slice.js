if (!Array.slice){
  Array.slice = function(enumerable,a,b){
    return Array.prototype.slice.call(enumerable,a,b)
  }
}
