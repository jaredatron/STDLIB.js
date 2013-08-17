Object.toArray = function(object) {
  var array = [];
  for (var i = object.length - 1; i >= 0; i--) {
    array[i] = object[i]
  };
  return array;
};
