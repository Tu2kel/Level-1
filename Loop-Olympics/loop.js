/*--------------------PRELIMINARIES------------------------*/
//Write a for loop that prints to the console the numbers 0 through 9.

// for (let i = 0; i < 10; i++) {
//     console.log(i);

// }

//Write a for loop that prints to the console 9 through 0.
// for (let i = 9; i > -1; i--) {
//   console.log(i);
// }

//Write a for loop that prints these fruits to the console.const fruit = ["banana", "orange", "apple", "kiwi"]

// const fruit = ["banana", "orange", "apple", "kiwi"];

// for (let i = 0; i < fruit.length; i++) {
//   console.log(fruit[i]);
// }

/*----------------------------------------BRONZE--------------------------------------*/
//Write a for loop that will push the numbers 0 through 9 to an array.

// DON'T THINK THIS ONE IS RIGHT
// for (let i = 0; i < 10; i++) {
//     const bronzeArr = []
//     bronzeArr.push(i);

//     console.log(i);

// }
 // Write a for loop that prints to the console only even numbers 0 through 100.

// for (let i = 0; i < 100; i++) {
//     if (i % 2 !== 0) {

//         continue;

//         }
//         console.log(i);
// }


//Write a for loop that will push every other fruit to an array.

// const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]


// for (let i = 0; i < fruit.length; i++) {
//     if (i % 2 === 0) {
//         continue;
//         }
//         console.log(fruit[i]);
// }



 /*----------------------------------------SILVER--------------------------------------*/

/*Write a loop that will print out all the names of the people of the people array--------------*/

const peopleArray = [
  {
    name: "Harrison Ford",
    occupation: "Actor"
  },
  {
    name: "Justin Bieber",
    occupation: "Singer"
  },
  {
    name: "Vladimir Putin",
    occupation: "Politician"
  },
  {
    name: "Oprah",
    occupation: "Entertainer"
  }
]

// for (let i = 0; i < peopleArray.length; i++) {
//     console.log(peopleArray[i].name);

// }

/*Write a loop that pushes the names into a names array, and the occupations into an occupations array.-----------------------------------------*/


// var names = []
// var occupations = []
// for (let i = 0; i < peopleArray.length; i++) {
//     names.push(peopleArray[i].name);
//     occupations.push(peopleArray[i].occupation);
    

//     console.log(peopleArray[i].name + " " + peopleArray[i].occupation);
// }

/*---Write a loop that pushes every other name to an array starting with the first person, in this case "Harrison Ford", and every other occupation to another array starting with, in this case, "Singer".-------------------------------*/


// for (let i = 0; i < peopleArray.length; i++) {
//     if (i % 2 === 0) {
//             console.log(peopleArray[i].name + " " + peopleArray[i].occupation)
            
//         } 

// }

/*----------------------------------------------------------GOLD--------------------------------------------------------------*/

// Create an array that mimics a grid like the following using nested for loops:

var numbers = [
  [2, 3, 4],
  [15, 16, 17],
  [10, 20, 30],
];
// for (let i = 0; i < numbers.length; i++) {
//     for (let j = 0; j < numbers[i].length; j++) {
//         // console.log(numbers[i][j]);
//         console.log(numbers[2][1]);
//     }
// }


for (let i = 0; i < numbers.length; i++) {
    let output = 'x'
    if (numbers[i]  ) {
        
    }
        console.log(output);
}

