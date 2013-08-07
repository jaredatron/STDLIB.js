describe("Object.hasOnlyOwnProperties", function(){

  it("should should only return true if the given object has no non-owned properties", function() {
    expect( Object.hasOnlyOwnProperties( {}                   ) ).toBe(true);
    expect( Object.hasOnlyOwnProperties( {a:1}                ) ).toBe(true);
    expect( Object.hasOnlyOwnProperties( Object.create({}   ) ) ).toBe(true);
    expect( Object.hasOnlyOwnProperties( Object.create({a:1}) ) ).toBe(false);
  });

});
