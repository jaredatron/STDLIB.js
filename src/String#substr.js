// ECMA-262, 3rd B.2.3
// Note an ECMAScript standart, although ECMAScript 3rd Edition has a
// non-normative section suggesting uniform semantics and it should be
// normalized across all browsers
// [bugfix, IE lt 9] IE < 9 substr() with negative value not working in IE
if("".substr && "0b".substr(-1) !== "b") {
  STDLIB.string_substr = String.prototype.substr;
  /**
   *  Get the substring of a string
   *  @param  {integer}  start   where to start the substring
   *  @param  {integer}  length  how many characters to return
   *  @return {string}
   */
  String.prototype.substr = function(start, length) {
    return STDLIB.string_substr.call(
      this,
      start < 0 ? ((start = this.length + start) < 0 ? 0 : start) : start,
      length
    );
  }
}
