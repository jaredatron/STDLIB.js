//= require "String/clone"
//= require "Number/clone"
//= require "Array/clone"
//= require "Function/clone"
//= require "Object/extendOwnProperties"
//= require "Object/extend"

Object.clone = function(object) {
  var prototype, clone, property;

  if (!Object.hasProperties(object)) return object;

  if (typeof object.clone === 'function') return object.clone();

  if (object.constructor && object.constructor.prototype && object instanceof object.constructor){
    console.log('crazy clone!', object);
    prototype = object.constructor.prototype;
    clone = Object.create(prototype);
    for (property in object)
      if (object[property] !== prototype[property])
        clone[property] = object[property];
    return clone;
  }

  console.log('basic extend!', object);

  return Object.extend({}, object);
};
