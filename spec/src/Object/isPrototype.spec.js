describe("Object.isPrototype", function() {

  it("should only return true if the given object is a prototype", function() {
    var
      _function = function(){},
      prototype = _function.prototype;

    expect( Object.isPrototype( prototype                ) ).toBe(true);
    expect( Object.isPrototype( Object.prototype         ) ).toBe(true);

    expect( Object.isPrototype( {}                       ) ).toBe(false);
    expect( Object.isPrototype( {constructor: _function} ) ).toBe(false);
  });


  JasmineSupport.isObjectTestsFor(Object.isPrototype, 'Prototype');

});

