import { languagePack } from './importLang';
import { animalEnter, animalFound, animalLeave, cameraFlash } from './Views/gameView';

export const [...animalLoad] = languagePack()[1];

const [...animals] = languagePack()[1];

animals.forEach(animal => {
  AFRAME.registerComponent(animal.id, {
    init: function () {
      this.el.addEventListener('mouseenter', e => {
        animalEnter();
      });
      this.el.addEventListener('mouseleave', e => {
        animalLeave();
      });
      this.el.addEventListener('click', e => {
        const animalEl = document.querySelector(`#${animal.id}`);
        const animalId = e.target.id;
        const dataAnimalId = `[data-animal-id=${animalId}]`;
        const animalCheck = document.querySelector(dataAnimalId);

        animalCheck.style.display = 'block';

        animalEl.remove();
        animalFound();
        cameraFlash();
      });
    },
  });
});
