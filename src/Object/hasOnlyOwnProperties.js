//= require "Object/type"
//= require "STDLIB/ownPropertiesListedFirst"

Object.hasOnlyOwnProperties = function(object){
  if (Object.type(object) !== 'Object') return false;
  for (var property in object) if (!STDLIB.ownPropertiesListedFirst) break;
  return(
    typeof property === 'undefined' ||
    Object.prototype.hasOwnProperty.call(object, property)
  );
};
