var numbers = [5, 458 , 120 , -215 , 228 , 400 , 122205, -85411];
console.log(numbers);
console.log(numbers.sort(function (a,b) {return a-b;}));

console.log('min ' + Math.min.apply(Math, numbers));
console.log('max ' + Math.max.apply(Math, numbers));
