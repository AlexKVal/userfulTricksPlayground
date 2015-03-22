function doSomething() {
  console.log('doSomething()');
}

// instead of
// if (foo == 10) doSomething();
// use &&
var foo = 10;
foo == 10 && doSomething();

// instead of
// if (foo != 5) doSomething();
// use ||
foo == 5 || doSomething();

// OR could be used to set defaults
function someFunction(arg1) {
  arg1 = arg1 || 10;
  return arg1;
}

console.log('someFunction(123) ', someFunction(123));
console.log('someFunction() ', someFunction());
