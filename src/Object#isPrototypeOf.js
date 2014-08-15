if (!Object.prototype.isPrototypeOf) {
 Object.prototype.isPrototypeOf = function(object) {
    function constructor(){}
    constructor.prototype = this;
    return object instanceof constructor;
  }
}
