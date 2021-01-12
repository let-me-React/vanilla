console.log(`hello`);

//let cont  !Block level scope
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
