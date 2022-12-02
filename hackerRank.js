////////////////// Alice and Bob reviewer (HackerRank) /////////////////////

// Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.

// The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).

// The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

// If a[i] > b[i], then Alice is awarded 1 point.
// If a[i] < b[i], then Bob is awarded 1 point.
// If a[i] = b[i], then neither person receives a point.
// Comparison points is the total points a person earned.

// Given a and b, determine their respective comparison points.

// Example

// a = [1, 2, 3]
// b = [3, 2, 1]
// For elements *0*, Bob is awarded a point because a[0] .
// For the equal elements a[1] and b[1], no points are earned.
// Finally, for elements 2, a[2] > b[2] so Alice receives a point.
// The return array is [1, 1] with Alice's score first and Bob's second.

// Function Description

// Complete the function compareTriplets in the editor below.

// compareTriplets has the following parameter(s):

// int a[3]: Alice's challenge rating
// int b[3]: Bob's challenge rating
// Return

// int[2]: Alice's score is in the first position, and Bob's score is in the second.
// Input Format

// The first line contains 3 space-separated integers, a[0], a[1], and a[2], the respective values in triplet a.
// The second line contains 3 space-separated integers, b[0], b[1], and b[2], the respective values in triplet b.

// Constraints

// 1 ≤ a[i] ≤ 100
// 1 ≤ b[i] ≤ 100

/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function compareTriplets(a, b) {
    // Write your code here
    
    let alice = 0;
    let bob = 0;
    
    for (let i = 0; i < 3; i++) {
        
        //In case A is bigger than B. Alice wins one point
        if (a[i] > b[i]) {
            alice++
        }
        
        //In case B is bigger than A. Bob wins one point
        if (a[i] < b[i]) {
            bob++
        }

    }
    
    return [alice, bob]

}

////////////////// Diagonal Difference (HackerRank) /////////////////////\
//Given a square matrix, calculate the absolute difference between the sums of its diagonals.
//For example, the square matrix arr is shown below:
//1 2 3
//4 5 6
//9 8 9
//The left-to-right diagonal = 1 + 5 + 9 = 15. The right to left diagonal = 3 + 5 + 9 = 17. Their absolute difference is
//15 - 17 = 2
//Function description
//Complete the diagonal difference function in the editor below.
//diagonalDifference takes the following parameter:
//* int arr[n][m]: an array of integers
//Return
//* int: the absolute diagonal difference
//Input Format
//The first line contains a single integer, n, the number of rows and columns in the square matrix arr.
//Each of the next n lines describes a row, arr[i], and consists of n space-separated integers arr[i][j].
//Constraints
// * -100 <= arr[i][j] <= 100
//Output Format
//Return the absolute difference between the sums of the matrix's two diagonals as a single integer.

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

//The code that I wrote
function diagonalDifferenceMine(arr) {
  // Write your code here
  let leftToRight = 0;
  let rightToLeft = 0;
  
  //
  for (let i = 0, j = arr[i + 1].length - 1; i < arr[0]; i++, j--){
      
      leftToRight += arr[i + 1][i]
      rightToLeft += arr[i + 1][j]
      console.log(leftToRight, rightToLeft)
      
  }
  
  return Math.abs(leftToRight - rightToLeft);

}

//The solution that I found
function diagonalDifference(arr) {
  var n = arr.length; 
  var d1 = 0;
  var d2 = 0;
for(var i=0; i<n; i++){
   for(var j=0; j<n; j++){
     // finding the sum of primary diagonal
       if(i === j) {
         d1 += arr[i][j];
       }
     // finding the sum of secondary diagonal
       if(i + j === n - 1){
          d2 += arr[i][j];
       }
    }
}
return Math.abs(d1 - d2);
}

diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]])

////////////////////////////////    Plus Minus (HackerRank)      /////////////////////////////////////
// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero.
// Print the decimal value of each fraction on a new line with 6 places after the decimal.
//Example:
//arr = [1, 1, 0, -1, -1]
// There are  elements, two positive, two negative and one zero. 
// Their ratios are 2 / 5 = 0.400000, 2 / 5 = 0.400000 and 1 / 5 = 0.200000. Results are printed as:
// Function Description
// Complete the plusMinus function in the editor below.
// plusMinus has the following parameter(s):
// * int arr[n]: an array of integers
// Print
// Print the ratios of positive, negative and zero values in the array. 
// Each value should be printed on a separate line with 6 digits after the decimal. 
// The function should not return a value.


const plusMinus = (arr) => {
  
  let positiveNumbers = 0;
  let negativeNumbers = 0;
  let zeros = 0;
  let length = arr.length;
  
  for (let i = 0; i < length; i++) {
  
    if (arr[i] > 0) positiveNumbers++
    
    if (arr[i] < 0) negativeNumbers++
    
    if (arr[i] === 0) zeros++
    
  }
  
  let positiveDecimalNumber = (positiveNumbers / length).toFixed(6);
  let negativeDecimalNumber = (negativeNumbers / length).toFixed(6);
  let zerosDecimalNumber = (zeros / length).toFixed(6);
  
  console.log(positiveDecimalNumber);
  console.log(negativeDecimalNumber);
  console.log(zerosDecimalNumber);
  
}

//plusMinus([1, 1, 0, -1, -1]);

/////////////////////////////////////////      Staircase detail       //////////////////////////////////////////////
//This is a staircase of size n = 4:
//#
//##
//###
//####
//Its base and height are both equal to n. 
//It is drawn using # symbols and spaces. 
//The last line is not preceded by any spaces.
//Write a program that prints a staircase of size n.
//Explanation
//The staircase is right-aligned, composed of # symbols and spaces, and has a height and width of n = 6

function staircase(n) {
  // Write your code here
  let rows = [];
  let staircase = '';
  
  //Primer ciclo para establecer el array y ver cuantos espacios habrian
  for (let i = 0; i < n; i++) {
    rows.push(' ');
  }
  
  //Segundo ciclo para reemplazar los espacios por el simbolo
  for (let i = rows.length - 1; i >= 0; i--) {
    
    rows.splice(i, 1, '#')
    staircase = rows.join('')
    console.log(staircase);
  }
  
}