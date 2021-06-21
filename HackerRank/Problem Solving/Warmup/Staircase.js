/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
    // Write your code here
    let output = "";
    var k = n;
    for (var i = 1; i <= n; i++) {
        for (var j = 1; j <= n; j++) {
            if (j >= k) {
                output += "#";
            } else {
                output += " ";
            }
        }
        k--;
        output += "\n";
    }
    console.log(output);
}
staircase(6);