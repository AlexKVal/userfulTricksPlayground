var min = 23;
var max = 140;

setInterval(function () {
  var x = Math.floor(Math.random() * max - min + 1) + min;
  console.log('Rnd from [%d..%d] %d', min, max, x);
}, 100);
