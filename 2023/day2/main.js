const { readData } = require('../../utils/fileReader');

let data = null;

let cubes = {
    red: 12,
    green: 13,
    blue: 14
}
let records = null;
let possibleGameIds = [];

async function start() {
	data = await readData(2023, 2);
	//console.log(data);
	records = splitString();
	checkGames();
	console.log(possibleGameIds.reduce((prev, curr) => prev + curr, 0));
}

function splitString() {
	let parsed = []
	for (const line of data) {
		parsed.push(line
			// Remove Game X part
			.split(':')[1]
			// Split each hand
			.split(';')
			// Remove whitespace
			.map(a => a.trim())
			// Split each hand by colour
			.map(b => b.split(','))
			// Split each colour/cube combination into number of cubes and which colour
			.map(c => c.map(d => d.trim().split(' ')))
		);
	}
	return parsed;
}

function checkGames() {
	for (let i = 0; i < records.length; i++) {
		let handPossibility = [];
		records[i].forEach(game => {
			for (const hand of game) {
				parseInt(hand[0]) <= cubes[hand[1]] ? handPossibility.push(true) : handPossibility.push(false);
			}
		});
		if (handPossibility.every( hand => hand == true)) {
			possibleGameIds.push(i+1);
		}
	}
}


start();