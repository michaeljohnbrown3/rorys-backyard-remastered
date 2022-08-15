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
};
init();

startBtn.addEventListener('click', start);

window.addEventListener('click', gameView.animalFound);
