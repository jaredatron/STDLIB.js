//= require 'STDLIB'

STDLIB.splitString = (function(){
  var boxedString = Object("a");
  return boxedString[0] != "a" || !(0 in boxedString);
})();
