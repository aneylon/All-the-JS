var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

describe('test', function(){
  it('what', function(){
    expect(isTrue).to.equal(true);
    assert.equal(isTrue, true);
    isTrue.should.equal(true);
  })
})