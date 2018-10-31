/*
  Create a function called 'isUnique'.
  It should take a string as an argument.
  If the string has any repeated characters it should return false.
  If the string has no repeated characters it should return true.
*/
var isUnique = function(str) {
  var count = {}

  for(var i = 0; i < str.length; i++) {
    if(count[str[i]] !== undefined){
      return false
    } else {
      count[str[i]] = 1
    }
  }
  return true
}

/*
  Create a function called 'isPermutation'.
  It should take two strings as arguments.
  It should return true if the second string is a permutation of the first.
  It should return false if the second string is not a permutation of the first.
*/

var isPermutation = function(strOne, strTwo) {
  console.log(arguments)
  var mapOne = stringToObj(strOne)
  var mapTwo = stringToObj(strTwo)

  if(Object.keys(mapOne).length !== Object.keys(mapTwo).length)
    return false

  // check that each key has same value  

  function stringToObj(str){
    var obj = {}
    for(var i = 0; i < str.length; i++){
      if(obj[str[i]] === undefined)
        obj[str[i]] = 1
      else 
        obj[str[i]] ++
    }
    return obj
  }
}