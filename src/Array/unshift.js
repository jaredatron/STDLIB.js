// ES5 15.4.4.12
// http://es5.github.com/#x15.4.4.13
// Return len+argCount.
// [bugfix, ielt8]
// IE < 8 bug: [].unshift(0) == undefined but should be "1"
if ([].unshift(0) != 1) {
  var array_unshift = Array.prototype.unshift;
  Array.prototype.unshift = function() {
    array_unshift.apply(this, arguments);
    return this.length;
  };
}
