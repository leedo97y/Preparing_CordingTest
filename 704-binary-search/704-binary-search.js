/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  
  for (let i = 0; i < nums.length; i++) {
    if (nums.includes(target) === true) {
      return nums.indexOf(target);
      console.log(nums.indexOf(target))
    } else {
      return -1;
    }
  }
    
};