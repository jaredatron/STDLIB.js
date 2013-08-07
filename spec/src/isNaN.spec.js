describe("isNaN", function(){

  // JasmineSupport.eachObject(function(object, type){
  //   context("when given ("+type+") "+jasmine.pp(object), function(){
  //     var expected_return_value = type === 'NaN';
  //     it("should return "+expected_return_value, function() {
  //       expect(isNaN(object)).toBe(expected_return_value);
  //     });
  //   });
  // });

  JasmineSupport.isObjectTestsFor(isNaN, 'NaN');

});
