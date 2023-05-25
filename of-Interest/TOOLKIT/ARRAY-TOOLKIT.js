var arrOfFoods = ["pancake", "egg", "ice cream", "pizza", "hamburger"];

/*----------------------------------------ADDS TO THE END-----------------------*/
// arrOfFoods.push("cake") 
// console.log(arrOfFoods);

/*----------------------------------------REMOVES FROM THE END-----------------------*/
// arrOfFoods.pop()
// console.log(arrOfFoods);

/*----------------------------------------ADDS TO THE BEGINNING-----------------------*/
// arrOfFoods.unshift("cheeseburger")
// console.log(arrOfFoods);

/*----------------------------------------REMOVES FROM THE BEGINNING-----------------------*/
// arrOfFoods.shift()
// console.log(arrOfFoods);

/*----------------------------------------CONCATS-----------------------*/
// var colors1 = ["blue", "green"];
// var colors2 = ["purple", "red"];
// var newArr = colors1.concat(colors2);
// console.log(newArr);

/*----------------------------------------INDEX OF-----------------------*/

// arrOfFoods.indexOf('pizza')
// console.log(arrOfFoods.indexOf("pizza"));

//or 

// var pizzaIndex = arrOfFoods.indexOf('pizza');
// console.log(pizzaIndex);

// var city = "New York City";
// var indexOfC = city.indexOf("i");
// console.log(indexOfC);

/*----------------------------------------SLICE-----------------------*/
//Slice KEEPS EVERYTHING BETWEEN THE 1ST AND LAST NUMBER / LEAVES ORIGINAL ARR INTACT
// arrOfFoods.slice(2, 4)
// console.log(arrOfFoods.slice(2, 4));

/*----------------------------------------JOIN-----------------------*/
//Turns an array into a string
// var myName = "Anthony";
// var splitName = myName.split("");
// console.log(splitName);

//  var joinedName = splitName.join("");
//  console.log(joinedName);

/*----------------------------------------REVERSE-----------------------*/

//  var myName = "Anthony"; // ynohtnA
//  var splitName = myName.split("");
//  var reversedArr = splitName.reverse();
//  console.log(reversedArr);

//  var reversedName = reversedArr.join("");
//  console.log(reversedName);
// // ALL TOGETHER AT ONCE
//   var allAtOnce = myName.split("").reverse().join("");
//   console.log(allAtOnce);


  /*----------------------------------------SPLICE-----------------------*/
  // CHANGES THE ORIGINAL ARRAY
  // 1ST NUMBER = STARTING POSITION, 2ND NUMBER = HOW MANY TO SPLICE

//   arrOfFoods.splice(2, 3)
//   console.log(arrOfFoods);

  //SHOWS WHAT WAS SPLICED LOGGING RESULT

//   var result = arrOfFoods.splice(2, 3);
//   console.log(" I removed the " +  result );

//ADD INTO BY ADDING A 3RD ARGUMENT

//  arrOfFoods.splice(2, 2, "bacon", "ice cream");
//  console.log(arrOfFoods );


/*----------------------------------------SLICE-----------------------*/

// slice => cut up string

    // var phoneNumber = "6764567890" // "676-456-7890"
    // var first3 = phoneNumber.slice(0, 3)
    // var next3 = phoneNumber.slice(3, 6)
    // var last4 = phoneNumber.slice(6)
    // var phoneNumWithDashes = first3 + "-" + next3 + "-" + last4
    // console.log(phoneNumWithDashes)
  
/*----------------------------------------SPLIT-----------------------*/
    // split - turn a string into an array
    // var animal = "tigergerger"
    // var characterArr = animal.split("g")
    // console.log(characterArr)

    // concat
    // var s = "s"
    // var newName = name.concat(s)
    // console.log(newName)

    // toUpperCase & toLowerCase
    // var uppercasedLuke = name.toUpperCase() 
    // console.log(uppercasedLuke)
    // var lowercasedLuke = uppercasedLuke.toLowerCase()
    // console.log(lowercasedLuke)