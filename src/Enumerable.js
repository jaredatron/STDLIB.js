// //= require "Function/bind"
// //= require "Object/isNumber"

// Enumerable = {};

// Object.isGlobal = function(object){
//   return object === this;
// }.bind(this)

// Object.isEnumerable = function(object) {
//   var type = Object.type(object);
//   switch (type){
//     // things with length that are not enumerable
//     case 'global':
//     case 'Function':
//     case 'String':
//       return false
//     default:
//       return Object.isNumber(object.length);
//   }
// };

// Enumerable.slice = function(enumerable,a,b){
//   return Array.prototype.slice.call(enumerable,a,b);
// };

// Enumerable.concat = function() {
//   var
//   destination = [],
//   sources = Enumerable.slice(arguments),
//   source, i, destination_length, length;

//   for (i = 0; i < sources.length; i++) {
//     source = sources[i];
//     if (Object.isEnumerable(source)){
//       length = source.length;
//       destination_length = destination.length;
//       while (length--) destination[destination_length + length] = source[length];
//     }else{
//       destination.push(source);
//     }
//   };
//   return destination;
// };

