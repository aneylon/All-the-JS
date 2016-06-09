#Functions
  typeof returns 'function'
  instanceof is 'function'

  But functions are objects.
  They have properties and methods.

## Definition
The difference between difining with the var keyword or without.
```javascript
function functionName(){
  // statements
}

||

var functionName = function(){
  // statements
}

```

## Invocation
() invokes a function.
Using () to invoke a function right after it is defined.

## Return
If a return value is not specified then the function returns undefined.

## Parameters
  Parameters are the names of variables in a function definition

## Arguments
  The arguments property is an object that contains all the arguments passed to a function on it's invocation.
  It's keys are numbered and it has a length property. However it is not an array and has no access to array methods.

## Callbacks
  
## Anonymous Function

## Closure
```javascript
var outer = function(){
  var _private = 0;
  var inner = function(){
    // statements
    return _private += 1;
  }
  return inner;
}

```

## IIFE
#### Immediately Invoked Function Expressions
aka Self Executing Anonymous Functions
aka Self Invoked Anonymous Functions

Functions that run as soon as they are defined.
Useful for creating private variables.
```javascript
(function(){
  //statements
})();
```