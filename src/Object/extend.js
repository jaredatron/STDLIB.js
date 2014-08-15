if (!String.extend) {

  Object.extend = function(target) {
    var p, source, sources = [].slice.call(arguments, 1)

    while (sources.length) {
      source = sources.shift();
      if (source) for (p in source) target[p] = source[p];
    };

    return target;
  };

}


