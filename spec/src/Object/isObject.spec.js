describe("Object.isObject", function() {

  describeIsXFunction(Object.isObject,
    'Object',
    'PlainObject',
    'Window',
    'Arguments',
    'Array',
    'Date',
    'TextNode',
    'Element',
    'Function',
    'NodeList',
    'Text',
    'Prototype',
    'Number',
    'String',
    "constructed object",
    "created object"
  )

});
