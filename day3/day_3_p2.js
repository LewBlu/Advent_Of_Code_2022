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
	allRucksacks.push(line);
});

// Once all lines are read
lineReader.on('close', () => {
	let currentGroup = 0;
	while (currentGroup < allRucksacks.length) {
		let firstRucksackInGroupItems = allRucksacks[currentGroup].split('');
		let badgeItem = '';
		firstRucksackInGroupItems.forEach(item => {
			if(allRucksacks[currentGroup+1].includes(item) && allRucksacks[currentGroup+2].includes(item) && badgeItem == '') {
				//  Calculate character score
				badgeItem = item;
				if(badgeItem == badgeItem.toUpperCase()) {
					// Character is uppercase
					amount += badgeItem.charCodeAt() - 38;
				} else {
					// Character is lower case
					amount += badgeItem.charCodeAt() - 96;
				}
			}
		});
		console.log(badgeItem+' : '+amount);
		currentGroup += 3;
	}
	console.log(amount);
});