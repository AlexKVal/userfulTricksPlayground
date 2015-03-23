function assign(target, source) {
  var keys = Object.keys(source);

  for (var i = 0; i < keys.length; i++) {
    target[keys[i]] = source[keys[i]];
  }

  return target;
}

var obj = { a: 1, b: 2, f: {} };

console.log(Object.keys(obj));
console.log(Object.getOwnPropertyNames(obj));

secObj = assign({ aa: 1, bb: 2 }, obj);
console.log(Object.keys(secObj));
console.log(Object.getOwnPropertyNames(secObj));
