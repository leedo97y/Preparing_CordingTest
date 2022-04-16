/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  strs.sort();
  console.log(strs);
  for(let i = 0; i < strs[0].length; i++) {
    if(strs[0][i] !== strs[strs.length - 1][i]) {
      return strs[0].substr(0,i);
    } 
  }
  return strs[0];
};