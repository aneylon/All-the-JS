# Object Oriented Programming
JavaScript does not allow for true object oriented programming. However it can ape some of the syntax and structure of traditional Object Oriented Programing languages in a variety of ways.

## Decorator Functions
Function that add properties to objects

## Functional Classes
Functions that create a class of objects

## Prototypal Classes


## Pseudoclassical Classes


var MakeCar = function(name,startingLocation){
  return {
    name: name,
    loc: startingLocation
  }
}

var moveForward = function(car){
  car.loc += 1;
}

var CarOne = makeCar('One',0);
var CarTwo = MakeCar('Two',2);

// Decorator - Function that adds properties to an existing object

var SetLocation = function(object, loc){
  loc = loc || 1; // what about zero?
  return object.loc = loc;
}

//Using a global function
//vs
//using a decorator to add a new method
// issues with 'this'

// Functional Classes
// Build the object
// Functional-Shared
var Constructor = function(param){
  var obj = {param: param};
  var func = func;
  return obj;
};

var func = function(){
  this.param++;
}

// Functional-Duplicate
//

Object.create() new object with link to prototype

// variable 'masking' - scope

// Prototypal Classes
var Constructor = function(param){
  var obj = Object.create(Constructor.prototype);
  obj.param = param;
  return obj;
};
Constructor.prototype.method = function(){ this.param++ };

// Pseudoclassical Classes
new keyword causes function to be run in construction mode.

var Constructor = function(param){
  this.param = param;
};
Constructor.prototype.method = function(){ this.param++ };


// Sub classes
// Functional Subclasses
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

// Pseudoclassical Subclasses
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