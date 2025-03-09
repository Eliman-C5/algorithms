//9. Palindrome Number (Easy)
//https://leetcode.com/problems/palindrome-number/description/
// Given an integer x, return true if x is a palindrome, and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

///////My solution: Runtime 8 ms
function isPalindrome(x: number): boolean {
  if (x < 0) return false;

  const arrayOfNumbers = Array.from(String(x)).reverse();

  let fromLeftToRight = "";

  arrayOfNumbers.forEach((item) => {
    fromLeftToRight = fromLeftToRight + item;
  });

  return Number(fromLeftToRight) === x;
}

///////Result:
// Runtime 8 ms
// Beats 54.22%

/////The best solution: Runtime: 2ms

function isPalindromeBestSolution(x: number): boolean {
  if (x < 0) return false;
  if (x === 0) return true;
  if (x % 10 === 0) return false;
  let i = 0;
  while (x > i) {
    const d = x % 10;
    i = i * 10 + d;
    x = Math.floor(x / 10);
  }
  return x === i || x === Math.floor(i / 10);
}
