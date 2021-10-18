const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


console.log("Welcome to my Password Validator! ");

reader.question("Please enter a password that is 10 characters or more and contains at least one number: ", function(input){
    
//first testing the length requirements

if(input.length < 10){
    console.log("Failure...I can't keep your things safe like this!");
}   else if (input.length >= 10){
    console.log("Success! I shall guard your privacy.")
}

//this function checks for any numbers within the input, but does not account for special characters...

function stringContainsNumber(input){
    let string1 = String(input);
    for( let i = 0; i < string1.length; i++){
        if(!isNaN(string1.charAt(i)) && !(string1.charAt(i) === " ") ){
          return true;
        }   else {
            return false;
        }
  }
}

console.log(stringContainsNumber(input)?"And great job adding numbers!":"Try adding a number?")



reader.close()
});


/*
Review and maybe use later!
//multi-line string templates..

Use as first callback fn to test for Special Characters?

function stringContainsSpChar(input){
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

if(format.test(string)){
  return true;
} else {
  return false;
}

function hasNumber(input) {
    return /\d/.test(input);
*/


//The ASCII stuff seems fun maybe later