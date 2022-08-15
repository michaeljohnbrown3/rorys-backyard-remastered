import { startTimer } from './gameView';
import * as View from './View';

export const startBtn = document.querySelector('.btnStart');
const landingCurtain = document.querySelector('.landing-curtain');

export const start = function (e) {
  e.preventDefault();
  landingCurtain.style.left = '-100%';
  startTimer();
  console.log('clicked');
};
