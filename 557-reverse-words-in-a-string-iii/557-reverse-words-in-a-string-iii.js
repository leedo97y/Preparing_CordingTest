/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let str = [];
  str = s.split("").reverse().join("").split(" ").reverse().join(" ");
  
  return str; 
};