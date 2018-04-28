import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as minesweeperController from './MinesweeperController.js';


// var numberOfBombs = 10;
// var remainingBombs = 10;
// var numberOfFlags = 0;

// function initializeGame() {
// 	var board = minesweeperController.generateBoard(remainingBombs);
// }

// function










/* Executes code below */


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


