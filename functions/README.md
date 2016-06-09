# Functions
  typeof returns 'function'
  
  instanceof is 'function'

  Functions are first class objects because they have properties and methods.

## Definition
function declaration
```javascript
function functionName(){
  // statements
}
```
function expressions
```javascript
var functionName = function(){
  // statements
}
```
it is generally recomended to use function expressions over declarations.

## Invocation
() invokes a function.

Using () to invoke a function right after it is defined.

## Return
If a return value is not specified then the function returns undefined.

- case of constructor, return value of this.

## Parameters
  Parameters are the names of variables in a function definition.

## Arguments
  Arguments are the values passsed to a function upon it invocation.
  
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