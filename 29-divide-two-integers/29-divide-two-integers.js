/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  let result = "";
  
  let Max = 2 ** 31 - 1;
  let Min = -(2 ** 31);
  
  let num = dividend / divisor;
  result = parseInt(num);
  
  if (result > Max) {
    return Max;
  } else if (result < Min) {
    return Min;
  }
  
  //console.log(result);
  return result;
};