/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const arr = new Array();
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        if (target == nums[i] + nums[j]) {
          arr[0] = i;
          arr[1] = j;
          break;
        } 
    }
  } 
  
  return arr;
};




