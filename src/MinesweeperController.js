

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

	constructor() {
		super();

		this.state = {
			numberOfBombs: 10,
			remainingBombs: 10,
			numberOfFlags: 0,
			board: generateBoard(10),
			states: [
				Array(9).fill(EXPOSED_STATE),
				Array(9).fill(FLAG_STATE),
				Array(9).fill(EXPOSED_STATE),
				Array(9).fill(EXPOSED_STATE),
				Array(9).fill(EXPOSED_STATE),
				Array(9).fill(EXPOSED_STATE),
				Array(9).fill(EXPOSED_STATE),
				Array(9).fill(EXPOSED_STATE),
				Array(9).fill(EXPOSED_STATE),
			],
		};
	}

	render() {
	    if (this.state.fetchedData === null) {
	      return <div />;
	    }

	    return (<Board 
	      handleClick={this.handleClick}
	      board={this.state.board}
	      states={this.state.states}
	    />);
  	}

  	handleClick(x, y, state, boardValue) {
  		alert(`Square clicked in position: (${x}, ${y}). State = ${state}, boardValue = ${boardValue}`);
  	}



	

	openSquare(board, x, y) {

	}

	squareClicked(x, y) {
		let board = this.state.board;

		

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

		console.log("x, y = ", x, y);
		console.log("initial board, line 1:\n", board[0]);
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

		console.log("bombCount = ", bombCount);
	}


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
		Array(9).fill(EXPOSED_STATE),
		Array(9).fill(EXPOSED_STATE),
		Array(9).fill(EXPOSED_STATE),
		Array(9).fill(EXPOSED_STATE),
		Array(9).fill(EXPOSED_STATE),
		Array(9).fill(EXPOSED_STATE),
		Array(9).fill(EXPOSED_STATE),
		Array(9).fill(EXPOSED_STATE),
		Array(9).fill(EXPOSED_STATE),
	];
}






