Object.isUndefined = function(object) {
  return object === [][0];
  // return Object.type(object) === 'Undefined';
};
