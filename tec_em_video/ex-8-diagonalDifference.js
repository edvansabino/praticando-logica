/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
  let leftDiagonal = 0;
  let rightDiagonal = 0;
  for(let index = 0; index < arr.length; index += 1) {
    leftDiagonal += arr[index][index];
        rightDiagonal += arr[index][arr.length - 1 - index];
  }
  return Math.abs(leftDiagonal - rightDiagonal);
}

console.log(diagonalDifference([[1, 2, 3], [4, 5, 6], [9, 8, 9]]));
