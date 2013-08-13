module.exports = exports = function(){
  for (var i = 0; i < arguments.length; i++) {
    require(__dirname+"/src/"+arguments[i]);
  };
};

var REGEXP = /\.js$/;

module.exports.all = function(){
  var walker = require('walk').walk(__dirname+'/src', { followLinks: false });
  walker.on('file', function(root, stat, next) {
    if (REGEXP.test(stat.name)) require(root + '/' + stat.name);
    next();
  });
};
