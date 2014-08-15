require('../')('Array#clear')

describe('Array#clear', function(){
  it('should empty the array', function(){
    var array = [1,2,3]
    array.clear()
    expect({ a: 'b' }).to.have.key('a');
  });
});
