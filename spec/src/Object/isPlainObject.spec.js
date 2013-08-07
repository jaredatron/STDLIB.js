describe("Object.isPlainObject", function() {

  it("should only return true when given a plain object", function(){
    var
      _function = function(){},
      element   = document.createElement("div"),
      text_node = document.createTextNode('a');

    expect( Object.isPlainObject( {}                   ) ).toBe(true);
    expect( Object.isPlainObject( {length:0}           ) ).toBe(true);
    expect( Object.isPlainObject( Object.create({})    ) ).toBe(true);

    expect( Object.isPlainObject( Object.create({a:1}) ) ).toBe(false);
    expect( Object.isPlainObject(                      ) ).toBe(false);
    expect( Object.isPlainObject( true                 ) ).toBe(false);
    expect( Object.isPlainObject( false                ) ).toBe(false);
    expect( Object.isPlainObject( null                 ) ).toBe(false);
    expect( Object.isPlainObject( NaN                  ) ).toBe(false);
    expect( Object.isPlainObject( 0/0                  ) ).toBe(false);
    expect( Object.isPlainObject( undefined            ) ).toBe(false);
    expect( Object.isPlainObject( ""                   ) ).toBe(false);
    expect( Object.isPlainObject( 2                    ) ).toBe(false);
    expect( Object.isPlainObject( 2.1                  ) ).toBe(false);
    expect( Object.isPlainObject( []                   ) ).toBe(false);
    expect( Object.isPlainObject( [1,2]                ) ).toBe(false);
    expect( Object.isPlainObject( _function            ) ).toBe(false);
    expect( Object.isPlainObject( element              ) ).toBe(false);
    expect( Object.isPlainObject( text_node            ) ).toBe(false);
    expect( Object.isPlainObject( window               ) ).toBe(false);
    expect( Object.isPlainObject( location             ) ).toBe(false);
    expect( Object.isPlainObject( new _function        ) ).toBe(false);
    _function.prototype.something = function() {};
    expect( Object.isPlainObject( new _function        ) ).toBe(false);
  });

  JasmineSupport.isObjectTestsFor(Object.isPlainObject, 'PlainObject');

});
