[Back](../../,,/)

# Variables
- [Array](./Array)
- [Boolean](./Boolean)
- [Number](./Number)
- [Object](./Object)
- [String](./String)

Information is stored in variables.

Because JavaScript is dynamically typed any variable can store any type of information.

```JavaScript
  var one = 1,
      two = 'two'
```

## checking variable type
Because any variable can be of any type, we sometimes need to check what type a variable is.
Unfortunately it isn't always as clear which of the options we should use.

typeof
```JavaScript
  typeof(someVar)

  typeof otherVar
```

instanceof
```JavaScript
  myStr instanceof String
```

<Variable>.constructor
```JavaScript
  var test = 1
  test.constructor === Number
```

Number.isNaN()
```JavaScript
  isNaN(NaN)

  Number.isNaN(NaN)
```

The best way to check an array is with Array.isArray()
```JavaScript
  Array.isArray([])
```

## variable shadowing
Sometimes also called masking

if a variable is declared in another scope if will 'shadow' the variable of the same name in it's parent scope.

[Back](../../,,/)
