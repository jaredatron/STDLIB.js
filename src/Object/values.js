Object.values = function(object) {
  var results = [];
  for (var property in object)
    results.push(object[property]);
  return results;
};
