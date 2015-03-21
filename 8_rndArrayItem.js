var items = [12, 548 , 'a' , 2 , 5478 , 'foo' , 8852, , 'Doe' , 2145 , 119];

setInterval(function () {
  var randomItem = items[Math.floor(Math.random() * items.length)];
  console.log('Now random item is: ' + randomItem);
}, 100);
