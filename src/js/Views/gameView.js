import { TIME_LIMIT } from './../config';
import { triggerScoreView } from './scoreView';
import { languagePack } from '../importLang';
import { esValidation } from './../config';

const timerText = document.querySelector('.game-window__timer--text');
const timerDisplay = document.querySelector('.game-window__timer');
const scoreBoard = document.querySelector('.game-window__score--text');
const endScore = document.querySelector('.info-page__score--num');

const maxAnimals = languagePack()[1].length;
let animalsFound = 0;
let timeElapsed = 0;
let timeLeft = TIME_LIMIT;
let timerClock;
let scorePrompt;

const formatTime = function (time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  if (seconds <= 15 && minutes === 0) {
    timerDisplay.style.backgroundColor = 'gold';
  }
  if (seconds <= 5 && minutes === 0) {
    timerDisplay.style.backgroundColor = 'red';
  }
  return `${minutes}:${seconds}`;
};

const finalScore = function (num) {
  if (num === 1) {
    endScore.textContent = `1 animal`;
  }
  if (num === 0 || (num > 1 && num < maxAnimals)) {
    endScore.textContent = esValidation ? `${num} animales` : `${num} animals`;
  }
  if (num === maxAnimals) {
    endScore.textContent = esValidation
      ? `todos los animales`
      : `all the animals`;
  }
};
finalScore(0);

export const animalFound = function () {
  // increase animalsFound + display on scoreboard
  animalsFound++;
  scorePrompt = esValidation
    ? `animales encontrados: ${animalsFound}`
    : `animals found: ${animalsFound}`;
  scoreBoard.textContent = scorePrompt;
  // remove animal from AR container

  // list final score
  finalScore(animalsFound);
  // apply green checkmark on scoreView
};

export const startTimer = function () {
  timerClock = setInterval(() => {
    timeElapsed++;
    timeLeft = TIME_LIMIT - timeElapsed;
    timerText.textContent = `${formatTime(timeLeft)}`;
    if (timeLeft === 0 || animalsFound === maxAnimals) {
      triggerScoreView();
      clearInterval(timerClock);
      // Add function to end the game ///////////////
    }
  }, 1000);
};
