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
it is generally recommended to use function expressions over declarations.

## Invocation
() invokes a function.

Using () to invoke a function right after it is defined.

## Return
If a return value is not specified then the function returns undefined.

- case of constructor, return value of this.

## Parameters
  Parameters are the names of variables in a function definition.
### Default Parameters
  There are no default Parameters in ES5 however you can use type coercion to implement a simple version of default parameters.
```javascript
  var defaults = function(param1){
    param1 = param1 || 0;
  }
```
## Arguments
  Arguments are the values passed to a function upon its invocation.

  The arguments property is an object that contains all the arguments passed to a function on it's invocation.

  It's keys are numbered and it has a length property. However it is not an array and has no access to array methods.

## Callbacks aka Higher Order Functions
  A callback is a function passed to another function as a parameter and called within that function.
  You can pass a named function or use an Anonymous function.

## Anonymous Function
  Unnamed function passed as an argument to a higher order function.

## Closure
  A closure is a function that retains access to the variables of it's parent scope after the parent function has completed execution.
  
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
