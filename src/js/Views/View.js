import { languagePack } from '../importLang';
import lcs from './../../assets/landingCurtain/LCS.png';
import grass from './../../assets/landingCurtain/bottomborder.png';
import mag from './../../assets/landingCurtain/magnifyingGlass.png';

export const loadText = function () {
  const languageLoad = languagePack()[0];
  languageLoad.forEach(
    obj => (document.querySelector(`.${obj.class}`).textContent = `${obj.text}`)
  );
};

const loadPic = function (pic, loc) {
  const location = document.querySelector(`.${loc}`);
  location.src = pic;
};

export const loadPhotos = function () {
  loadPic(lcs, 'title__logo--landing-page');
  loadPic(mag, 'cim-container__magnifying-glass');
  loadPic(grass, 'grass');
  loadPic(lcs, 'title__logo--score-page');
};
