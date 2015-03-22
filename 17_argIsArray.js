function isArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
}

console.log('[1,2,3] ' + isArray([1,2,3]));
console.log('{a:1, b:2} ' + isArray({a:1, b:2}));
console.log('1,2,3 ' + isArray(1,2,3));

console.log('\n\n--------------------------');
console.log('or use new Array.isArray()');

console.log('[1,2,3] ' + Array.isArray([1,2,3]));
console.log('{a:1, b:2} ' + Array.isArray({a:1, b:2}));
console.log('1,2,3 ' + Array.isArray(1,2,3));
