Object.isWindow = function(object){
  return object != null && object.window == object && object === window;
};
