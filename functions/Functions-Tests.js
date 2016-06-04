var expect = chai.expect;

describe('Function Basics', function(){
  it('Definition', function(){
    expect(myFirstFunc).to.be.a('function');
    expect(myFirstFunc()).to.equal(undefined);
  })
  it('Return', function(){
    expect(mySecondFunc).to.be.a('function');
    expect(mySecondFunc(3)).to.equal(3);
  })
})