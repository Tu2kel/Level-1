// (...nums)= REST (gather)
// Syntax:  ... GATHERS ALL INTO AN ARRAY IN THE PARAMATER
// function maxNumber(...nums) {
//   console.log(nums);
// }

// maxNumber(0, 3, 58, 20, 200, 30);


// SPREAD USED ON ARRAY FORM
const colors1 = ["red", "blue"];
const colors2 = ["yellow", "green"];

const allColors = [...colors1, ...colors2];
//TAKES ALL INFO FROM 1 AND ALL INFO FROM 2 
console.log(allColors);

//AND OBJECT FORM
const person = {
  name: "rick",
  age: 50,
};

const personCopy = { ...person };
console.log(personCopy);

// template literals
const named = "joe"
// "hi " + name
const greeting = `hi ${named}`
console.log(greeting)

// import & export Node uses these
require()
module.exports

// object literals
// const blue = "blue"
// const green = "green"
// const red = "red"

// const colors = { red, green, blue }

// console.log(colors)

// object & Array destructuring
const user = {
    username: "joe123",
    age: 20,
    _id: "f892jf2jf98j39fj"
}

const { username, age } = user

console.log(username)

//

const names = ["john", "betty", "nick"];

const [item1, item2, item3] = names;
console.log(item2);

// default parameters

function sum(a = 5, b = 10){
    return a + b
}

console.log(sum(7, 5))// if a doesn't have value this line defaults over, even if it has a value.

const vegetables = ["carrit", "tomat", "tomato soup"];

const firstVegetable = vegetables[0];

// BETTER...USE OF SQUARE BRACKETS
const [firstVegetable] = vegetables;


//  MAY BE ABLE TO BE USED IN MY CONSTRUCTOR FUNCTIONS ???
const color = "red";

const car = {
  color,
  drive() {
    return "Vroom!";
  },
  getColor() {
    return this.color;
  },
};


/*----------------------OLD-----------------------------*/

const expense = {
  type: "Business",
  amount: "$45 USD",
};

// const type = expense.type;
// const amount = expense.amount;

/*----------------------NEW-----------------------------*/
// const { type } = expense;
// const { amount } = expense;

// EVEN SIMPLER
const { type, amount } = expense;


function calculateSquareInches(width, length, thickness) {
  if (thickness === undefined) {
    thickness = 1;
  }
  return width * length * thickness;
}


//BETTER
function calculateSquareInches(width, length, thickness = 1) {
  return width * length * thickness;
}
