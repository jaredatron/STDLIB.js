Object.isPrototypeOf = Object.prototype.isPrototypeOf ?
  function(prototype, object) {
    return Object.prototype.isPrototypeOf.call(prototype, object);
  }
:
  function(object) {
    function constructor(){}
    constructor.prototype = this;
    return object instanceof constructor;
  }
;
