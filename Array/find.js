require('../STDLIB/toObject');

Array.prototype.find = function(iterator, context){
  var i, object = STDLIB.toObject(this);
  for (i = 0; i < this.length; i++)
    if (iterator.call(context, this[i], i, object))
      return this[i];
}
