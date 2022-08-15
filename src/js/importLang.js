import es from './../lang/es.json';
import en from './../lang/en.json';
import enAnimals from './../data/animals.json';
import esAnimals from './../data/animales.json';
import { esValidation } from './config';

export const languagePack = function () {
  let langFile;
  let animalFile;
  switch (esValidation) {
    case true:
      langFile = es;
      animalFile = esAnimals;
      break;
    default:
      langFile = en;
      animalFile = enAnimals;
  }
  return [langFile, animalFile];
};
