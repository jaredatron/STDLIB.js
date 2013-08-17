Object.isElement = function(object) {
  return /^HTML.*Element$/.test(Object.type(object));
};
