describe("Object.clone", function(){

  it("should clone the given object", function() {

    expect( Object.clone(true)      ).toBe(true);
    expect( Object.clone(false)     ).toBe(false);
    expect( Object.clone()          ).toBe(undefined);
    expect( Object.clone(undefined) ).toBe(undefined);
    expect( Object.clone(null)      ).toBe(null);


    var array = [1,2,3];

    expect( Object.clone(array) ).toEqual(  array );
    expect( Object.clone(array) ).not.toBe( array );

    var _function = function(){
      return [this].concat(Array.prototype.slice.apply(arguments));
    }

    expect( Object.clone(_function) ).not.toBe( _function );
    expect( Object.clone(_function).call(array, 4,5,6) ).toEqual( [[1,2,3],4,5,6] );

    expect( Object.clone(5) ).toBe(5);

    expect( Object.clone('a') ).toBe('a');

  });

});
