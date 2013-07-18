//= require "Object/type"

Object.isNumber = function(object) {
  return Object.type(object) === 'Number';
};
