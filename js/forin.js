"use strict";
console.log("forin.js");

const userObj = {
  name: "Severia",
  surname: "Piktutyte",
  sex: "femail",
  age: 26,
  hasCar: true,
};

// ciklas per objekta
for (let key in userObj) {
  console.log("key ===", key);
  const value = userObj[key];
  console.log("value ===", value);
}

// gauti visu objeto key masyva
const keysArr = Object.keys(userObj);
console.log("keysArr ===", keysArr);

// gauti visu objekto value masyva
const valArr = Object.values(userObj);
console.log("valArr ===", valArr);

// gauti keys ir values masyvo pavidalu
const keysValuesArr = Object.entries(userObj);
console.log("keysValuesArr ===", keysValuesArr);
