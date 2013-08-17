describe("Arguments", function(){

  function returnArgs(){ return arguments; }

  it("should merge Array and Arguments instances", function(){

    var args1  = returnArgs(1,2,3);
    var array1 = [4,5,6];
    var args2  = returnArgs(7,8,9);
    var array2 = [10,11,12];

    var merger = Arguments(args1, array1, args2, array2);
    expect(merger).toEqual([1,2,3,4,5,6,7,8,9,10,11,12]);

  });

  it("should throw a TypeError when given a non-enumerable", function(){
    expect(function(){ Arguments(4); }).toThrow(new TypeError("expected 4 to be an enumerable"));
  });

});
