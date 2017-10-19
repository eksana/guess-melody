// Модуль для создания части шаблона, отвечающей за отрисовку итоговой статистики игры

import displayResult from './display-result.js';
import {initialData, declinationForms} from './data.js';
import changeDeclination from './change-declination.js';

const {minutes: minutes, seconds: seconds, points: points, quick: quick, mistakes: mistakes} = declinationForms;

const createStatsTemplate = (screenData, statistics, result) => screenData.failure
  ? `<div class="main-stat">${displayResult(statistics, result)}</div>`
  : `<div class="main-stat">За&nbsp;${changeDeclination(result.getMinutes(), minutes)} и ${changeDeclination(result.getSeconds(), seconds)}
      <br>вы&nbsp;набрали ${changeDeclination(result.score, points)} (${changeDeclination(result.quickAnswers, quick, true)})
      <br>совершив ${changeDeclination(initialData.notes - result.notesLeft, mistakes)}
    </div>
    <span class="main-comparison">${displayResult(statistics, result)}</span>`;

export default createStatsTemplate;
