import '../sass/main.scss';
import { renderAnimals, renderScene } from './ascene';
import * as model from './model';
import * as gameView from './Views/gameView';
import { startTimer } from './Views/gameView';
import { start, startBtn } from './Views/landView';
import * as scoreView from './Views/scoreView';
import { loadPhotos } from './Views/View';
import { loadText } from './Views/View';

const init = function () {
  loadPhotos();
  loadText();
  renderAnimals();
  scoreView.createNotebookObject(model.animalLoad);
  startBtn.addEventListener('click', start);
  scoreView.tryAgainBtn.addEventListener('click', scoreView.tryAgain);
};
init();
