//= require "isNaN"

Object.type = function(object) {
  if ((function(){ return this; })() === object) return 'global';
  if (isNaN(object)) return 'NaN';
  return Object.prototype.toString.call(object).slice(8,-1)
};

