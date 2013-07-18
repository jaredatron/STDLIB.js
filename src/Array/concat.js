//= require "Array/clone"

if ((function() {
    return [].concat(arguments)[0][0] !== 1;
  })(1,2)){

  Array.prototype.concat = function() {
    var array = this.clone(), item;
    for (var i = 0, length = arguments.length; i < length; i++) {
      item = arguments[i];
      if (Object.isArray(item) && !('callee' in item)) {
        for (var j = 0, arrayLength = item.length; j < arrayLength; j++)
          array.push(item[j]);
      } else {
        array.push(item);
      }
    }
    return array;
  };

};
