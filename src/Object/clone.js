//= require "String/clone"
//= require "Number/clone"
//= require "Array/clone"
//= require "Function/clone"
//= require "Object/extend"
//= require "Object/isFunction"

Object.clone = function(object) {
  var prototype, clone, property;

  if (!Object.hasProperties(object)) return object;

  if (typeof object.clone === 'function') return object.clone();

  if (
    Object.isFunction(object.constructor) &&
    object.constructor !== Object &&
    object instanceof object.constructor
    ){
    prototype = object.constructor.prototype;
    clone = Object.create(prototype);
    for (property in object)
      if (object[property] !== prototype[property])
        clone[property] = object[property];
    return clone;
  }

  return Object.extend({}, object);
};
