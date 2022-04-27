/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  
  k %= nums.length
  let removed = nums.length - k
  nums.splice(0,0, ...nums.splice(removed));
  
  
  
  if (nums.length === 1) {
    return;
  }
};