//= require "Object/isUndefined"

Object.inspect = function(object) {
  try {
    if (Object.isUndefined(object)){
      return 'undefined';
    }
    if (Object.isNull(object)){
      return 'null';
    }
    if (Object.isArguments(object)){
      return 'Arguments'+Array.slice(object).inspect();
    }
    if (Object.isFunction(object.inspect)){
      return object.inspect();
    }
    return String(object);

  } catch (e) {
    if (e instanceof RangeError) return '...';
    throw e;
  }
};
