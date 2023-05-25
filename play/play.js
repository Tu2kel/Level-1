// const form = document["myForm"]
// const checkedInputs = []

// function submitClicked () { 
//     e.preventDefault()
    
//     // console.log(form.gender.value)
    
//     // console.log(form.entertainment)
    
//     console.log("did it work");
    
//     // for(let i = 0; i < form.entertainment.length; i++){
//     //     if(form.entertainment[i].checked){
//     //         checkedInputs.push(form.entertainment[i].value)
//     //     }
//     // }
    
//     // console.log(checkedInputs)
// }
// form.addEventListener ("submit", submitClicked)

// var numbers = [42, 13, 34, 18, 123];

// console.log(numbers[2])

// var turtles = ["Raphael", "Donatello", "Michaelangelo", "Leonardo"];


// console.log(turtles.length)

// var users = [
//   {
//     name: "Joe Schmoe",
//     age: 42,
//     gender: "Male",
//   },
//   {
//     name: "Jill Schmoe",
//     age: 41,
//     gender: "Female",
//   },
//   {
//     name: "Jimmy Schmoe",
//     age: 9,
//     gender: "Male",
//   },
// ];

// console.log(users[1].name)

/*Loop through the following array and count how many "computers" there are. Log the final count:*/
// var officeItems = [
//   "stapler",
//   "monitor",
//   "computer",
//   "desk",
//   "lamp",
//   "computer",
//   "lamp",
//   "stapler",
//   "computer",
//   "computer",
// ];

// for (let i = 0; i < officeItems.length; i++) {

//     if (officeItems[i] === "computer") {
//         console.log(officeItems[i]);
//     }
// }

// Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if they aren't 18.

// var peopleWhoWantToSeeMadMaxFuryRoad = [
//   {
//     name: "Mike",
//     age: 12,
//     gender: "male",
//   },
//   {
//     name: "Madeline",
//     age: 80,
//     gender: "female",
//   },
//   {
//     name: "Cheryl",
//     age: 22,
//     gender: "female",
//   },
//   {
//     name: "Sam",
//     age: 30,
//     gender: "male",
//   },
//   {
//     name: "Suzy",
//     age: 4,
//     gender: "female",
//   },
// ];

// for (let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
//     if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) 
//         {
//             console.log(
//             peopleWhoWantToSeeMadMaxFuryRoad[i].name +
//                 " is old enough to see Mad Max"
//             );
//                 } else {
//                     console.log(
//                     peopleWhoWantToSeeMadMaxFuryRoad[i].name +
//                         " is not old enough to see Mad Max"
//                     );
//                 }
//     }

// var light = [2,3,2]
// for (let i = 0; i < light.length; i++) {
//     if (light[i] === 2) {
//         console.log("The light is on");
//     }
//     else if (light[i] === 3) {
//         console.log("The light is off");
//     }
//     else {
//         console.log("The light is broken");
//     }
    
// }


var arrayOfArrays = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < arrayOfArrays.length; i++) {
    for (let j = 0; j < arrayOfArrays[i].length; j++) {
        console.log(arrayOfArrays[i][j]);

        
        // console.log(arrayOfArrays[1][2]);
    }
    
     
}



    
