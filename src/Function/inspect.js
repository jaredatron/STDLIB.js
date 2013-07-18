Function.prototype.inspect = function(useDoubleQuotes) {
  var escapedString = this.replace(/[\x00-\x1f\\]/g, function(character) {
    if (character in String.specialChar) {
      return String.specialChar[character];
    }
    return '\\u00' + character.charCodeAt().toPaddedString(2, 16);
  });
  if (useDoubleQuotes) return '"' + escapedString.replace(/"/g, '\\"') + '"';
  return "'" + escapedString.replace(/'/g, '\\\'') + "'";
};

