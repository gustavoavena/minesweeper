

/*

Board:

0 - Empty
1 to 8 - Bombcount
9 - Bomb
negative values: Flag

*/


import React, { Component } from 'react';
// import Square from './pagedraw/square';
import Board from './pagedraw/board';


// Constants with the state names to maintain consistency
let DEFAULT_STATE = "default";
let FLAG_STATE = "flag";
let BOMB_STATE = "bomb";
let EXPOSED_STATE = "exposed";

export default class MinesweeperController extends Component {

	constructor(props) {
		super(props);

		this.state = {
			numberOfBombs: 10,
			remainingBombs: 10,
			numberOfFlags: 0,
			board: generateBoard(10),
			states: [
				Array(9).fill(DEFAULT_STATE),
				Array(9).fill(DEFAULT_STATE),
				Array(9).fill(DEFAULT_STATE),
				Array(9).fill(DEFAULT_STATE),
				Array(9).fill(DEFAULT_STATE),
				Array(9).fill(DEFAULT_STATE),
				Array(9).fill(DEFAULT_STATE),
				Array(9).fill(DEFAULT_STATE),
				Array(9).fill(DEFAULT_STATE),
			],
		};

		this.handleClick = this.handleClick.bind(this);
		this.openSquare = this.openSquare.bind(this);
	}

	render() {
	    return (<Board 
	      handleClick={this.handleClick}
	      board={this.state.board}
	      states={this.state.states}
	    />);
  	}

  	

  	gameOver(x, y) {
  		// Perform changes on the board for gameOver!
  		// x, y are the coordinates of the clicked bomb...

  		alert("Game over!");
  	}


	

	openSquare(x, y, appState) {
		let board = appState.board;
		let states = appState.states;

		appState.states[x][y] = EXPOSED_STATE;

		


		const N = 9;
		var i, j;
		for(i=x-1; i <= x+1; i++) {
			for(j=y-1; j <= y+1; j++) {

				if(i >= 0 && i < N && j >= 0 && j < N 
					&& (board[i][j] != 9) 
					&& (states[i][j] == DEFAULT_STATE) ) {
					// console.log("Incrementing i, j = ", i, j);

					appState.states[i][j] = EXPOSED_STATE;

					// if(board[i][j] == 0) {
					if(board[i][j] == "") {
						appState = this.openSquare(i, j, appState);
					}
				}
			}
		}

		appState.states = states;
		
		return appState;
	}

	squareClicked(x, y) {
		let board = this.state.board;

		if(board[x][y] == 9) { // BOMB! Game over!
			this.gameOver();
		}
		

		// update state here
		let newAppState = this.openSquare(x, y, this.state);

		this.state = newAppState;
	}

	handleClick(x, y) {

		console.log("State before click: ", this.state);
		// alert(`Square clicked in position: (${x}, ${y})`);

  		let board = this.state.board;

		if(board[x][y] == 9) { // BOMB! Game over!
			this.gameOver();
		}
		

		// update state here
		let newAppState = this.openSquare(x, y, this.state);

		this.state = newAppState;

		this.setState((prevState, props) => {
			return newAppState;
		});

		console.log("State after click: ", this.state);

		// alert(`Square clicked in position: (${x}, ${y})`);
  	}


}


// This will generate a board that stores the position of the bombs and the numbers to be diplayed in each empty cell.
function generateBoard(bombs = 10) {
	const N = 9;


	var board = [
		Array(9).fill(0),
		Array(9).fill(0),
		Array(9).fill(0),
		Array(9).fill(0),
		Array(9).fill(0),
		Array(9).fill(0),
		Array(9).fill(0),
		Array(9).fill(0),
		Array(9).fill(0),
	];


	var bombCount = 0;

	while(bombCount < bombs) {
		var squareNumber = Math.floor(Math.random() * 81); // Number beetween 0 and 80 (closed).
		var x = Math.floor(squareNumber / N), y = Math.floor(squareNumber % N); // element indexes in the board

		// console.log("x, y = ", x, y);
		// console.log("initial board, line 1:\n", board[0]);
		// console.log("bombs = ", bombs);


		if(board[x][y] == 9) {
			continue;
		}

		board[x][y] = 9;

		var i, j;
		for(i=x-1; i <= x+1; i++) {
			for(j=y-1; j <= y+1; j++) {

				if(i >= 0 && i < N && j >= 0 && j < N && board[i][j] != 9) {
					// console.log("Incrementing i, j = ", i, j);
					board[i][j] = board[i][j] + 1;
				}
			}
		}

		bombCount++;

		// console.log("bombCount = ", bombCount);
	}

	// The loop below will substitute 0s for empty string (looks better on the board)
	var i, j;
	for(i=0; i < N; i++) {
		for(j=0; j < N; j++) {

			if(board[i][j] == 0) {
				board[i][j] = "";
			}
			
		}
	}


	console.log("inital board: ", board);

	return board;
}




/*

Board states:

0 - hidden (initial state)
1 - open
-1 - flagged

"flag"
"exposed"
"bomb"
"default"

*/


function generateInitialStates() {

	return [
		Array(9).fill(DEFAULT_STATE),
		Array(9).fill(DEFAULT_STATE),
		Array(9).fill(DEFAULT_STATE),
		Array(9).fill(DEFAULT_STATE),
		Array(9).fill(DEFAULT_STATE),
		Array(9).fill(DEFAULT_STATE),
		Array(9).fill(DEFAULT_STATE),
		Array(9).fill(DEFAULT_STATE),
		Array(9).fill(DEFAULT_STATE),
	];
}






