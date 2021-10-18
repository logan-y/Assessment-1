const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


console.log("Welcome to my Password Validator! ");

reader.question("Please enter your password: ", function(input){
    
//console.log(input);

if(input.length < 10){
    console.log("Failure...I can't keep your things safe like this!");
}   else if (input.length >= 10){
    console.log("Success! I shall guard your privacy.")
}

function stringContainsNumber(input){
    let string1 = String(input);
    for( let i = 0; i < string1.length; i++){
        if(!isNaN(string1.charAt(i)) && !(string1.charAt(i) === " ") ){
          return true;
        }   else {
            return false;
        }
    
    return;
  }
  
}

console.log(stringContainsNumber(input)?"And great job adding numbers!":"Try adding a number?")


  



    reader.close()
});


/*
Review later!

function hasNumber(input) {
    return /\d/.test(input);
*/