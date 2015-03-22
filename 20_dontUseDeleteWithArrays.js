var items = [12, 548 ,'a' , 2 , 5478 , 'foo' , 8852, , 'Doe' ,2154 , 119 ];
console.log(items);
console.log(items.length);
delete items[3];
console.log(items.length);
console.log(items);

console.log('\n\n------------------');
console.log('use splice instead');

var items = [12, 548 ,'a' , 2 , 5478 , 'foo' , 8852, , 'Doe' ,2154 , 119 ];
console.log(items);
console.log(items.length);
items.splice(3,1);
console.log(items.length);
console.log(items);
