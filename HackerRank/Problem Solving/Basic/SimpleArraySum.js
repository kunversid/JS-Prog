/*
 * Complete the 'simpleArraySum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY ar as parameter.
 */

function simpleArraySum(ar) {
    // Write your code here
    var sum = 0;
    for (var i = 0; i < ar.length; i++) {
        sum += ar[i];
    }
    return sum;
}