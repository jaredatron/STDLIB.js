
// ES5 15.9.5.44
// http://es5.github.com/#x15.9.5.44
// This function provides a String representation of a Date object for use by
// JSON.stringify (15.12.3).
!function(){

  var dateToJSONIsSTDLIBed = false;
  try {
    dateToJSONIsSTDLIBed = (
      Date.prototype.toJSON &&
      new Date(NaN).toJSON() === null &&
      new Date(STDLIB.negativeDate).toJSON().indexOf(STDLIB.negativeYearString) !== -1 &&
      Date.prototype.toJSON.call({ // generic
        toISOString: function () {
          return true;
        }
      })
    );
  } catch (e) {
  }
  if (!dateToJSONIsSTDLIBed) {
    Date.prototype.toJSON = function toJSON(key) {
      // When the toJSON method is called with argument key, the following
      // steps are taken:

      // 1.  Let O be the result of calling ToObject, giving it the this
      // value as its argument.
      // 2. Let tv be toPrimitive(O, hint Number).
      var o = Object(this),
        tv = STDLIB.toPrimitive(o),
        toISO;
      // 3. If tv is a Number and is not finite, return null.
      if (typeof tv === "number" && !isFinite(tv)) {
        return null;
      }
      // 4. Let toISO be the result of calling the [[Get]] internal method of
      // O with argument "toISOString".
      toISO = o.toISOString;
      // 5. If IsCallable(toISO) is false, throw a TypeError exception.
      if (typeof toISO != "function") {
        throw new TypeError("toISOString property is not callable");
      }
      // 6. Return the result of calling the [[Call]] internal method of
      //  toISO with O as the this value and an empty argument list.
      return toISO.call(o);

      // NOTE 1 The argument is ignored.

      // NOTE 2 The toJSON function is intentionally generic; it does not
      // require that its this value be a Date object. Therefore, it can be
      // transferred to other kinds of objects for use as a method. However,
      // it does require that any such object have a toISOString method. An
      // object is free to use the argument key to filter its
      // stringification.
    };
  }

}();
