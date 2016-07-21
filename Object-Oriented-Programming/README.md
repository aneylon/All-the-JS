# Object Oriented Programming
JavaScript does not allow for true object oriented programming. However it can ape some of the syntax and structure of traditional Object Oriented Programing languages in a variety of ways.

## Decorator Functions
Function that add properties to objects

### Decorator Shared
```javascript
var Constructor = function(obj, param){
  obj.param = param;
  obj.method = method;
  return obj;
}
var method = function(){};
```

### Decorator Duplicate
```javascript
var Constructor = function(obj, param){
  obj.param = param;
  obj.method = function(){};
  return obj;
}
```

## Functional Classes
Functions that create a class of objects

### Functional Shared
```javascript
var Constructor = function(param){
  var obj = {param: param};
  var func = func;
  return obj;
};

var func = function(){
  this.param++;
}
```

### Functional Duplicate
```javascript
var Constructor = function(param){
  var obj = {param: param};
  obj.param = function(){};
  return obj;
}
```

### Functional Subclasses
```javascript
var SuperClass = function(param){
  var obj = {param: parma};
  obj.method = function(){obj.param++;};
  return obj;
};
var SubClass = function(param){
  var obj = SuperClass(param);
  obj.otherMethod = function(){};
  return obj;
};
```

## Prototypal Classes

```javascript
var Constructor = function(param){
  var obj = Object.create(Constructor.prototype);
  obj.param = param;
  return obj;
};
Constructor.prototype.method = function(){ this.param++ };
```

## Pseudoclassical Classes

Use the __new__ keyword to cause the function to be run in construction mode and create an instance of a new object.

```javascript
var Constructor = function(param){
  this.param = param;
};
Constructor.prototype.method = function(){ this.param++ };
```

### Pseudoclassical Subclasses
```javascript
var SuperClass = function(param){
  this.param = param;
};
SuperClass.prototype.method = function(){
  this.param++;
};
var SubClass = function(param){
  SuperClass.call(this, param);
};
SubClass.prototype = Object.create(SuperClass.prototype);
SubClass.prototype.constructor = Van;
SubClass.prototype.otherMethod = function(){};
```