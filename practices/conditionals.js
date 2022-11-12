
/*
var number=10;

if(number % 3 === 0) {
  console.log('Even')
} else {
  console.log("Odd")
};




var musicians = 20;

if (musicians <= 0) { 
  console.log("not a group")
} else if (musicians == 1) {
  console.log("solo")
} else if (musicians == 2) {
  console.log('duet')
} else if (musicians == 3) {
  console.log ('trio')
} else if (musicians ==4) {
  console.log("qartet") 
} else if (musicians >= 5) { // If we used else only it would print the correct console AND the else statement!
  console.log('this is a large group')
};




// A room can be either of - dining room, gallery, ballroom, or billiards room
var room = "gallery";

// A suspect can be either of - Mr. Parkes, Ms. Van Cleve, Mrs. Sparr, or Mr. Kalehoff
// Test your code by giving matching as well as unmatching names of the suspect
var suspect = "Mr. Parkes"; 


// Initial values
var weapon = "";
var solved = true;



* To help solve this mystery, write a combination of conditional statements that:
* 1. sets the value of weapon based on the room and
* 2. sets the value of solved to true if the value of room matches the suspect's room

if (room == 'ballroom') {
  weapon = 'poison';
  if (suspect == "Mr.Kalehoff") {
    solved=true;
  }
} else if (room == 'gallery') {
  weapon = 'trophy';
  if(suspect == 'Ms. Van Cleve') {
    solved=true;
  }
} else if (room == 'billiards room') {
  weapon = 'pool stick';
  if (suspect == 'Mrs. Sparr') {
    solved=true;
  }
} else if (room=='dinning room') {
  weapon = 'knife';
  if (suspect == 'Mr. Parkes') {
    solved=true;
  }
}
console.log(`${suspect} did it in the ${room} with the ${weapon}`);


*/



// LOGICAL OPERATORS

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `balance`, `checkBalance`, `isActive`
 * 2. Your code should include an `if...else` conditional statement
 * 3. Your code should produce the expected output
 * 4. Your code should not be empty
 * 5. BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED. 
 
 
// change the values of `balance`, `checkBalance`, and `isActive` to test your code


var balance= -2;
var isActive=true;
var checkBalance= true;


if (checkBalance === false) {
  console.log('Thank you. Have a nice day!')
} else if (checkBalance === true) {
  if (isActive==true && balance > 0) {
    console.log('Your balance is $'+balance + '.')
  } else if (isActive ===false) {
    console.log("Your account is no longer active.")
  } else if (isActive ===true) {
    if (balance === 0) {
      console.log('Your account is empty.')
    } else if (balance !== 0 ) {
      console.log('Your balance is negative. Please contact bank.')
    }
  }
}





//Ice Cream Quiz

// prints only if the following conditions are true:

// if flavor is set to vanilla or chocolate and
// if vessel is set to cone or bowl and
// if toppings is set to sprinkles or peanuts

var flavor = 'vanilla';
var vessel = 'cone';
var toppings = 'sprinkles';


if (flavor === 'vanilla' || flavor === 'chocolate') {
  if (vessel === 'cone' || vessel === 'bowl') {
    if (toppings === 'sprinkles' || toppings === 'peanuts') {
      console.log(`I'd like two scoops of ${flavor} ice cream in a ${vessel} with ${toppings} `)
    }
  }
}



// Use the sizing chart above, create a series of logical expressions that prints the size of a t-shirt based on the measurements of shirtWidth, shirtLength, and shirtSleeve. Valid sizes include S, M, L, XL, 2XL, and 3XL.

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `shirtWidth`, `shirtLength`, and `shirtSleeve`
 * 2. Your code should include an `if...else` conditional statement
 * 3. Your code should use logical expressions
 * 4. Your code should produce the expected output
 * 6. Your code should not be empty
 * 7. BE CAREFUL ABOUT THE EXACT CHARACTERS TO BE PRINTED.
 
 

var shirtWidth = 19.99;
var shirtLength = 28.99;
var shirtSleeve = 8.379;

var size;

if ((shirtWidth>=18 && shirtWidth<20) && (shirtLength>=28 && shirtLength<29) && (shirtSleeve>=8.13 && shirtSleeve<8.38) ) { // We are sitting the lower and upper limits of each size.
  size = "S";
}
else if ((shirtWidth>=20 && shirtWidth<22) && (shirtLength>=29 && shirtLength<30) && (shirtSleeve>=8.38 && shirtSleeve<8.63) ) {
  size = "M";
}
else if ((shirtWidth>=22 && shirtWidth<24) && (shirtLength>=30 && shirtLength<31) && (shirtSleeve>=8.63 && shirtSleeve<8.88) ) {
  size = "L";
}
else if ((shirtWidth>=24 && shirtWidth<26) && (shirtLength>=31 && shirtLength<33) && (shirtSleeve>=8.88 && shirtSleeve<9.63) ) {
  size = "XL";
}
else if ((shirtWidth>=26 && shirtWidth<28) && (shirtLength>=33 && shirtLength<34) && (shirtSleeve>=9.63 && shirtSleeve<10.13) ) {
  size = "2XL";
}
else if ((shirtWidth>=28) && (shirtLength>=34) && (shirtSleeve>=10.13) ) {
  size = "3XL";
}
else {
  size = "NA";
}
console.log(size);


*/


/*
* Use a series of ternary operator to set the category to one of the following:
*   - "herbivore" if an animal eats plants
*   - "carnivore" if an animal eats animals
*   - "omnivore" if an animal eats plants and animals
*   - undefined if an animal doesn't eat plants or animals


var eatsPlants = true;
var eatsAnimals = true;

// var category = eatsAnimals && eatsPlants ? 'omnivore' :  ( eatsPlants ? 'herbivore' : (eatsAnimals ? 'carnivore' :  'undefined'));


// we can also write it in this way:

var category = eatsPlants ? (eatsAnimals ? 'omnivore' : 'herbivore') : (eatsAnimals ? 'carnivore' : 'undefined');
console.log(category);

*/


// Write a switch statement to set the average salary of a person based on their type of completed education.

/*
* QUIZ REQUIREMENTS
* - Your code should have the variables `education`, and `salary`
* - Your code should include a switch statement
* - Your code should produce the expected output
* - Your code should not be empty
* - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
*/

var education = "a Master's degree";
var salary;

switch (education) {
  case "no high school diploma":
    salary = '25,636';
    break;
  case 'a high school diploma':
    salary = '35,256';
    break;
  case "an Associate's degree":
    salary = '41,496';
    break;
  case "a Bachelor's degree":
    salary = '59,124';
    break;
  case "a Master's degree":
    salary = '69,732';
    break;
  case "a Professional degree":
    salary = '89,960';
    break;
  case "a Doctoral degree":
    salary = '84,396';
}


console.log(`In 2015, a person with ${education} earned an average of $${salary}/year.`);