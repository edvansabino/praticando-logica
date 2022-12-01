function miniMaxSum(arr) {
  let maxNum = arr[0];
  let minNum = arr[0];
  let sum = 0;

  for (let index = 0; index < arr.length; index += 1) {
    if (maxNum < arr[index]) {
      maxNum = arr[index];
  } else if (minNum > arr[index]) {
      minNum = arr[index];
  }
  sum += arr[index];
  };
  let maxSum = sum - minNum;
  let minSum = sum - maxNum;
  console.log(minSum + ' ' + maxSum); 
};

miniMaxSum([1, 3, 5, 7, 9]);