// ---------------------
// Define a function that takes a string and an integer of i and creates a new array of length i where each value is equal to the string passed in
// myFunction('sunshine', 3) => ['sunshine', 'sunshine', 'sunshine'];
// ---------------------

// Put your answer below -------------------------

//my function is guitar
//my parameters are brand,i
//my return is to display new array with a new length

function guitar(brand, index) {
  let gibson = [];
  for (let i = 0; i < index; i++) {
    gibson.push(brand);
  }
  console.log(gibson);
}

guitar("brand", 3)








// -----------------------------------------------

// ---------------------
// Define a function that takes an array and reverses all the values in an array
// The function should not mutate the original array
// ---------------------

// Put your answer below -------------------------


var boat = [2, 3, 4];

function number(house) {
  var car = house.reverse();
  console.log(car);
}
number(boat);






// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes all falsy values from the array
// ---------------------

// Put your answer below -------------------------






function dude(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0 || arr[i] == NaN || arr[i] == null || arr[i] == false || arr[i] == "" || arr[i] == undefined) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
}

console.log(dude([8, "apple", 0, false, "", 4]));







// -----------------------------------------------

// ---------------------
// Define a function that takes an array of nested arrays and returns an object composed of propeties equal to each nested array
// const myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];
// returns { name: 'Charlie', color: 'brown', age: 10 };
// ---------------------

// Put your answer below -------------------------

function people(input){
  const person = [...input];
  const crowd = [];
  while(person.length) {

  }
}







// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes duplicate values
// [1,2,3,4,5,4,3] should return [1,2,3,4,5]
// ---------------------

// Put your answer below -------------------------

var arr = ["gibson", "fender", "elliott", "gibson", "fender", "gretch", "nova"];

function onlyOne(data) {
  return data.filter((value, index) => data.indexOf(value) === index);
}
console.log(onlyOne(arr));






// -----------------------------------------------

// ---------------------
// Define a function that takes two arrays and returns true if they have identical values (order does not matter), it should return false otherwise
// [1,2,3,4] and [1,2,3,4] should return true
// [1,2,3,4,5] and [1,2,3,4] should return false
// [1,2,3,4] and [1,2,3,4,4] should return false
// [1,2,3,4] and [1,4,3,2] should return true
// ---------------------

// Put your answer below -------------------------









// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//            ___  ____  _  ____  ______        //
//           / _ )/ __ \/ |/ / / / / __/        //
//          / _  / /_/ /    / /_/ /\ \          //
//         /____/\____/_/|_/\____/___/          //
//                                              //
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// ---------------------
// Define a function that takes an array and returns a new array with all sub-array elements concatenated into it
// [0, 1, 2, [3, 4]] should return [0, 1, 2, 3, 4]
// [0, 1, 2, [[[3, 4]]]] should return [0, 1, 2, 3, 4]
// DO NOT USE Array.prototype.flat()
// ---------------------

// Put your answer below -------------------------









// -----------------------------------------------
