//= require "Array/slice"
Object.extend = function(target) {
  var p, mixin,
  mixins = Array.slice(arguments, 1),
  i = mixins.length;
  while(i--){
    mixin = mixins[i];
    for (p in mixin) target[p] = mixin[p];
  };
  return target;
};
