if (!Object.create){
  Object.create = function(object) {
    function Object() {};
    Object.prototype = object;
    return new Object;
  };
}
