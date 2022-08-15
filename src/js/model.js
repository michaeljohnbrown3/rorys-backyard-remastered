import { languagePack } from './importLang';

export const [...animalLoad] = languagePack()[1];

// animalLoad.map((animal, index) => {
//   if (index % 2 === 1) {
//     const polaroid = document.querySelector('.notecard__polaroid');
//   }
// });

// animalLoad.findIndex(animal => {
//   return animal.id;
// });

// this.indexOf(animal) % 2 === 1
//   ? 'notecard__polaroid--left'
//   : 'notecard__polaroid--right';

// animalLoad.forEach(function (value, i) {});
