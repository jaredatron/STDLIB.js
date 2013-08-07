JasmineSupport = {};

JasmineSupport.returnUndefined = function(){ return undefined; }
JasmineSupport.returnArguments = function(){ return arguments; }

JasmineSupport.objectsByType = {
  "PlainObject": [
    {},
    {length:0},
    {constructor: function(){}}
  ],
  "constructed object": [
    (new function(){})
  ],
  "created object": [
    // Object.create({}), // i dont have a way of detecting an empty created object
    Object.create({a:1})
  ],
  "Window": [
    window
  ],
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
  "Number literal": [
    0,
    0.0,
    1.1
  ],
  "Number": [
    new Number,
    new Number(2),
  ],
  "String literal": [
    "",
    "0",
    "1",
    "-1",
    "Array",
    "Function",
    "Object",
    "array",
    "function",
    "object"
  ],
  "String": [
    new String,
    new String('a')
  ],
  "Undefined": [
    undefined
  ],
  "NodeList": [
    document.body.childNodes
  ],
  "Text": [
    document.body.firstChild
  ],
  "Prototype": [
    (function(){}).prototype,
    (function(){
      function constructor(){}
      constructor.prototype.something = function(){};
      return constructor.prototype;
    })()
  ]
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



JasmineSupport.isObjectTestsFor = function(_function){
  var types = [].slice.call(arguments, 1);
  console.log('isObjectTestsFor', _function, types);
  JasmineSupport.eachObject(function(object, object_type){
    // context("when given ("+object_type+") "+jasmine.pp(object), function(){
    var expected_return_value = (types.indexOf(object_type) !== -1);
    it('when given the '+object_type+': '+jasmine.pp(object)+' should return '+expected_return_value, function() {
      expect(_function(object)).toBe(expected_return_value);
    });
    // });
  });
}
