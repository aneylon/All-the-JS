console.log('recursion tests');

var expect = chai.expect;
var should = chai.should();
var assert = chai.assert;

describe('Count Down', function(){
  it('Logs numbers in order to the console', function(){
    expect(countDownFrom).to.be.a('function');
    assert.typeOf(countDownFrom, 'function');
    countDownFrom.should.be.a('function');
  });

  it('Extra Credit: Does not use an inner function', function(){
  // it('should use recursion', function(){
    var origonalCount = countDownFrom;
    countDownFrom = sinon.spy(countDownFrom);
    countDownFrom(3);
    expect(countDownFrom.callCount).to.be.above(1);
    countDownFrom = origonalCount;
  });
});

describe('power', function(){
  it('rise base to exponent', function(){
    expect(power(2,2)).to.equal(Math.pow(2,2));
    // add random tests
    expect(power).to.be.a('function');
    expect(power(2,2)).to.be.a('number');
  });
  it('Extra Credit: Does not an use inner function', function(){
  // it('use recusion', function(){
    var origonalPower = power;
    power = sinon.spy(power);
    power(3,3);
    expect(power.callCount).to.be.above(1);
    power = origonalPower;
  });
});

describe('Flatten Array', function(){
  it('Input should be flattened', function(){
    expect(flatten).to.be.a('function');
    expect(flatten([1,[2,[3]],[4,5],[[[[6]]]]])).to.eql([1,2,3,4,5,6]);
    expect(flatten([1,2,3])).to.eql([1,2,3]);
  });

  it('Extra Credit: Does not use an inner function', function(){
  // xit('should use recursion', function(){
    // sinon.spy(flatten([1,[2,[3]]]));
    var spyFlatten = sinon.spy(flatten);
    expect(spyFlatten.callcount).to.be.above(1);
  });
});


describe('All Anagrams', function(){
  var tests = [
    {question: 'abc', answer:['abc','acb','bac','bca','cab','cba']},
    {question: '12', answer:['12','21']},
  ]
  it('should produce every anagram', function(){
    // console.log(allAnagrams(tests[0].question))
    tests.forEach(function(test){
      expect(allAnagrams(test.question)).to.eql(test.answer)
    })
  })

  xit('Extra Credit: Does not use an inner function', function(){

  })
})


describe('Rock, Paper, Permutation', function(){
  var tests = [
    {rounds: 0, answer:[]},
    {rounds: 1, answer:['r','p','s']},
    {rounds: 2, answer:['rr','rp','rs','pr','pp','ps','sr','sp','ss']}
  ]
  it('Given a number of rounds, return an array of strings for all possible plays', function(){
    tests.forEach((test) => {
      expect(rockPaperPermutation(test.rounds)).to.eql(test.answer)
    })
  })

  xit('Extra Credit: Does not use an inner function', function(){

  })
})
