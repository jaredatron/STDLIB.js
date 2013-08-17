Object.each = function(object, iterator, context) {
  for (var p in object) iterator.call(context, p, object[p]);
};
