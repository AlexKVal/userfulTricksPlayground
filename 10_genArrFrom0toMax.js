

setInterval(function () {
  var max = Math.floor(Math.random() * 10);

  var numbersArray = [];
  for (var i = 1; numbersArray.push(i++) < max;);

  console.log(require('util').inspect(numbersArray, { depth: null }));
}, 200);
