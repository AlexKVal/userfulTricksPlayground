var array1 = [12 , "foo" , {name: "Joe"}, -2458];
var array2 = ["Doe" , 555 , 100];

console.log(array1.toString());
console.log(array2.toString());

Array.prototype.push.apply(array1, array2);
console.log(array1.toString());

console.log('\n\n---------------------------');
console.log('the same but with concat():');
var array1 = [12 , "foo" , {name: "Joe"}, -2458];
var array2 = ["Doe" , 555 , 100];

console.log(array1.toString());
console.log(array2.toString());

console.log(array1.concat(array2).toString());
