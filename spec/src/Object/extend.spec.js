describe("Object.extend", function(){

  it("should copy all the properties from give objects to the first object", function() {

    var
      a = {a:1,b:2,c:3},
      b = {a:4,b:5,c:6},
      c = {a:7,b:8,c:9};

    expect( Object.extend({}, a)       ).toEqual( {a:1,b:2,c:3} );
    expect( Object.extend({}, b)       ).toEqual( {a:4,b:5,c:6} );
    expect( Object.extend({}, c)       ).toEqual( {a:7,b:8,c:9} );
    expect( Object.extend({}, a, b)    ).toEqual( {a:4,b:5,c:6} );
    expect( Object.extend({}, a, b, c) ).toEqual( {a:7,b:8,c:9} );

    Object.extend(a, b, c);

    expect( a ).toEqual({a:7,b:8,c:9});
    expect( b ).toEqual({a:4,b:5,c:6});
    expect( c ).toEqual({a:7,b:8,c:9});

  });

  it("should copy all properties", function() {
    var a = {a:1}, b = Object.create(a);
    b.b = 2;

    expect( Object.extend({}, b) ).toEqual( {a:1,b:2} );
  });

});
