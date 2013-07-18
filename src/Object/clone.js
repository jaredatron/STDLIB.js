//= require "Array/clone"
//= require "Function/clone"

Object.clone = function(object) {
  if (!object) return object;

  if (typeof object.clone === 'function'){
    return object.clone();
  }

  if (object.constructor && object.constructor.prototype){
    return Object.extendOwnProperties(Object.create(object.constructor.prototype), object)
  }

  return Object.extend({}, object);
};
