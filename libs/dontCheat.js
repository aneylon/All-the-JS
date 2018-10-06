function didntCheat(functionToCheck, thingsToCheck){
  functionToCheck = functionToCheck + ''
  if(Array.isArray(thingsToCheck)){
    for(var thing in thingsToCheck){
      return checker(thing, functionToCheck)
    }
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