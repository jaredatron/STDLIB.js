Object.isWindow = function(object){
  return object === Object.isWindow.window;
};
Object.isWindow.window = this;
