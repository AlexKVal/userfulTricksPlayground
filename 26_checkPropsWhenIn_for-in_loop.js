// to avoid iterating through the properties from the object prototype
var BaseObject = function () {
  this.baseProp = 1;
  this.baseProp1 = 2;
};

var ChildObject = function () {
  this.childP1 = 1;
  this.childP2 = 2;
};
ChildObject.prototype = new BaseObject();

var object = new ChildObject();

console.log('just for-in loop');
console.log('----------------');
for (var name in object) {
  console.log(name);
}

console.log('\nwith using hasOwnProperty()');
console.log('---------------------------');
for (var name in object) {
  if (object.hasOwnProperty(name)) {
    console.log(name);
  }
}
