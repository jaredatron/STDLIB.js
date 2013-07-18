describe("String#empty", function(){

  [
    ['',        true ],
    [' ',       false],
    ['\t\r\n ', false],
    ['a',       false],
    ['\t y \n', false]
  ].each(function(test){
    var string = test[0], result = test[1];

    describe(string.inspect(), function(){
      it("should "+(result?'':'not ')+"be empty", function() {
        expect( string.empty() ).toBe(result);
      });
    });

  });

});
