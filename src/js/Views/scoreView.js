import * as View from './View';
import { languagePack } from '../importLang';
import { esValidation } from '../config';

const scoreView = document.querySelector('.info-page');
const maxAnimals = languagePack()[1].length;

export const triggerScoreView = function () {
  scoreView.style.right = 0;
};

export const createNotebookObject = function (data) {
  data.forEach((animal, index) => {
    const notebook = document.querySelector('.info-page__notebook');
    const conservationStatus = esValidation ? 'Estado de conservación: ' : 'Conservation status: ';
    const ecologicalRoles = esValidation ? 'Rol ecológico: ' : 'Ecological roles: ';
    const threats = esValidation ? 'Amenazas: ' : 'Threats: ';
    const waysYouCanHelp = esValidation ? 'Formas en las que puedes ayudar: ' : 'Ways you can help: ';

    const modifier = function () {
      if (index % 2 === 1) {
        return 'notecard__polaroid--right';
      } else {
        return 'notecard__polaroid--left';
      }
    };

    const markup = `
      <div class="notecard">
            <div class="notecard__polaroid ${modifier()}">
              <img src="./img/${animal.id}.jpg" alt="" class="notecard__polaroid--photo" />
              <div class="notecard__polaroid--name">
              <h2>${animal.name}</h2>
              <img src="./img/green-check-mark.png" alt="Check mark" class="notecard__polaroid--check" data-animal-id="${animal.id}" />
              </div>
            </div>
            <div class="notecard__facts">
              <ul class="notecard__facts--list">
                <li class="notecard__facts--list--item"><span class="notecard__facts--header">${conservationStatus.toUpperCase()}</span>${animal.conservationStatus}</li>
                <li class="notecard__facts--list--item"><span class="notecard__facts--header">${ecologicalRoles.toUpperCase()}</span>${animal.ecologicalRoles} </li>
                <li class="notecard__facts--list--item"><span class="notecard__facts--header">${threats.toUpperCase()}</span>${animal.threats}</li>
                <li class="notecard__facts--list--item"><span class="notecard__facts--header">${waysYouCanHelp.toUpperCase()}</span>${animal.waysYouCanHelp}</li>
              </ul>
            </div>
          </div>
      `;
    notebook.insertAdjacentHTML('beforeend', markup);
  });
};
