var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

describe('Numbers', function(){
  it('Whole numbers / Integers', function(){
    expect(myLuckyNumber).to.be.a('number');
    expect(myLuckyNumber).to.equal(7);
  })
  it('Decimal numbers', function(){
    expect(mySliceOfPie).to.equal(3.14);
    expect(mySliceOfPie).to.be.a('number');
    expect(mySliceOfPie+'').to.contain('.');
  })
})

describe('Strings', function(){
  it('String literals',function(){
    expect(myMessage).to.be.a('string');
    expect(myMessage).to.equal('Hello JavaScript');
  })
})

describe('Booleans', function(){
  it('Logical values', function(){
    expect(isTrue).to.be.a('boolean');
    expect(isTrue).to.equal(true);
    expect(isNotTrue).to.be.a('boolean');
    expect(isNotTrue).to.equal(false);
  })
})