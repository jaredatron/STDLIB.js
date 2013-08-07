Object.isEmpty = function(object) {
  for (var p in object) return false;
  return true;
};
