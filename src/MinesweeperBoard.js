

/*

Board:

0 - Empty
1 to 8 - Bombcount
9 - Bomb
negative values: Flag

*/


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