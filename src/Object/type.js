//= require "isNaN"

Object.type = function(object) {
  if (Object.type === object) return 'global';
  if (isNaN(object)) return 'NaN';
  return Object.prototype.toString.call(object).slice(8,-1)
};

Object.type.global = this;
