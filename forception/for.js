var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
var alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase(); 

function forception(people, alphabet) {
  var names = people;
  
  var splitted = alphabet.split("");
  var output = []
  for (let i = 0; i < people.length; i++) {
    output.push(names[i]);
    for (let j = 0; j < 1; j++) {
      output.push(splitted)
    }
  }
  return output
}

var forception = forception(people, alphabet);
console.log(forception);


// function forception (param1, param2){
//     var names = param1;
//     var splitted = param2.split("")
//     var output = []
//     for (let i = 0; i < names.length; i++) {
//         output.push(names[i]);
//         for (let j = 0; j < 1; j++) {
//             output.push(splitted)
//         }
//     }
//     return output
//     }
    
//     var forception = forception(people, alphabet)
//     console.log(forception);
