describe("String#endsWith", function(){

  it("", function() {
    expect( 'hello world'.endsWith('d')            ).toBe(true)
    expect( 'hello world'.endsWith(' world')       ).toBe(true)
    expect( 'hello world'.endsWith('planet')       ).toBe(false)
    expect( ''.endsWith('planet')                  ).toBe(false)
    expect( 'hello world world'.endsWith(' world') ).toBe(true)
    expect( 'z'.endsWith('az')                     ).toBe(false)

    var str = "To be, or not to be, that is the question";
    expect( str.endsWith("question")  ).toBe(true)
    expect( str.endsWith("to be")     ).toBe(false)
    expect( str.endsWith("to be", 19) ).toBe(true)

    str = "12345";
    expect( str.endsWith("5")     ).toBe(true)
    expect( str.endsWith("5", 6)  ).toBe(true)
    expect( str.endsWith("5", 5)  ).toBe(true)
    expect( str.endsWith("5", 4)  ).toBe(false)
    expect( str.endsWith("5", 1)  ).toBe(false)
    expect( str.endsWith("5", 0)  ).toBe(false)

    expect( str.endsWith("1", 1)  ).toBe(true)
    expect( str.endsWith("1", 0)  ).toBe(false)
    expect( str.endsWith("1", -1) ).toBe(false)

    expect( str.endsWith("", 0)   ).toBe(true)
  });

});
