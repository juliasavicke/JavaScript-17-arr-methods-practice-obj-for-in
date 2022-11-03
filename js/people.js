"use strict";
console.log("people.js");

let people = [
  {
    name: "Jonas",
    surname: "Jonaitis",
    sex: "male",
    age: 26,
    income: 1200,
    married: false,
    hasCar: false,
  },
  {
    name: "Severija",
    surname: "Piktutytė",
    sex: "female",
    age: 26,
    income: 1300,
    married: false,
    hasCar: true,
  },
  {
    name: "Valdas",
    surname: "Vilktorinas",
    sex: "male",
    age: 16,
    income: 0,
    married: false,
    hasCar: false,
  },
  {
    name: "Virginijus",
    surname: "Uostauskas",
    sex: "male",
    age: 32,
    income: 2400,
    married: true,
    hasCar: true,
  },
  {
    name: "Samanta",
    surname: "Uostauskienė",
    sex: "female",
    age: 28,
    income: 1200,
    married: true,
    hasCar: true,
  },
  {
    name: "Janina",
    surname: "Stalautinskienė",
    sex: "female",
    age: 72,
    income: 364,
    married: false,
    hasCar: false,
  },
];

// darydami uzduotis nekeiciame orginalo iskyrus 8 uzduoti

// 1. atspausdinti visus vyrus

const allMen = people.filter((person) => person.sex === "male");
console.log("allMen ===", allMen);

// 2. konsoleje atspausdinti visas moteris jaunesnes nei 35 metai
const womenTo35 = people.filter(
  (person) => person.age < 35 && person.sex === "female"
);
console.log("womenTo35 ===", womenTo35);

// 3. atrinkti i nauja masyva visus žmones kurie turi mašinas
const hasCar = people.filter((person) => person.hasCar === true);
const hasCar1 = people.filter(({ hasCar }) => hasCar);

console.log("hasCar ===", hasCar);

// 4. i nauja masyva atrinkti susituokusiu zmoniu vardus
const married = people.filter(({ married }) => married);
const marriedNAmes = married.map((person) => person.name);
console.log("marriedNAmes ===", marriedNAmes);

// 5. i nauja masyva atrinkti vairuojanciu zmoniu lytis.
const drivers = people.filter((person) => person.hasCar === true);
const driversSex = drivers.map((person) => person.sex);
console.log("driversSex ===", driversSex);

// 6. su funkcija grazinti objekta kuriame butu fairuojanciu vyru ir moteru kiekiai
// pvz {vyrai: 4, moterys: 3}

function countDriversBySex() {
  const driversMale = people.filter(
    (person) => person.hasCar === true && person.sex === "male"
  ).length;
  const driversFemale = people.filter(
    (person) => person.hasCar === true && person.sex === "female"
  ).length;

  return { vyrai: driversMale, moterys: driversFemale };
}

console.log("countDriversBySex(); ===", countDriversBySex());

// 7. grazinti nauja masyva kuriame butu tik lytis ir pajamos. Tada suskaiciuoti vidurki pagal lyti.
const sexAndIncome = people.map((person) => ({
  lytis: person.sex,
  pajamos: person.income,
}));
console.log("sexAndIncome ===", sexAndIncome);

const avgMale =
  sexAndIncome
    .filter((person) => person.lytis === "male")
    .reduce((total, person) => total + person.pajamos, 0) /
  sexAndIncome.filter((person) => person.lytis === "male").length;

const avgFemale =
  sexAndIncome
    .filter((person) => person.lytis === "female")
    .reduce((total, person) => total + person.pajamos, 0) /
  sexAndIncome.filter((person) => person.lytis === "female").length;

const avgBySex = { male: avgMale, female: avgFemale };
console.log("avgBySex ===", avgBySex);

// 8. grazinti nauja masyva pridedant prie kiekvieno objekto id savybe kuri bus didejanti nuo p_01
const addId = people.map((person, index) => {
  person[`id`] = `p_${index}`;
});
console.log("addId ===", addId);

// 8.1 persikopijuoti kad orginalas butu su id reiksmem

// 9. sukurti funkcija kuri gaudama id istrina ta masyvo elementa. deletPerson(p_02)

// kazkas

// padarius kelis commitus noriu grazinti i ankstesne versija, pvz buvusia pries 2 commitus
// dirbau dev branch, sumerginau i main, noriu grazinti main atgal i buvusia versija pries merge

// sarasas zmoniu, kurie committino kazkoki faila.
// paskutinis zmogus, padares commit faile arba tam visam origin
//
