JasmineSupport = {};

function returnArguments(){ return arguments; }

function ExampleObjects(){
  return [
    ['an empty plain object',                                                {},                            'Object plain_object empty'],
    ['an empty plain object with a length property',                         {length: 0},                   'Object plain_object'],
    ['an empty plain object with a constructor property',                    {constructor: function(){}},   'Object plain_object'],
    ['an empty plain object with a null constructor property',               {constructor: null},           'Object plain_object'],
    ['an empty plain object with an undefined constructor property',         {constructor: undefined},      'Object plain_object'],
    ['an empty plain object with a constructor property that is an object',  {constructor: {}},             'Object plain_object'],
    ['an empty constructed object',                                          new function(){},              'Object empty'],
    ['an empty created object',                                              Object.create({}),             'Object plain_object empty'],
    ['a non-empty created object',                                           Object.create({a:1}),          'Object'],
    ['the window object',                                                    window,                        'Object Window'],
    ['an empty Arguments object',                                            returnArguments(),             'Object Arguments empty'],
    ['a non-empty Arguments object',                                         returnArguments(1,2,3),        'Object Arguments'],
    ['an empty literal array',                                               [],                            'Object Array literal_array'],
    ['a literal array containing 0',                                         [0],                           'Object Array literal_array'],
    ['a literal array containing an empty string',                           [""],                          'Object Array literal_array'],
    ['a literal array containing 1',                                         [1],                           'Object Array literal_array'],
    ['a constructed Array given nothing',                                    new Array(),                   'Object Array constructed_array'],
    ['a constructed Array given 0',                                          new Array(0),                  'Object Array constructed_array'],
    ['a constructed Array given an empty string',                            new Array(""),                 'Object Array constructed_array'],
    ['a constructed Array given 1',                                          new Array(1),                  'Object Array constructed_array'],
    ['a Date object',                                                        new Date,                      'Object Date constructed_date'],
    ['a TextNode',                                                           document.createTextNode(''),   'Object Text'],
    ['an Element',                                                           document.createElement('div'), 'Object Element'],
    ['a NodeList',                                                           document.body.childNodes,      'Object NodeList'],
    ['a TextNode',                                                           document.body.firstChild,      'Object Text'],
    ['a function created using "new Function"',                              new Function,                  'Object Function constructed_function'],
    ['a function created using "function(){}"',                              function(){},                  'Object Function literal_function anonymous_function'],
    ['a named function',                                                     Shoe,                          'Object Function literal_function named_function'],
    ['the literal number 0',                                                 0,                             'Number literal_number'],
    ['the literal number 0.0',                                               0.0,                           'Number literal_number'],
    ['the literal number 1',                                                 1,                             'Number literal_number'],
    ['the literal number 1.1',                                               1.1,                           'Number literal_number'],
    ['a constructed Number given no arguments',                              new Number,                    'Object Number constructed_number'],
    ['a constructed Number given 0',                                         new Number(0),                 'Object Number constructed_number'],
    ['a constructed Number given 0.0',                                       new Number(0.0),               'Object Number constructed_number'],
    ['a constructed Number given 1',                                         new Number(1),                 'Object Number constructed_number'],
    ['a constructed Number given 1.1',                                       new Number(1.1),               'Object Number constructed_number'],
    ['an empty string',                                                      "",                            'String literal_string'],
    ['the literal string "0"',                                               "0",                           'String literal_string'],
    ['the literal string "1"',                                               "1",                           'String literal_string'],
    ['the literal string "-1"',                                              "-1",                          'String literal_string'],
    ['the literal string "Array"',                                           "Array",                       'String literal_string'],
    ['the literal string "Function"',                                        "Function",                    'String literal_string'],
    ['the literal string "Object"',                                          "Object",                      'String literal_string'],
    ['the literal string "array"',                                           "array",                       'String literal_string'],
    ['the literal string "function"',                                        "function",                    'String literal_string'],
    ['the literal string "object"',                                          "object",                      'String literal_string'],
    ['a constructed String given no arguments',                              new String(""),                'Object String constructed_string'],
    ['a constructed String given "0"',                                       new String("0"),               'Object String constructed_string'],
    ['a constructed String given "1"',                                       new String("1"),               'Object String constructed_string'],
    ['a constructed String given "-1"',                                      new String("-1"),              'Object String constructed_string'],
    ['a constructed String given "Array"',                                   new String("Array"),           'Object String constructed_string'],
    ['a constructed String given "Function"',                                new String("Function"),        'Object String constructed_string'],
    ['a constructed String given "Object"',                                  new String("Object"),          'Object String constructed_string'],
    ['a constructed String given "array"',                                   new String("array"),           'Object String constructed_string'],
    ['a constructed String given "function"',                                new String("function"),        'Object String constructed_string'],
    ['a constructed String given "object"',                                  new String("object"),          'Object String constructed_string'],
    ['undefined',                                                            undefined,                     'undefined'],
    ['undefined',                                                            ,                              'undefined'],
    ['the NaN literal',                                                      NaN,                           'NaN'],
    ['the null literal',                                                     null,                          'Null'],
    ['the true literal',                                                     true,                          'Boolean'],
    ['the false literal',                                                    false,                         'Boolean'],
    ['0/0',                                                                  0/0,                           'NaN'],
    ['an empty prototype object',                                            (function(){}).prototype,       'Object prototype empty'],
    ['an prototype object with properties',                                  prototypeWithProperties(),      'Object prototype']
  ];

  function Shoe() {}

  function prototypeWithProperties(){
    function x(){};
    x.prototype.y = function(){};
    return x.prototype;
  }
};


function describeIsXFunction(_function, matching_types) {
  var i, objects, object, object_description, object_types, expected_result;

  objects = ExampleObjects();
  matching_types = matching_types.split(/\s+/);

  for (i = 0; i < objects.length; i++) {
    object_description = objects[i][0];
    object             = objects[i][1];
    object_types       = objects[i][2].split(/\s+/);
    expected_result    = false;

    while(object_types.length > 0){
      if (matching_types.indexOf(object_types.shift()) !== -1){
        expected_result = true; break;
      }
    }

    describeIsXFunction.it(object_description, _function, object, expected_result);
  }
}

describeIsXFunction.it = function(object_description, _function, object, expected_result) {
  it('when given '+object_description+' it should return '+expected_result, function(){
    expect(_function(object)).toBe(expected_result);
  });
};


