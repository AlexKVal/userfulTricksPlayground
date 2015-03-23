function ObjWithPrivates(initialVal) {
  if ( ! (this instanceof ObjWithPrivates) ) throw new Error('only with new');

  var privateVar = initialVal || 0;

  this.getPrivate = function () {
    return privateVar;
  };

  this.setPrivate = function (newVal) {
    privateVar = newVal;
  };
}

var obj = new ObjWithPrivates(13);

console.log(obj.getPrivate()); // 13

obj.setPrivate(245);
console.log(obj.getPrivate()); // 245

console.log(obj.privateVar);
