require('../Array/slice');

Object.extend = function(target) {
  var
    i = 0,
    mixins = Array.slice(arguments, 1),
    p, mixin;

  while (i < mixins.length) {
    mixin = mixins[i];
    for (p in mixin) target[p] = mixin[p];
    i++;
  };

  return target;
};
