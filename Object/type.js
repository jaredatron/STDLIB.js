require('../STDLIB/global');
require('../Object/isNaN');

Object.type = function(object) {
  if (STDLIB.global === object) return 'global';
  if (Object.isNaN(object)) return 'NaN';
  return Object.prototype.toString.call(object).slice(8,-1)
};
