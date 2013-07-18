describe("Array#concat", function(){


  context("when given no arguments", function(){

    it("should return a clone of the array", function() {
      var array = [43,null];
      expect(array.concat()).not.toBe(array);
    });
    it("should return an equal array", function() {
      var array = ['a',5];
      expect(array.concat()).toEqual(['a',5]);
    });

  });

  context("when given Array objects", function(){
    it("should concat each item in the Arrays", function(){
      expect( [].concat([0, 1], 2, [3, 4]) ).toEqual([0, 1, 2, 3, 4]);
    });
  });

  context("when given an Arguments object", function(){
    it("should not concat each item in the Arguments", function() {
      var args = (function(){ return arguments; })(1,2,3);
      var array = [1].concat(args);
      expect(array).toEqual([1,args]);
    });
  });

  it("should not change the original array", function() {
    var array = [1,2,3];
    expect(array.concat(4,5,6)).toEqual([1,2,3,4,5,6])
    expect(array).toEqual([1,2,3])
  });

  context("when given arrays with undefined values", function(){
    it("should concat undefined", function() {
      var array = [,1].concat([], [,]);
      expect( array ).toEqual( [undefined, 1, undefined] );
      expect( Object.keys( array ) ).toEqual( ["1"] );

      var array = []; array[2] = true;
      expect( [].concat(array) ).toEqual( [undefined, undefined, true] );

      expect( Object.keys( array ) ).toEqual( ["2"] );
    });
  });

  context("when called on a plain object", function() {
    it("should return an array with that object in it", function() {
      var x = {};
      x.concat = Array.prototype.concat;
      expect(x.concat()).toEqual([x]);
    });
  });



});
