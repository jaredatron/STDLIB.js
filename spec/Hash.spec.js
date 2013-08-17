describe("Hash", function() {

  var hash;

  it("should be a constructor", function() {
    expect(Object.isFunction(Hash)).toBe(true);
    hash = new Hash;
    expect(hash instanceof Hash).toBe(true);
  });

  it("should take an object as the value of the hash", function() {
    hash = new Hash({a:1,b:2});
    expect(hash.get('a')).toBe(1);
    expect(hash.get('b')).toBe(2);
    expect(hash.toObject()).toEqual({a:1,b:2});
  });

  it("should take a Hash as the value of the hash", function() {
    hash = new Hash( new Hash({a:1,b:2}) );
    expect(hash.get('a')).toBe(1);
    expect(hash.get('b')).toBe(2);
    expect(hash.toObject()).toEqual({a:1,b:2});
  });

  describe("#each", function() {

    it("should iterate over each key/value of the hash", function() {
      var iterator_calls = [];
      var context = {};
      function iterator(key, value){
        iterator_calls.push([this, key, value]);
      }

      hash = new Hash({a:1,b:2});
      hash.each(iterator, context);
      expect(iterator_calls.length).toBe(2);
      expect(iterator_calls[0][0]).toBe(context);
      expect(iterator_calls[0][1]).toBe('a');
      expect(iterator_calls[0][2]).toBe(1);
      expect(iterator_calls[1][0]).toBe(context);
      expect(iterator_calls[1][1]).toBe('b');
      expect(iterator_calls[1][2]).toBe(2);
    });

  });

  describe("#set", function() {
    it("should set the given key and value", function() {
      hash = new Hash;
      hash.set('a', 1);
      expect(hash.get('a')).toBe(1);
      expect(hash.toObject()).toEqual({a:1});
    });
    it("should return the given value", function() {
      hash = new Hash;
      expect( hash.set('a', 1) ).toBe(1);
    });
  });

  describe("#get", function() {
    it("should return the value for the given key", function() {
      hash = new Hash({a:1,b:2});
      expect( hash.get('a') ).toBe(1);
      expect( hash.get('b') ).toBe(2);
    });
    it("should ignore un own properties", function() {
      hash = new Hash
      expect( hash.get('constructor')    ).toBe(undefined);
      expect( hash.get('hasOwnProperty') ).toBe(undefined);
      expect( hash.get('toString')       ).toBe(undefined);
    });
  });

  describe("#unset", function() {
    it("should delete the key from the hash", function() {
      hash = new Hash({a:1,b:2});
      hash.unset('a');
      expect( hash.keys() ).toEqual(['b']);
    });
    it("should return the value of the unset key", function() {
      hash = new Hash({a:1,b:2});
      expect( hash.unset('a') ).toBe(1);
    });
  });

  describe("#toObject", function() {
    it("should return a new object with the keys and values of the hash", function() {
      hash = new Hash({a:1,b:2});
      var object = hash.toObject();
      expect( Object.keys(object)   ).toEqual( hash.keys()   );
      expect( Object.values(object) ).toEqual( hash.values() );

      expect( hash.toObject() ).toEqual( hash.toObject() );
      expect( hash.toObject() ).not.toBe( hash.toObject() );
    });
  });

  describe("#keys", function() {
    it("should return the keys in the hash", function() {
      hash = new Hash({a:1,b:2});
      expect( hash.keys() ).toEqual(['a','b']);
    });
  });

  describe("#values", function() {
    it("should return the values in the hash", function() {
      hash = new Hash({a:1,b:2});
      expect( hash.values() ).toEqual([1,2]);
    });
  });

  describe("#update", function() {
    it("should copy the keys and values of the given object into the hash", function() {
      hash = new Hash;


    });

  });

});
