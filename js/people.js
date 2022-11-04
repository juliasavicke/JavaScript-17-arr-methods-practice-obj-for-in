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
    id: "p_01",
  },
  {
    name: "Severija",
    surname: "Piktutytė",
    sex: "female",
    age: 26,
    income: 1300,
    married: false,
    hasCar: true,
    id: "p_02",
  },
  {
    name: "Valdas",
    surname: "Vilktorinas",
    sex: "male",
    age: 16,
    income: 0,
    married: false,
    hasCar: false,
    id: "p_03",
  },
  {
    name: "Virginijus",
    surname: "Uostauskas",
    sex: "male",
    age: 32,
    income: 2400,
    married: true,
    hasCar: true,
    id: "p_04",
  },
  {
    name: "Samanta",
    surname: "Uostauskienė",
    sex: "female",
    age: 28,
    income: 1200,
    married: true,
    hasCar: true,
    id: "p_05",
  },
  {
    name: "Janina",
    surname: "Stalautinskienė",
    sex: "female",
    age: 72,
    income: 364,
    married: false,
    hasCar: false,
    id: "p_06",
  },
  {
    name: "Janina",
    surname: "Stalautinskienė",
    sex: "female",
    age: 72,
    income: 364,
    married: false,
    hasCar: false,
    id: "p_07",
  },
  {
    name: "Janina",
    surname: "Stalautinskienė",
    sex: "female",
    age: 72,
    income: 364,
    married: false,
    hasCar: false,
    id: "p_08",
  },
  {
    name: "Janina",
    surname: "Stalautinskienė",
    sex: "female",
    age: 72,
    income: 364,
    married: false,
    hasCar: false,
    id: "p_09",
  },
  {
    name: "Janina",
    surname: "Stalautinskienė",
    sex: "female",
    age: 72,
    income: 364,
    married: false,
    hasCar: false,
    id: "p_10",
  },
  {
    name: "Janina",
    surname: "Stalautinskienė",
    sex: "female",
    age: 72,
    income: 364,
    married: false,
    hasCar: false,
    id: "p_11",
  },
  {
    name: "Janina",
    surname: "Stalautinskienė",
    sex: "female",
    age: 72,
    income: 364,
    married: false,
    hasCar: false,
    id: "p_12",
  },
  {
    name: "Janina",
    surname: "Stalautinskienė",
    sex: "female",
    age: 72,
    income: 364,
    married: false,
    hasCar: false,
    id: "p_13",
  },
];

const pplContainer = document.getElementById("container");

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
  const localCopy = { ...person };
  //   if (index < 9) localCopy.id = `p_0${index + 1}`;
  //   else localCopy.id = `p_${index + 1}`;
  localCopy.id = `p_` + (index + 1).toString().padStart(2, "0");

  return localCopy;
});
console.log("addId ===", addId);

// 8.1 persikopijuoti kad orginalas butu su id reiksmem

// 9. sukurti funkcija kuri gaudama id istrina ta masyvo elementa. deletPerson(p_02)

function deletePerson(id) {
  people = people.filter((person) => person.id != id);
  renderList(people, pplContainer);
}

// 10. parasyti funkcija kuri sukuria ir grazina viena zmogaus kortele tokiu pavidalu
// `
// <article class="card">
//   <h3>Severija Piktutytė</h3>
//   <h4>26 metu moteris</h4>
//   <p>atlyginimas: 1300 eur</p>
//   <p class=""><i class="fa fa-car" aria-hidden="true"></i></p>
// </article>
// `;
// jei vaiduorja masinos ikona zalia, jei ne raudona

function makePerson({ name, surname, sex, age, income, hasCar, id }) {
  const articleEl = document.createElement("article");
  articleEl.className = "card";
  articleEl.dataset.pid = id;
  articleEl.innerHTML = `
    <h3>${name} ${surname}</h3>
    <h4>${age} metu ${sex === "male" ? "vyras" : "moteris"}</h4>
    <p>atlyginimas: ${income} eur</p>
    <p class="driver-icon ${
      hasCar ? "driver" : ""
    }"><i class="fa fa-car" aria-hidden="true"></i></p>
    <button id=delete-btn>Delete</button>`;

  const deleteBtnEl = articleEl.querySelector("#delete-btn");
  deleteBtnEl.addEventListener("click", (event) => {
    deletePerson(id);
    //event.target.parentElement.remove(); //siuo atveju reiketu ir people sarasa atnaujinti - pasalinti is jo istrinta elementa.
  });
  return articleEl;
}

// 11. sukurti funkcija renderList(data) kuri is dataArr sugeneruoja elementus su 10pratimo funkcija ir patalpina juos i `<div id="people-container" class="people-container">`
function renderList(arr, dest) {
  const htmlElsFromArr = arr.map(makePerson);
  dest.innerHTML = "";
  htmlElsFromArr.forEach((el) => {
    dest.append(el);
  });
}
renderList(people, pplContainer);

// 12. su 11to pratimo funkcija rikiuojam ir atrenkam elementus i sarasa mygtuku paspaudimais.
// `
//   <button>Rodyti tik vyrus</button>
//   <button>Rodyti tik moteris</button>
//   <button>isrikiuoti pagal pajamas</button>
//   <button>isrikiuoti pagal amziu</button>
// `;
