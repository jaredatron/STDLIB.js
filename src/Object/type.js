require('Object/isNaN');

Object.type = function(object) {
  if (Object.type.global === object) return 'global';
  if (Object.isNaN(object)) return 'NaN';
  return Object.prototype.toString.call(object).slice(8,-1)
};

Object.type.global = this;
