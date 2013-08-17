describe("STDLIB.global", function(){
  it("should be the global object", function(){
    expect(STDLIB.global).toBe((function(){ return this; })());
  });
});
