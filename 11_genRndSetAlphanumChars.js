function generateRandomAlphaNum(len) {
  var rdmString = '';
  var counter = 0;
  for (; rdmString.length < len; rdmString += Math.random().toString(36).substr(2))
  {
    console.log('Iterations %d', counter++);
  }
  return rdmString.substr(0, len);
}

setInterval(function () {
  console.log(generateRandomAlphaNum(50));
}, 300);
