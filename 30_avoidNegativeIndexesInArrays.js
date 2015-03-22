var numsArray = [1,2,3,4,5];
console.log(numsArray);

var from = numsArray.indexOf("foo");
console.log('from=%s',from);

console.log(numsArray.splice(from, 2));
