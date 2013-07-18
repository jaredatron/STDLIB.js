// ES5 15.4.4.12
// http://es5.github.com/#x15.4.4.12
// Default value for second param
// [bugfix, ielt9, old browsers]
// IE < 9 bug: [1,2].splice(0).join("") == "" but should be "12"
if ([1,2].splice(0).length != 2) {
  var array_splice = Array.prototype.splice;

  if(function() { // test IE < 9 to splice bug - see issue #138
    function makeArray(l) {
      var a = [];
      while (l--) {
        a.unshift(l)
      }
      return a
    }

    var array = []
      , lengthBefore
    ;

    array.splice.bind(array, 0, 0).apply(null, makeArray(20));
    array.splice.bind(array, 0, 0).apply(null, makeArray(26));

    lengthBefore = array.length; //20
    array.splice(5, 0, "XXX"); // add one element

    if(lengthBefore + 1 == array.length) {
      return true;// has right splice implementation without bugs
    }
    // else {
    //  IE8 bug
    // }
  }()) {//IE 6/7
    Array.prototype.splice = function(start, deleteCount) {
      if (!arguments.length) {
        return [];
      } else {
        return array_splice.apply(this, [
          start === void 0 ? 0 : start,
          deleteCount === void 0 ? (this.length - start) : deleteCount
        ].concat(_Array_slice_.call(arguments, 2)))
      }
    };
  }
  else {//IE8
    Array.prototype.splice = function(start, deleteCount) {
      var result
        , args = _Array_slice_.call(arguments, 2)
        , addElementsCount = args.length
      ;

      if(!arguments.length) {
        return [];
      }

      if(start === void 0) { // default
        start = 0;
      }
      if(deleteCount === void 0) { // default
        deleteCount = this.length - start;
      }

      if(addElementsCount > 0) {
        if(deleteCount <= 0) {
          if(start == this.length) { // tiny optimisation #1
            this.push.apply(this, args);
            return [];
          }

          if(start == 0) { // tiny optimisation #2
            this.unshift.apply(this, args);
            return [];
          }
        }

        // Array.prototype.splice implementation
        result = _Array_slice_.call(this, start, start + deleteCount);// delete part
        args.push.apply(args, _Array_slice_.call(this, start + deleteCount, this.length));// right part
        args.unshift.apply(args, _Array_slice_.call(this, 0, start));// left part

        // delete all items from this array and replace it to 'left part' + _Array_slice_.call(arguments, 2) + 'right part'
        args.unshift(0, this.length);

        array_splice.apply(this, args);

        return result;
      }

      return array_splice.call(this, start, deleteCount);
    }

  }
}
