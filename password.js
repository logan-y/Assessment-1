const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


console.log("Welcome to my Password Validator! ");

reader.question("Please enter your password: ", function(input){
    
console.log(input);

if(input.length < 10){
    console.log("Failure...I can't keep your things safe like this!");
}   else if (input.length >= 10){
    console.log("Success! I shall guard your privacy.")
}




    reader.close()
});


/*rl.question('What is your age? ', (age) => {
	console.log('Your age is: ' + age);
})
*/