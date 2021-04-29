/*
  1.普通的青蛙跳台阶
  一只青蛙，一次只能跳一级或者两级台阶，问这个青蛙跳上n级台阶有多少种跳法
  如果这只青蛙跳上了n级台阶，他的前一次一定在第n-1或者n-2级的台阶上
  那么跳上n级台阶就变成了两个子问题
  即f(n) = f(n-1) + f(n-2)  
*/
function jump(n){
    if(n == 1)
        return 1;
    if(n == 2)
        return 2;
    return jump(n-1) + jump(n-2);
}
console.log(jump(10));
/*
  1.变态的青蛙跳台阶
  一只青蛙，一次只能跳一级或者两级台阶或n级台阶，问这个青蛙跳上n级台阶有多少种跳法
  即f(n) = f(n-1) + f(n-2) + f(n-3) + .... + f(2) + f(1) + 1;(1是直接原地跳起的情况)
*/
function jump2(n){
    if(n == 1)
        return 1;
    if(n == 2)
        return 2;
    var result = 1;
    for(var i = 1; i < n; i++){
        result += jump2(n-i);
    }
    return result;
}
console.log(jump2(10));