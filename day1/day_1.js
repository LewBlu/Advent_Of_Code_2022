const fs = require('fs');
const readline = require('readline');

let calorieArray = [];
let currentCount = 0;

// Open and read file
let lineReader = readline.createInterface({
	input: fs.createReadStream('day_1_puzzle.txt')
});

// Loop through each line
lineReader.on('line', (line) => {
	if(line == '') {
		calorieArray.push(currentCount);
		currentCount = 0;
	} else {
		currentCount += parseInt(line);
	}
});

// Once all lines are read
lineReader.on('close', () => {
	// Push the last remaining count
	calorieArray.push(currentCount);
	// Order values in decending order
	calorieArray.sort().reverse();
	console.log(calorieArray[0]);
	console.log(calorieArray[0]+calorieArray[1]+calorieArray[2]);
});