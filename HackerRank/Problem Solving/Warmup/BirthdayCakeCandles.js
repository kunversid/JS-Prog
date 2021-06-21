/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
    // Write your code here
    const len = candles.length;
    var tallCandleCount=0;
    var tallCandle = Math.max.apply(Math,candles);
    for(var i=0;i<len;i++){
        if(candles[i]===tallCandle){
            tallCandleCount++;
        }
    }
    return tallCandleCount;
}