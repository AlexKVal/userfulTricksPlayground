function isNumber(n){
  return !isNaN(parseFloat(n)) && isFinite(n);
}

console.log('f ' + isNumber('f'));
console.log('123 ' + isNumber(123));
console.log('null ' + isNumber(null));
