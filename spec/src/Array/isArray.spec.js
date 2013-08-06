describe("Array.isArray", function(){

  JasmineSupport.eachObject(function(object, type){
    context("when given ("+type+") "+jasmine.pp(object), function(){
      var expected_return_value = type === 'Array';
      it("should return "+expected_return_value, function() {
        expect(Array.isArray(object)).toBe(expected_return_value);
      });
    });
  });


});
