/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    var minSum = 0, maxSum = 0;
    arr.sort();
    var len = arr.length
    for (var i = len - 2, j = 1; i >= 0; i--, j++) {
        minSum += arr[i];
        maxSum += arr[j];
    }
    console.log(minSum + " " + maxSum);
}
