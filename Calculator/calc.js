const readlineSync = require("readline-sync")

//Answers questions
const userName = readlineSync.question('May I have your name? ');
console.log('HELLO ' + userName + '!'+ " ...I Wanna Play a 🤡!GAME!");



// Input Section Number & Operator
const num1 = readlineSync.question("Enter 1st Number = ")
const operator = readlineSync.keyIn("Live or Die...Make Your Choice: ", "+", "-", "*", "/")
const num2 = readlineSync.question("Enter 2nd Number = ")

 
//Calculations
if (operator === '+') {
    console.log("Equals = ", parseInt(num1) + parseInt(num2))

    }else if (operator === '-') {
        console.log("Equals = ", parseInt(num1) - parseInt(num2));

        }else if (operator === '*') {
            console.log("Equals = ", parseInt(num1) * parseInt(num2));

            }else if (operator === '/') {
                console.log("Equals = ", parseInt(num1) / parseInt(num2));

                }else{
                    console.log("Not 🚫 a valid 🙅 Operator.")
                } 
         
                // Adds more than numbers though