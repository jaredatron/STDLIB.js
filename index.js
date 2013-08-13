module.exports = exports = function(){
  for (var i = 0; i < arguments.length; i++) {
    require("./src/"+arguments[i]);
  };
}
