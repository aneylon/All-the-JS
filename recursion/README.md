[Back](../../../)

# Recursion
  At it's most basic definition, recursion is when a function calls itself.

## Patterns
### Inner function
```javascript
  var outer = function(param){
    var result = [];
    var inner(otherParam){
      // base case
      inner(); // recursive call
    }
    inner(param); // start

  return result;
}
```
### Default properties
```javascript
  var recurse = function(obj, param){
    param = param || [];
    if(baseCase) return;

    return recurse(obj)
  }
```

### Something else
```javascript
  var recurse = function(collection){
    if(baseCase) return;
    return recurse(something);
  }
```

[Back](../../../)
