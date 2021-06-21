/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Write your code here
    var len = arr.length;
    var leftDiagonalSum = 0, rightDiagonalSum = 0;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len; j++) {
            if (i === j) {
                leftDiagonalSum += arr[i][j];
            }
            if ((i + j) === len - 1) {
                rightDiagonalSum += arr[i][j];
            }
        }
    }
    return Math.abs(leftDiagonalSum - rightDiagonalSum);
}