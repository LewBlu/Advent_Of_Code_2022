const fs = require('fs');
const readline = require('readline');

const options = {
	'X' : { beats: 'C', draw: 'A', value: 1},		// Rock
	'Y' : { beats: 'A', draw: 'B', value: 2},		// Paper
	'Z' : { beats: 'B', draw: 'C', value: 3}		// Scissors
}

const options2 = {
	'A' : { win: 2, draw: 1, lose: 3},	// Rock
	'B' : { win: 3, draw: 2, lose: 1},	// Paper
	'C' : { win: 1, draw: 3, lose: 2},	// Scissors
}

let scoreP1 = 0;
let scoreP2 = 0;

// Open and read file
let lineReader = readline.createInterface({
	input: fs.createReadStream('day_2_puzzle.txt')
});

// Loop through each line
lineReader.on('line', (line) => {
	const selectedOptions = line.split(' ');
	if(selectedOptions[0] == options[selectedOptions[1]].beats) {
		scoreP1 += 6;
	} else if(selectedOptions[0] == options[selectedOptions[1]].draw) {
		scoreP1 += 3;
	}
	scoreP1 += options[selectedOptions[1]].value;

	switch(selectedOptions[1]) {
		case 'X':
			scoreP2 += options2[selectedOptions[0]].lose;
			break;
		case 'Y':
			scoreP2 += options2[selectedOptions[0]].draw;
			scoreP2 += 3;
			break;
		case 'Z':
			scoreP2 += options2[selectedOptions[0]].win;
			scoreP2 += 6;
			break;	
	}
});

// Once all lines are read
lineReader.on('close', () => {
	console.log(scoreP1);
	console.log(scoreP2);
});