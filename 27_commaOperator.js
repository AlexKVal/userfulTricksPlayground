// https://javascriptweblog.wordpress.com/2011/04/04/the-javascript-comma-operator/
// lives ? (lives--, go()) : (gameOver(), exit());

var a = 0;
var b = (a++, 99);
console.log('a ' + a);
console.log('b ' + b);

console.log('\n\n--------------');
function demo(arg) {
  return arg ? (console.log('1 in 1'), console.log('2 in 1'), '11') : (console.log('1 in 2'), console.log('2 in 2'), '22');
}
console.log('true:');
console.log(demo(true));
console.log('\nfalse:');
console.log(demo(false));
