require('../Object/type');

Object.isPrototype = function(object){
  return(
    Object.type(object) === 'Object' &&
    Object.prototype.hasOwnProperty.call(object, "constructor") &&
    object.constructor != null &&
    object.constructor.prototype === object
  );
};
