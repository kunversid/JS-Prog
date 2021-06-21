/*
 * Complete the 'aVeryBigSum' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER_ARRAY ar as parameter.
 */

function aVeryBigSum(ar) {
    // Write your code here
    const len = ar.length;
    var sum = 0;
    for (var i = 0; i < len; i++) {
        sum += ar[i];
    }
    return sum;
}