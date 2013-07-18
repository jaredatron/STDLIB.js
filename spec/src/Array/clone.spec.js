describe("Array#clone", function(){

  it("should return a new array", function() {
    var array = [1,2,3];
    expect(array.clone()).not.toBe(array);
  });

  it("should return an identical array", function() {
    var array = [1,2,3];
    expect(array.clone()).toEqual(array);
  });

});
