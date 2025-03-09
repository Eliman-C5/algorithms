//1. Two Sum (Easy)
//https://leetcode.com/problems/two-sum/description/
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

///////My solution: Runtime 33 ms
function twoSum(nums: number[], target: number): number[] {
  let account: number;

  for (let i = 0; i < nums.length; i++) {
    for (let x = i + 1; x < nums.length; x++) {
      account = nums[i] + nums[x];

      if (account === target) return [i, x];
    }
  }
  return [];
}

///////Result:
// Runtime 33 ms
// Beats 37.60%

/////Time complexity: O(n^2)

/////The best solution: Runtime: 1ms
function twoSumBestSolution(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }
    map.set(nums[i], i);
  }

  throw new Error("No solution found");
}

// Code Explanation:

// 1. function twoSum(nums: number[], target: number): number[] { ... }:
// This defines a function named twoSum that takes two arguments:
// nums: An array of numbers.
// target: The target sum.
// The function is expected to return an array of two numbers, representing the indices of the two numbers in nums
// that add up to target.

// 2. const map = new Map<number, number>();:
// This line creates a Map data structure. A Map is like a dictionary or hash table that stores key-value pairs. In this case:
// The keys will be numbers from the nums array.
// The values will be the indices of those numbers in the nums array.
// The map is used to store previously seen numbers and their indices, allowing for efficient lookups.

// 3. for (let i = 0; i < nums.length; i++) { ... }:
// This loop iterates through each element in the nums array.
// i represents the index of the current element.

// 4. const complement = target - nums[i];:
// For each number nums[i], this line calculates the complement needed to reach the target.
// Example: If target is 9 and nums[i] is 4, then complement will be 5.

// 5. if (map.has(complement)) { ... }:
// This checks if the complement is already present as a key in the map.
// If the complement is found in the map, it means we have already encountered a number that, when added to the current number, equals the target.

// 6. return [map.get(complement)!, i];:
// If the complement is found in the map:
// map.get(complement) retrieves the index of the complement from the map.
// ! is the non-null assertion operator. It tells the compiler that we are sure that map.get(complement) will not return null or undefined, because we just checked if the key exist with the map.has() method.
// The function returns an array containing the index of the complement and the current index i.

// 7. map.set(nums[i], i);:
// If the complement is not found in the map, this line adds the current number nums[i] and its index i to the map. This way, if we encounter its complement later, we can find it.

// 8. throw new Error("No solution found");:
// If the loop completes without finding a pair of numbers that add up to the target, this line throws an error, indicating that no solution exists.
// In essence, the code uses a Map to efficiently check for complements as it iterates through the array. This approach avoids nested loops, resulting in a time complexity of O(n), where n is the length of the nums array.
