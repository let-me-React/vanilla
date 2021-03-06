//let cont  !Block level scope
/*
const age = 23;
const name = "saurabh";

const string = `My name is ${name} and age is ${age}`;
console.log(string);
console.log(string.length); // find the length
console.log(string.toUpperCase()); // to upper cAase
const names = "Saurabh, Aanchal, Phalguni, Akansha";
console.log(names.split(",")); // String to ARRAY

// ARRAYS
const integers = new Array(1, 2, 3, 4, 5, 6, "saurabh");
console.log(integers);
console.log(integers.length);
const cars = ["maruti", "suzuki", "i20", 23, 45, 78];
console.log(cars);
console.log(cars.length);
const nameOfCar = cars[0];
cars[0] = "Mercedes";
console.log(`Owner of ${cars[0]} is ${integers[6]}`);
console.log(cars);
cars.push("Bmw");

cars.unshift("jaguar");
console.log(cars);
//console.log(typeof name); //gives the type
*/
//OBJECTS
/*
const details = {
  name: "Saurabh G",
  age: 23,
  dob: "19-08-1997",
  hobbies: ["music", "novels", "badminton"],
  address: {
    street: "Dakra",
    City: "Dehradun",
    State: "Uttarakhand"
  }
};
console.log(details);
console.log(details.name, details.age);
console.log(details.hobbies[1]);

const {
  name,
  age,
  dob,
  address: { street, State }
} = details;
console.log(name);
console.log(dob);
console.log(street);
console.log(State);

details.email = "saurabh.sheshank@gmail.com";
console.log(details);

const todo = [
  {
    id: 1,
    text: "write the code",
    isDone: true
  },
  {
    id: 2,
    text: "Draw Template",
    isDone: true
  },
  {
    id: 3,
    text: "Make the Wireframe",
    isDone: false
  }
];
console.log(todo[0].id, todo[2].id, todo[2].text);
const todoJSON = JSON.stringify(todo); //convert Array Object into JSON type to send via server
console.log(todoJSON);

//FOR loops

for (let i = 0; i < 10; i += 2) {
  console.log(`For loop number ${i}`);
}

//While loop

let i = 0;
while (i < 10) {
  console.log(i * 2);
  i += 2;
}

//Apply for loop in Todos ( Array Object)
console.log(todo.length);
for (let i = 0; i < todo.length; i++) {
  console.log(`My ${i + 1} task is "${todo[i].text}" with id : ${todo[i].id}`);
}

//foreach, map, filter
console.log(`For each impl.`);
//todo.forEach(function(todo) {
  console.log(todo.text);
});

//MAP
//Return type is Array
/*
const todoText = todo.map(function(todo) {
  return todo.text;
});
console.log(todoText);
*/
//Filter
/*
const todoDone = todo.filter(function(todo) {
    return todo.isDone === false;
  }).map(function(todo) {
return todo.text;
  });
console.log(todoDone);
*/
//COnditonal op
/*
const x = "10";
if (x === 10) {
  console.log("TRUE x is 10");
} else {
  console.log("x is not 10");
  console.log(`x is of ${typeof x}`);
}*/
/*
const x = 10;
//const color = x > 102 ? "red" : "blue";
//console.log(color);
const color = "blue";
//SWITCHES

switch (color) {
  case "red":
    console.log(`color is red`);
    break;
  case "blue":
    console.log(`color is blue`);
    break;
  default:
    console.log(`not a match`);
}
*/

//FUNCTIONS
function addNum(num1, num2) {
  return num1 + num2;
}
//addNum(); // will return NaN

const sum = addNum(4, 5);
console.log(sum);
/*
const addNums = (num1, num2) => {
  console.log(num1 + num2);
};
addNums(3, 4);
*/
//OR

const addNums = (num1, num2) => num1 + num2;

console.log(addNums(3, 4)); // no need of RETURN

//Constructor function
function Person(name, dob) {
  this.name = name;
  this.dob = dob;
  this.getNameDob = function() {
    return `${this.name} ${this.dob}`;
  };
}
const person1 = new Person("saurabh", "19-08-1997");
const person2 = new Person("Phalguni", "27-08-1994");
const person3 = new Person("Aanchal", "06-08-1997");
console.log(person1.getNameDob());
console.log(person1);
