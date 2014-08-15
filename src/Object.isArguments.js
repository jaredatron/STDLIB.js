//= require Object.type

Object.isArguments = function(object) {
  return Object.type(object) === 'Arguments';
};
