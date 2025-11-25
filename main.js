//TODO add imports if needed
//TODO doc
/**
 * The main function which calls the application. 
 * Please, add specific description here for the application purpose.
 * @param {object} dtoIn contains count of employees, age limit of employees {min, max}
 * @returns {Array} of employees
 */
const dtoIn = {
  count: 50,
  age: {
    min: 19,
    max: 35
  } // počet a věk zaměstnanců
};
const czechNames = {
  male: {
    firstNames: [
      "Jan","Tomáš","Petr","Jakub","Lukáš","Martin","Michal","David","Pavel","Josef",
      "Vojtěch","Marek","Daniel","Adam","Ondřej","Matěj","Jiří","Radek","Karel","Aleš",
      "Roman","Libor","Štěpán","Richard","Dominik"
    ],
    lastNames: [
      "Novák","Svoboda","Novotný","Dvořák","Černý","Procházka","Kučera","Veselý","Horák","Němec",
      "Pokorný","Marek","Král","Bartoš","Janda","Fiala","Kadlec","Vacek","Blažek","Holub",
      "Šimek","Hruška","Kolář","Urban","Richter"
    ]
  },
  female: {
    firstNames: [
      "Jana","Petra","Lucie","Eva","Martina","Kateřina","Michaela","Veronika","Monika","Tereza",
      "Anna","Alena","Barbora","Kristýna","Helena","Nikola","Gabriela","Lenka","Markéta","Pavla",
      "Radka","Eliška","Marie","Simona","Denisa"
    ],
    lastNames: [
      "Nováková","Svobodová","Novotná","Dvořáková","Černá","Procházková","Kučerová","Veselá","Horáková","Němcová",
      "Pokorná","Marková","Králová","Bartošová","Jandová","Fialová","Kadlecová","Vacková","Blažková","Holubová",
      "Šimková","Hrušková","Kolářová","Urbanová","Richterová"
    ]
  }
}; // importování jmen

export function main(dtoIn) {
  const dtoOut = [];
  const genders = ['male','female'];
  const workloads = [10,20,30,40]; // možné úvazky

  for (let i = 0; i < dtoIn.count; i++) {
    const gender = genders[~~(Math.random()*2)]; // náhodné pohlaví
    const firstNames = czechNames[gender].firstNames; // appendování jmen podle pohlaví
    const lastNames = czechNames[gender].lastNames;

    const name = firstNames[~~(Math.random()*firstNames.length)]; // výběr jména
    const surname = lastNames[~~(Math.random()*lastNames.length)];
    const workload = workloads[~~(Math.random()*workloads.length)]; // výběr úvazku

    // náhodné datum narození
    const start = new Date(new Date().getFullYear() - dtoIn.age.max,10,25).getTime();
    const end = new Date(new Date().getFullYear() - dtoIn.age.min,10,25).getTime();
    const birthdate = new Date(start + Math.random()*(end-start)).toISOString();

    dtoOut.push({ gender, birthdate, name, surname, workload }); // vznik zaměstnance
  }

  return dtoOut;
}

console.log(main(dtoIn));

