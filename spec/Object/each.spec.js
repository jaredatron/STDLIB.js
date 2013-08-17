describe("Object.each", function(){

  it("should should iterator over the objects properies and values", function() {
    var iterator_calls = [];
    var context = {};
    function iterator(key, value){
      iterator_calls.push([this, key, value]);
    }

    Object.each({}, iterator, context);
    expect(iterator_calls.length).toBe(0);

    Object.each({a:1,b:2}, iterator, context);
    expect(iterator_calls.length).toBe(2);

    expect(iterator_calls[0][0]).toBe(context);
    expect(iterator_calls[0][1]).toBe('a');
    expect(iterator_calls[0][2]).toBe(1);
    expect(iterator_calls[1][0]).toBe(context);
    expect(iterator_calls[1][1]).toBe('b');
    expect(iterator_calls[1][2]).toBe(2);
  });

});
