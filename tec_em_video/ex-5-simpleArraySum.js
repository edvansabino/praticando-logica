function simpleArraySum(ar) {
  let sum = 0;
  for (let i = 0; i < ar.length; i++) {
    sum += ar[i];
  }
  return sum;
};

console.log(simpleArraySum([7, 9, 3, 15, 23, 51, 62, 18, 7, 26]));
