"use strict";
console.log("main.js");

const numbers = [
  1, 2, 3, 5.3, 8, -8, -5.5, -6, -16, -5, -9, 4.2, 5, 12, -6, 45,
];
const nums2 = [2, 5, -10, "one", true, 7, "two", 1];

// 1. Atrinkti skaicius didesnius uz 3 => filter

const filteredNums = numbers.filter((sk) => sk > 3);
console.log("filteredNums ===", filteredNums);

// 1.1. Parasyti funkcija, kuri priima argumentu skaiciu, uz kuri didesnes reiksmes norim grazinti is argumentu gauto masyvo

// function moreThan(limit, arr) {
//   return arr.filter((sk) => sk > limit);
// }

const moreThan = (limit, arr) => arr.filter((sk) => sk > limit);

// 2. Noretumem grazinti nauja masyva su padvigubintom reiksmem => map

const doubles = numbers.map((sk) => sk * 2);
console.log("doubles ===", doubles);

// 3. Noretumem gauti neigiamu reiksmiu bendra suma => filter => reduce

const negativeTotal = numbers
  .filter((sk) => sk < 0)
  .reduce((total, sk) => total + sk, 0);
console.log("negativeTotal ===", negativeTotal);

// 4. Suzinoti, ar yra skaicius 5 musu numbers masyve => includes

const isThereAFive = numbers.includes(5);
console.log("isThereAFive ===", isThereAFive);

// 5. Consoleje atspausdinti visas reiksmes su indeksais => forEach

numbers.forEach((sk, i) => console.log(`index: ${i}, reiksme: ${sk}`));

// 6. every - grazina true, jei vidine funkcija visais atvejais grazina true
//pvz ar visi elementai numbers masyve yra skaiciai
const allNums = numbers.every((sk) => typeof sk === "number");
console.log("allNums ===", allNums);
//ar visi elementai yra teigiami
const allPositives = numbers.every((sk) => sk > 0);
console.log("allPositives ===", allPositives);

// 7. some - ar nors vienas elementas atitinka salyga
//pvz ar yra nors vienas string elementas masyve

const isThereAString = numbers.some((sk) => typeof sk === "string");
console.log("isThereAString ===", isThereAString);

// 1. is numbers masyvo atrinkti tik sveikuosius skaicius

const allAbsolutes = numbers.filter((sk) => !sk.toString().includes("."));
console.log("allAbsolutes ===", allAbsolutes);

// 2.

const arrSum = numbers.reduce((total, sk) => total + sk, 0);

console.log("arrSum ===", arrSum);

// 3. grazinti nauja masyva kuriame yra objektai

const objArr = numbers.map((sk, i) => ({ index: i, skaicius: sk }));
console.log("objArr ===", objArr);

// 4. suapvalintas

const fixedArr = numbers.map((sk) => sk.toFixed(0));
console.log("fixedArr ===", fixedArr);

// 5. max->min

const maxMinArr = numbers.sort((a, b) => a > b);
console.log("maxMinArr ===", maxMinArr);

// 6.

const numbersNums2 = nums2.filter((sk) => typeof sk === "number");
const avg =
  numbersNums2.reduce((total, sk) => total + sk) / numbersNums2.length;

console.log("avg ===", avg);

// 7.

const numbersNums3 = nums2.filter((sk) => typeof sk === "number");
const avg1 =
  numbersNums3.reduce((total, sk) => total + sk) / numbersNums3.length;

console.log("avg1 ===", avg1);

// 8.

const isThereNotNumAndNotStr = nums2.some(
  (sk) => !(typeof sk === "string" && typeof sk === "number")
);

console.log("isThereNotNumAndNotStr ===", isThereNotNumAndNotStr);
