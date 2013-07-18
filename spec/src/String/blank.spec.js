describe("String#blank", function(){

  [
    ['',        true],
    [' ',       true],
    ['\t\r\n ', true],
    ['a',       false],
    ['\t y \n', false]
  ].each(function(test){
    var string = test[0], result = test[1];

    describe(string.inspect(), function(){
      it("should "+(result?'':'not ')+"be blank", function() {
        expect( string.blank() ).toBe(result);
      });
    });

  });

});
