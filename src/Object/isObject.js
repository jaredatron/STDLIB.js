Object.isObject = function(object){
  // return false;
  return object instanceof Object;
  // if (object instanceof Object); else return false;
  // try{
  //   Object.keys(object);
  //   return true
  // }catch(e){
  //   if (e instanceof TypeError && e.message === 'Object.keys called on non-object')
  //     return false;
  //   throw e;
  // }
};
