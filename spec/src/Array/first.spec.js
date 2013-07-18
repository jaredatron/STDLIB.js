describe("Array#first", function() {

  it("should return the first element in the array", function() {
    var array = [1,2,3]
    expect(array.first()).toBe(1);
    expect([].first()).toBe(undefined);
  });

});
