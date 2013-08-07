describe("Object.isPlainObject", function() {

  describeIsXFunction(Object.isPlainObject, 'plain_object');

  it("when given a created object should return false", function() {
    expect( Object.isPlainObject( Object.create({})    ) ).toBe(true); // I would prefer to return false here
    expect( Object.isPlainObject( Object.create({a:1}) ) ).toBe(false);
  });

});
