//= require "Object/type"

Object.isFunction = function(object) {
  return Object.type(object) === 'Function';
};
