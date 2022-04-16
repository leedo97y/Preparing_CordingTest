/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let romanInt = {
    'I' : 1,
    'V' : 5,
    'X' : 10,
    'L' : 50,
    'C' : 100,
    'D' : 500,
    'M' : 1000
    }
  
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (romanInt[s[i]] < romanInt[s[i + 1]]) {
      result = result + (romanInt[s[i + 1]] - romanInt[s[i]]);
      i++;
      continue;
    }
    result += romanInt[s[i]];
  }
  
  return result;  
};