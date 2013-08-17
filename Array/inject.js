if (!Array.prototype.inject){
  Array.prototype.inject = function(memo, iterator, context) {
    this.each(function(value, index) {
      memo = iterator.call(context, memo, value, index);
    });
    return memo;
  };
}
