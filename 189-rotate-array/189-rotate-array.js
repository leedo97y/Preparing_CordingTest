/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  
  k %= nums.length
  // start point
  let removed = nums.length - k;
  // whole length - start point
  nums.splice(0,0, ...nums.splice(removed));
  // nums.splice (0, 0, add item)
  // add item in here = ...nums.splice(removed)
  
  
  if (nums.length === 1) {
    return;
  }
  // if nums.length is 1, just return 
};