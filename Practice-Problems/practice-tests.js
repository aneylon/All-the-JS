var expect = chai.expect;
var should = chai.should();
var assert = chai.assert;

describe('Simple Reducer', () => {
  it('Should increment a counter', () => {
    expect(simpleReducer(0, {type: 'INCREMENT'})).to.equal(1)
  })
  it('Should decrement a counter', () => {
    expect(simpleReducer(1, {type: 'DECREMENT'})).to.equal(0)
  })
  it('Should do nothing when passed an unknown action', () => {
    expect(simpleReducer(1, {type: 'UNKNOWN_ACTION'})).to.equal(1)
  })
  it('Should do return the "initial state" when not passed a state object', () => {
    expect(simpleReducer(undefined, {})).to.equal(0)
  })
})

describe('Find Squares in a grid', function(){
  var grids = [
    [[0,0],[0,0]],
    [[0,0],[0,0]],
    [[0,0],[0,0]],
    [[0,0],[0,0]]
  ]

  it('should find the top left and bottom right coordinate of a square in a grid', function(){

  })

  it('should find multiple squares in a gird', function(){

  })

})

describe('Island Count', function(){
  var testCases = [
    {question:'.', answer:0},
    {question:'0', answer:1},
    {question:'.0...\n.00..\n....0', answer:2},
    {question:'..000.\n..000.\n..000.\n.0....\n..000.', answer:3},
    {question:'..000.\n..0...\n..0.0.\n..0...\n..000.', answer:2},
    {question:'0....0\n......\n..00..\n......\n0....0', answer:5},
    {question:'0...0\n0...0\n00000', answer:1},
    {question:'0...0\n..0..\n0...0', answer:5},
  ]
  it('should be a function', function(){
    expect(islandCount).to.be.a('function')
  })
  it('should return a number', function(){
    testCases.forEach(function(test){
      expect(islandCount(test.question)).to.be.a('number')
    })
  })
  it('should find the correct number of islands in a string', function(){
    testCases.forEach((test, i)=>{
      expect(islandCount(test.question)).to.equal(test.answer)
    })
  })
})

describe('Balanced Brackets', function(){
  var testCases = [
    { question: [], answer: -1},
    { question: [ 11, 1, 5, 5, 1 ], answer: 1},
    { question: [ 1, 2, 3, 4, 3, 2, 1 ], answer: 3},
    { question: [ 1, 1, 0, 0, 2 ], answer: 2 }
  ]
  it('Should find the first index at which the sum of all values to the left and right are equal', function(){
    testCases.forEach((test) => {
      expect(balancedIndex(test.question)).to.equal(test.answer)
    })
  })
})
