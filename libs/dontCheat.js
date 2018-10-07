function didUse(functionToCheck, thingsToCheck){
  functionToCheck = functionToCheck + ''
  if(Array.isArray(thingsToCheck)){
    var allPass = true
    for(var thing in thingsToCheck){
      var res = checker(thingsToCheck[thing], functionToCheck)
      if( res === false){
        allPass = false
      }
    }
    return allPass
  } else {
    return checker(thingsToCheck, functionToCheck)
  }

  function checker(thingToCheck, functionToCheck){
    if(functionToCheck.indexOf(thingToCheck) !== -1){
      return true
    } else {
      return false
    }
  }
}