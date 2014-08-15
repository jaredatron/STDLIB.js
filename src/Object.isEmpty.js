//= require Object.isObject

Object.isEmpty = function(object) {
  if (!Object.isObject(object)) return false;
  for (var p in object) return false;
  return true;
};
