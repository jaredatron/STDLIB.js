require('../STDLIB/isNode');
require('../Object/isUndefined');
require('../Object/isNull');
require('../Object/isArguments');
require('../Object/isFunction');
require('../Object/inspectProperties');

Object.inspect = function(object) {
  try {
    if (arguments.length === 0){
      return Function.prototype.inspect.call(this);
    }
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
    return Object.inspectProperties(object);
  } catch (e) {
    if (e instanceof RangeError) return '...';
    throw e;
  }
};
