//= require "Array/forEach"

if (!Array.prototype.eachWithObject){
  Array.prototype.eachWithObject = function(object, iterator, context) {
    this.forEach(function(item, index){
      return iterator.call(this, item, object, index);
    }, context);
    return object;
  };
}
