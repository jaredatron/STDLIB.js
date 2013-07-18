describe("DelayedFunctionCall", function(){

  var now;

  function noop() {};

  beforeEach(function() {
    now = Date.now();
    spyOn(Date,'now').plan = function() { return now };
    spyOn(window, 'setTimeout').andReturn(34242);
    spyOn(window, 'clearTimeout')
  });

  it("should call setTimeout with a function that wraps the given function", function(){
    var dfc = new DelayedFunctionCall(noop, 0.05);
    expect(setTimeout   ).toHaveBeenCalledWith(dfc.call, 50);
    expect(dfc.start    ).toEqual(now);
    expect(dfc.delay    ).toEqual(50);
    expect(dfc.called   ).toBe(false);
    expect(dfc.prevented).toBe(false);
    expect(dfc.call     ).not.toBe(noop);
    expect(dfc.timeout  ).toEqual(34242);
  });

  describe("#call", function() {
    it("should set #called to the current time and call the given function", function(){
      var callbackCalled = false;
      function callback() { callbackCalled = true; };
      var dfc = new DelayedFunctionCall(callback, 0.05);
      expect(dfc.called    ).toBe(false);
      expect(callbackCalled).toBe(false);
      dfc.call();
      expect(dfc.called    ).toBe(now);
      expect(callbackCalled).toBe(true);
    });

    it("should not call the given function more then once", function() {
      var callCount = 0;
      function callback() { callCount += 1; };
      var dfc = new DelayedFunctionCall(callback, 0.05);
      expect(callCount).toBe(0);
      dfc.call();
      expect(callCount).toBe(1);
      dfc.call();
      expect(callCount).toBe(1);
    });

    it("should not call the given function when the delayed function call has been prevented", function() {
      var callCount = 0;
      function callback() { callCount += 1; };
      var dfc = new DelayedFunctionCall(callback, 0.05);
      dfc.prevent();
      expect(callCount).toBe(0);
      dfc.call();
      expect(callCount).toBe(0);
    });
  });

  describe("#elapsed, #eta", function() {

    it("should return the number of millieconds since the DelayedFunctionCall was created", function(){
      var dfc = new DelayedFunctionCall(noop, 0.1);

      expect(dfc.start       ).toEqual(now);
      expect(dfc.elapsed()   ).toEqual(0);
      expect(dfc.eta()       ).toEqual(100);

      now += 50;

      expect(dfc.start       ).toEqual(now - 50);
      expect(dfc.elapsed()   ).toEqual(50);
      expect(dfc.eta()       ).toEqual(50);

      now += 50;

      expect(dfc.start       ).toEqual(now - 100);
      expect(dfc.elapsed()   ).toEqual(100);
      expect(dfc.eta()       ).toEqual(0);
    });

  });

  describe("#prevent", function() {

    it("should clearTimout", function(){
      var dfc = new DelayedFunctionCall(noop, 0.05);
      expect(dfc.prevented).toBe(false);
      dfc.prevent();
      expect(dfc.prevented).toBe(now);
      expect(clearTimeout).toHaveBeenCalledWith(34242);
      clearTimeout.reset()

      dfc.prevent();
      expect(clearTimeout).not.toHaveBeenCalled();
    });
  });


  describe("#elapsed", function() {
    it("should return the number of millieconds that have elapsed since the function call was delayed", function(){
      var dfc = new DelayedFunctionCall(noop, 0.05);
      expect(dfc.elapsed()).toEqual(0);
      now += 100;
      expect(dfc.elapsed()).toEqual(100);
      now += 100;
      expect(dfc.elapsed()).toEqual(200);
    });
    context("when the delayed function has already been called", function(){
      it("should return the number of millieconds that have elapsed since the function was called", function(){
        var dfc = new DelayedFunctionCall(noop, 0.05);
        now += 100;
        dfc.call();
        expect(dfc.elapsed()).toEqual(100);
        now += 100;
        expect(dfc.elapsed()).toEqual(100);
      });
    });
    context("when the delayed function has already been prevented", function(){
      it("should return the number of millieconds that have elapsed since the function was prevented", function(){
        var dfc = new DelayedFunctionCall(noop, 0.05);
        now += 100;
        dfc.prevent();
        expect(dfc.elapsed()).toEqual(100);
        now += 100;
        expect(dfc.elapsed()).toEqual(100);
      });
    });
  });

});
