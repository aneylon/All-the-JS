# ES6 Cheat Sheet

## Template literals
`text and ${variables}`

## Block Scoping
let and const can define variables that are restricted to the block in which they are defined.

## Functions
### Default Parameters
Specify the value of an argument if none is provided.
```javascript
  function stuff(thing = 'things'){
    console.log('Do stuff with a ' + thing)
  }
```

### Arrow functions
have no *this* context. have no *arguments* object.
```javascript
var myFunc = (ArgOne) => {
  console.log(ArgOne)
}
```

### Rest parameter and Spread operator
Spread expands a collection into single elements.

Rest collects remaining elements into an array.

```javascript
var stuff = ['a', 2, {whatever: 'man'}]
// rest
console.log(...stuff)
// spread
var someChars = [...stuff[2].whatever]
var aNewObj = {...stuff[2]}
```
