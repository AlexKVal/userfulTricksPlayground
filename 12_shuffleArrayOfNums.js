var numbers = [5, 458 , 120 , -215 , 228 , 400 , 122205, -85411];

setInterval(function () {
  numbers = numbers.sort(function () {return Math.random() - 0.5});
  console.log(numbers.toString());
}, 300);
