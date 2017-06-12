var expect = chai.expect;
var should = chai.should();
var assert = chai.assert;

describe('Duck Duck Goose', () => {
  let players = ['a','b','c','d','e']
  it('Should return the selected "player"', () => {
    expect(duckDuckGoose(players,1)).to.equal('a')
    expect(duckDuckGoose(players,6)).to.equal('a')
    expect(duckDuckGoose(players,11)).to.equal('a')
  })
})

describe('URLify', () => {
  it('Should replace all spaces between words with "%20"', () => {
    expect(URLify('this is a test')).to.equal('this%20is%20a%20test')
  })
  it('Should remove leading and trailing spaces', () => {
    expect(URLify('  No goods  ')).to.equal('No%20goods')
  })
})

describe('Is Permutation', () => {
  it('Should return false if the strings are identical', () => {
    expect(isStringPermutation('one','one')).to.equal(false)
  })
  it('Should return true if the second string is a permuation of the first', () => {
    expect(isStringPermutation('silent', 'listen')).to.equal(true)
  })
  it('Should return false if the second string is not a permutation of the first', () => {
    expect(isStringPermutation('asdf', 'qwer')).to.equal(false)
    expect(isStringPermutation('asdf', 'fdsaq')).to.equal(false)
  })
  it('Should be case agnostic', () => {
    expect(isStringPermutation('Dog', 'God')).to.equal(true)
  })
  it('Should return false if either argument is ommited or not a string', () => {
    expect(isStringPermutation()).to.equal(false)
  })
})

describe('All Letters Unique', () => {
  it('Should return false if no string is provided.', () => {
    expect(allLettersUnique()).to.equal(false)
  })
  it('Should return false if any letter is repeated', () => {
    expect(allLettersUnique('look')).to.equal(false)
    expect(allLettersUnique('mississippi')).to.equal(false)
  })
  it('Should be case insensitive.',() => {
    expect(allLettersUnique('Abba')).to.equal(false)
  })
  it('Should return true if all letters are unique.', () => {
    expect(allLettersUnique('One')).to.equal(true)
    expect(allLettersUnique('Two')).to.equal(true)
    expect(allLettersUnique('Four')).to.equal(true)
  })
})

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
