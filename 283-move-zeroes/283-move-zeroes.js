/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let pointerL = 0;
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[pointerL]] = [nums[pointerL], nums[i]];
      pointerL++;
    }
  }
  return nums;
    
};