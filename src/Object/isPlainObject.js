//= require "Object/hasOnlyOwnProperties"
//= require "Object/isObject"
//= require "Object/isPrototype"

Object.isPlainObject = function(object) {
  return(
    // Object.isObject(object) &&
    Object.hasOnlyOwnProperties(object) &&
    (object.constructor === Object || !(object instanceof object.constructor)) &&
    !Object.isPrototype(object)
  );
};
