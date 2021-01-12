console.log(`hello`);

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
