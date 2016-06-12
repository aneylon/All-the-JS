console.log('recursion tests');

var expect = chai.expect;
var should = chai.should();
var assert = chai.assert;

describe('Count Down', function(){
  it('yeah', function(){
    expect(countDownFrom).to.be.a('function');
    assert.typeOf(countDownFrom, 'function');
    countDownFrom.should.be.a('function');
  })
  
  it('should use recursion', function(){
    var origonalCount = countDownFrom;
    countDownFrom = sinon.spy(countDownFrom);
    countDownFrom(3);
    expect(countDownFrom.callCount).to.be.above(1);
    countDownFrom = origonalCount;
  })
})