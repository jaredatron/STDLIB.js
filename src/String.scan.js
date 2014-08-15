String.prototype.scan = function(pattern){
  if (Object.isString(pattern))
    pattern = RegExp.escape(pattern);
  return this.match(pattern);
};
