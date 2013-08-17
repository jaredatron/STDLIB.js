describe("Object.keys", function(){

  it("returns an array of all the own properties on the given object", function() {

    expect( Object.keys([])                   ).toEqual( [] );
    expect( Object.keys(function(){})         ).toEqual( [] );
    expect( Object.keys({})                   ).toEqual( [] );
    expect( Object.keys({a:1})                ).toEqual( ['a'] );
    expect( Object.keys(Object.create({a:1})) ).toEqual( [] );

    expect(function(){ Object.keys(2) }).toThrow(new TypeError('Object.keys called on non-object'));

  });

});
