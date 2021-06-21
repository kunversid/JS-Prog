/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    const len = arr.length;
    var posCount = 0, negCount = 0, zeroCount = 0;
    for (var i = 0; i < len; i++) {
        if (arr[i] > 0) {
            posCount++;
        } else if (arr[i] < 0) {
            negCount++;
        } else {
            zeroCount++;
        }
    }
    console.log((posCount / len).toFixed(6));
    console.log((negCount / len).toFixed(6));
    console.log((zeroCount / len).toFixed(6));
}