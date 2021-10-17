//////////////////PROBLEM 1////////////////////
/* Create a copy of the faveColors array called 'colorCopy' using the slice method. */

const faveColors = ['red', 'green', 'black']

let colorCopy = []; 
colorCopy = faveColors.slice(0,3);

//////////////////PROBLEM 2////////////////////
/* Add a fourth color to the end of the 'colorCopy' array using the push method. */

colorCopy.push('Periwinkle');
//console.log(colorCopy)

//////////////////PROBLEM 3////////////////////
/*
  Using an array method, create a new array called 'middleNums' from the 
  numbers array that will capture only the middle numbers (2, 3, 4).
*/

const numbers = [1, 2, 3, 4, 5]

let middleNums = [];

for(let i = 1; i < (numbers.length-1); i++){
  middleNums[i-1] = numbers[i];
}
//console.log(middleNums);

//////////////////PROBLEM 4////////////////////
/* 
  Create a function called 'bigOrSmall' that takes in one parameter, 'arr', 
  which will be an array of numbers. 
  Inside of the bigOrSmall function, create a new array called 'answers'. 
  Then, loop over the passed in arr parameter, and check to see if the number in the
  array is GREATER than 100. 
  If it is, push 'big' as a string to the answers array. 
  If the number is LESS than or EQUAL to 100, push 'small' as a string 
  to the answers array. 
  Return the answers array inside of the function.
*/
let arr = [100, 323, 33];
let veryNice = bigOrSmall(arr); //the veryNice array is a copy of the answers array, outside of the function.
//console.log(veryNice);


function bigOrSmall(x){

  let answers = [];
  for (let i = 0; i < x.length; i++){
    if(x[i] > 100){
      answers.push('big');
    } else if (x[i] <= 100){
      answers.push('small');
    } else {
      console.log("The array does not contain any numbers...?")
    }
  }
  
  return answers; 
}
