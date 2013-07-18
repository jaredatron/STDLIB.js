/**
 *  Array#clear() -> Array
 *
 *  Clears the array (makes it empty) and returns the array reference.
 *
 *  ##### Example
 *
 *      var guys = ['Sam', 'Justin', 'Andrew', 'Dan'];
 *      guys.clear();
 *      // -> []
 *      guys
 *      // -> []
**/
Array.prototype.clear = function() {
  this.length = 0;
  return this;
};
