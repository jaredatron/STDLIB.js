//= require "Object/hasOnlyOwnProperties"
//= require "Object/isObject"
//= require "Object/isPrototype"
//= require "Object/isFunction"

Object.isPlainObject = function(object) {
  return(
    Object.isObject(object) &&
    Object.hasOnlyOwnProperties(object) &&
    (!Object.isFunction(object.constructor) || object.constructor === Object || !(object instanceof object.constructor)) &&
    !Object.isPrototype(object)
  );
};
