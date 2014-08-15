require('../')('Array#clear')

describe('Array#clear', function(){
  it('should empty the array', function(){
    var array = [1,2,3]
    expect( array.length  ).to.be(3)
    expect( array.clear() ).to.be(array)
    expect( array.length  ).to.be(0)
    expect( array.clone   ).to.be.a(Function)
  });
});
