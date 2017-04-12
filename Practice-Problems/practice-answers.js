/*
  URLify
*/
const URLify = (str) => {
  let output = ''
  str = removeLeading(str)
  str = removeTrailing(str)

  for(let i = 0; i < str.length; i++){
    if(str[i] === ' '){
      output += '%20'
    } else {
      output += str[i]
    }
  }
  return output

  function removeTrailing(str) {
    let output = []
    let foundLast = false

    for(let i = str.length - 1; i >= 0; i--){
      if(!foundLast && str[i] != ' '){
        foundLast = true
        output.unshift(str[i])
      } else if (foundLast) {
        output.unshift(str[i])
      }
    }
    return output.join('')
  }

  function removeLeading(str){
    let output = ''
    let foundFirst = false

    for(let i = 0; i < str.length; i++){
      if(!foundFirst && str[i] != ' '){
        foundFirst = true
        output += str[i]
      } else if(foundFirst){
        output += str[i]
      }
    }

    return output
  }
}

/*
  Is String Permutation
*/
const isStringPermutation = function(strOne, strTwo) {
  if(arguments.length !== 2) return false
  if(typeof strOne !== 'string' || typeof strTwo !== 'string') return false
  if(strOne === strTwo) return false
  strOne = strOne.toLowerCase()
  strTwo = strTwo.toLowerCase()

  let storeOne = strToHash(strOne, {})
  let storeTwo = strToHash(strTwo, {})

  if(Object.keys(storeOne).length !== Object.keys(storeTwo).length) return false

  for(let key in storeTwo){
    if(storeOne[key] !== storeTwo[key]) return false
  }
  // all cases passed so return true
  return true

  function strToHash(str, hash){
    str.split('').forEach( item => {
      if(hash[item]) hash[item] += 1
      else hash[item] = 1
    })
    return hash
  }
}

/*
All letters unique
write a function that takes a string as an argument
it should return true if all letters in the string are unique
it should return false if any letter repeats
if the string is empty it should return false
*/
const allLettersUnique = (input) => {
  if(input === '' || input == undefined) return false
  input = input.toLowerCase()
  let storage = {}
  for(let i = 0; i < input.length; i++){
    if(storage[input[i]]){
      return false
    } else {
      storage[input[i]] = 1
    }
  }
  return true
}

// simple reducer
const simpleReducer = (state = 0, action) => {
  switch(action.type){
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

var islandCount = function(mapStr) {
  var total = 0
  var arrMap = mapStr.split('\n')
    .map((line) => {
      return line.split('')
    })
  var height = arrMap.length
  var width = arrMap[0].length

  var sinkIsland = function(row, col) {
    arrMap[row][col] = '.'
    if(col+1 < width && arrMap[row][col+1] === '0') {
      sinkIsland(row, col + 1)
    }
    if(col-1 >= 0 && arrMap[row][col-1] === '0') {
      sinkIsland(row, col - 1)
    }
    if(row-1 >= 0 && arrMap[row-1][col] === '0') {
      sinkIsland(row-1, col)
    }
    if(row+1 < height && arrMap[row+1][col] === '0') {
      sinkIsland(row+1, col)
    }
  }

  arrMap.forEach(function(row, x) {
    row.forEach(function(point, y) {
      if (point === '0') {
        total++
        sinkIsland(x, y)
      }
    })
  })

  return total
}

var findSquares = function(){

}

var  balancedIndex = function(nums) {
  var result = -1
  if(nums.length === 0) return result
  var right = nums.reduce((pre, cur) => pre + cur)
  var last = 0
  var left = 0
  var foundFirst = false
  nums.forEach((num, i) => {
    right -= num
    left += last
    if(left === right && !foundFirst){
      result = i
      foundFirst = true
    }
    last = num
  })
  return result
}
