describe("Object.isPrototypeOf", function() {

  context("when given (Object.prototype, {})", function(){
    it("should return true", function() {
      expect( Object.isPrototypeOf(Object.prototype, {}) ).toBe(true);
    });
  });

  context("when given (Object.prototype, [])", function(){
    it("should return true", function() {
      expect( Object.isPrototypeOf(Object.prototype, []) ).toBe(true);
    });
  });

  context("when given (Array.prototype, {})", function(){
    it("should return false", function() {
      expect( Object.isPrototypeOf(Array.prototype, {}) ).toBe(false);
    });
  });

  context("when given (Array.prototype, [])", function(){
    it("should return true", function() {
      expect( Object.isPrototypeOf(Array.prototype, []) ).toBe(true);
    });
  });

});

