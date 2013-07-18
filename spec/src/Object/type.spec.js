describe("Object.type", function() {

  it("Object.type() === 'Undefined'", function(){
    expect( Object.type() ).toBe('Undefined');
  });


  it("Object.type(null) === 'Null'", function(){
    expect( Object.type(null) ).toBe('Null');
  });


  it("Object.type({}) === 'Object'", function(){
    expect( Object.type({}) ).toBe('Object');
  });


  it("Object.type(true) === 'Boolean'", function(){
    expect( Object.type(true) ).toBe('Boolean');
  });


  it("Object.type(5) === 'Number'", function(){
    expect( Object.type(5) ).toBe('Number');
  });


  it("Object.type('') === 'String'", function(){
    expect( Object.type("") ).toBe('String');
  });


  it("Object.type(new Date) === 'Date'", function(){
    expect( Object.type(new Date) ).toBe('Date');
  });


  it("Object.type(function(){}) === 'Function'", function(){
    expect( Object.type(function(){}) ).toBe('Function');
  });



  it("Object.type(window) === 'global'", function(){
    console.log(this)
    expect( Object.type(window) ).toBe('global');
  });


  it("Object.type(0/0) === 'NaN'", function(){
    expect( Object.type(0/0) ).toBe('NaN');
  });

});


