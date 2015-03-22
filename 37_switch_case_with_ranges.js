function getCategory(age) {
  var category = '';
  switch (true) {
    case isNaN(age):
      category = "not an age";
      break;
    case (age >= 50):
      category = "Old";
      break;
    case (age <= 20):
      category = "Baby";
      break;
    default:
      category = "Young";
      break;
  }
  return category;
}

console.log('10 ' + getCategory(10));
console.log('30 ' + getCategory(30));
console.log('60 ' + getCategory(60));
console.log('foo ' + getCategory("foo"));

console.log('\n---------------------');
function checkingFunction(argument) {
  console.log(argument);
}

// this trick runs all cases functions till truthy function is found
switch (true) {
  case checkingFunction(3):
    break;
  case (checkingFunction(2), true):
    break;
  case checkingFunction(1):
    break;
  default:
    console.log('default');
}
