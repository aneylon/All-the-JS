[Back](../../../)

# ES6 / ES2015

## let and const
```javascript

```
## Blocks
```javascript

```
## Arrow functions
```javascript
(params) => { statements }

// if there is only one parameter then parens are optional
param => { statements }

// implicit return with 'concise' body
param => expression to return

// use parens on the body to return an object
param => ({test: param})

// rest parameters and default parameters are supported
(param1 = 1, ...rest) => { statements }

// if there are no parameters then parens are required
() => { statements }

// destructuring in the parameter list is supported
```
Does not have it's own `this`, `arguments`, `super` or `new.target`

Same lexical `this` as surrounding function.

No arguments object, but could use rest parameters as a substitute.

Arrow functions cannot be used as constructors and will throw an error if `new` is used with one.

The yield keywork cannot be used so arrow functions cannot be generators.


## Template Strings
syntatic sugar for string construction

```javascript
// basic
`this is a template string`
// multiline
`this template
has two lines.`
// variable bindings
var one = 1, two = 'two';
`${one} and ${two}`;
// unescaped template strings
String.raw`in es5 "\n" is a line-feed.`
```
## Destructuring
## Parameters
### Rest
### Spread
### Default
### Destructuring

## Symbols
## Maps
## Promises
## Generators
## Classes
## Modules
## Set
## Reflect
## Arrays

[Back](../../../)
