function isArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
}

console.log('[1,2,3] ' + isArray([1,2,3]));
console.log('{a:1, b:2} ' + isArray({a:1, b:2}));
console.log('1,2,3 ' + isArray(1,2,3));
