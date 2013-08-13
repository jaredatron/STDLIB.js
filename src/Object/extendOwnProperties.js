require('../Array/slice');

Object.extendOwnProperties = function(target) {
  var p, mixin,
  mixins = Array.slice(arguments, 1),
  i = mixins.length;
  while(i--){
    mixin = mixins[i];
    for (p in mixin)
      if (mixin.hasOwnProperty(p))
        target[p] = mixin[p];
  };
  return target;
};
