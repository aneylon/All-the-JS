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
