const fs = require('fs');
const readline = require('readline');

let allRucksacks = [];
let amount = 0;

// Open and read file
let lineReader = readline.createInterface({
	input: fs.createReadStream('day_3_puzzle.txt')
});

// Loop through each line
lineReader.on('line', (line) => {
	const index = line.length/2;
	const compartments = [
		line.substring(0, index),
		line.substring(index)
	];
	const itemsInFirst = compartments[0].split('');
	let duplicatedItem = '';
	itemsInFirst.forEach(item => {
		if(compartments[1].includes(item) && duplicatedItem == '') {
			//  Calculate character score
			duplicatedItem = item;
			if(duplicatedItem == duplicatedItem.toUpperCase()) {
				// Character is uppercase
				amount += duplicatedItem.charCodeAt() - 38;
				
			} else {
				// Character is lower case
				amount += duplicatedItem.charCodeAt() - 96;
			}
		}
	});
	allRucksacks.push(compartments);
});

// Once all lines are read
lineReader.on('close', () => {
	console.log(amount);
});