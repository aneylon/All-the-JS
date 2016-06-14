# Basics
### variables and types

numbers

strings

booleans

arrays

#objects
Objects are reference variables as opposed to Numbers, Strings and Booleans.

object literals
```javascript
    var myObj = {};
```
Properties can be set with either Dot ( . ) or Bracket ( [] ) notation.
```javascript
    myObj.firstProp = "First";
    myObj['secondProp'] = 2;
```
The key and value pair together are the property.
To use spaces and special characters in key names you must use bracket notation.
```javascript
    myObj['third property!'] = "So fancy.";
```
Lookups use the same notation. Look ups to keys that have not been set return undefined
```javascript
    var first = myObj['firstProp'];
    var second = myObj.secondProp'
    var fourth = myObj.fourth; // returns undefined
```
Bracket notation and variables can be used to set and retreive properties by refereing to a key dynamicaly.
```javascript
    var test = 'something';
    myObj[test] = 'not nothing';
```
Keys and values can also be set along with the declartation of the variable
```javascript
    var myNewObj = {
        propOne: 1,
        2: 'second prop',
        'third prop': [1,2,3]
    };
```
If a number is used for a key then it can be referenced with either the number or as a stringified version of that number.

functions

null

undefined

NaN

typeof

instanceof

isNaN
