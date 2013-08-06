JasmineSupport = {};

JasmineSupport.returnUndefined = function(){ return undefined; }
JasmineSupport.returnArguments = function(){ return arguments; }

JasmineSupport.objectsByType = {
  "Arguments": [
    JasmineSupport.returnArguments(),
    JasmineSupport.returnArguments(1,2,3)
  ],
  "Array": [
    [],
    new Array
  ],
  "Date": [
    new Date
  ],
  "TextNode": [
    document.createTextNode('')
  ],
  "Element": [
    document.createElement('div')
  ],
  "Function": [
    new Function,
    function(){}
  ],
  "Hash": [

  ],
  "NaN": [
    0/0,
    NaN
  ],
  "Null": [
    null
  ],
  "Number": [
    0,
    0.0,
    1.1
  ],
  "String": [
    "",
    "a"
  ],
  "Undefined": [
    undefined
  ],
};


JasmineSupport.eachObject = function(callback){
  var type, objects, i;
  for(type in JasmineSupport.objectsByType){
    objects = JasmineSupport.objectsByType[type];
    for (i = 0; i < objects.length; i++) {
      callback(objects[i], type);
    }
  }
  return this;
}



JasmineSupport.isXTestsFor = function(type){
  JasmineSupport.eachObject(function(object, object_type){
    context("when given ("+object_type+") "+jasmine.pp(object), function(){
      var expected_return_value = object_type === type;
      it("should return "+expected_return_value, function() {
        expect(Object['is'+type](object)).toBe(expected_return_value);
      });
    });
  });
}
