//= require "Object/inspect"

Object.inspectProperties = function(object){
  var p, value, sets = [];

  for (p in object)
    if (object.hasOwnProperty(p))
      sets.push(Object.inspect(p)+': '+Object.inspect(object[p]));

  value = '{'+sets.join(', ')+'}';

  if (object.constructor && object.constructor !== Object && object.constructor.name)
    value = object.constructor.name+value;

  return value;
};
