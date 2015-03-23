// it's possible to write a function that create an object
// whose prototype is the given argument

function clone(baseObject) {
  function OneShotConstructor(){}
  OneShotConstructor.prototype = baseObject;
  return new OneShotConstructor();
}

var clonedObject = clone(Function);

console.log(clonedObject.prototype); // [Function: Empty]
