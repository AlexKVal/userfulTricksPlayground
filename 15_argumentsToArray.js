function print_args() {
  console.log(arguments);
  var argArray = Array.prototype.slice.call(arguments);
  console.log(argArray);
}

print_args(1, 'ff', 3);
