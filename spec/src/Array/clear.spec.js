describe("Array#clear", function(){

  it("should empty the array", function() {
    var array = [1,2,3];
    expect(array).toEqual([1,2,3]);
    array.clear();
    expect(array).toEqual([]);
  });

  it("should return the array", function() {
    var array = [1,2,3];
    expect(array.clear()).toBe(array);
  });

});
