/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for (let i = 0; i < digits.length; i++) {
      let num = BigInt(digits.join('')) + 1n;
      return Array.from(num.toString()).join().split(',');
      
    }
    
};