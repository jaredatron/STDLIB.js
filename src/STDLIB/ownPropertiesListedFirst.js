require('STDLIB');

STDLIB.ownPropertiesListedFirst = (function(){
  var p, o = Object.create({a:1});
  o.b=2;
  for (p in o) break;
  return o.hasOwnProperty(p);
})();
