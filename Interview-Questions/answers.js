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