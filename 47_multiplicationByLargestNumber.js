function multiMax(multi){
  // Make an array of all but the first argument
  var allButFirst = Array().slice.call( arguments, 1 );

  // Find the largest number in that array of arguments
  var largestAllButFirst = Math.max.apply(Math, allButFirst);

  var result = multi * largestAllButFirst;
  console.log('%d * %d = %d', multi, largestAllButFirst, result);
  // Return the multiplied result
  return result;
}

console.log('8, 2,3,4,5');
console.log(multiMax(8,2,3,4,5));

// assert( multiMax(3, 1, 2, 3) == 9, "3*3=9 (First arg, by largest.)" );
