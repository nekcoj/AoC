const { readData } = require('../../utils/fileReader');

let valueArr = ['.', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
let validPositions = [
	'012', '123', '234', '345', '456', '12', '23', '34', '45', '2', '3', '4'
];
let matches = [];
let partNumbers = [];
let part2numbers = [];

async function start() {
	data = await readData(2023, 3);
	parseData();
	checkMatches();
	// console.log(partNumbers.reduce((acc, cur) => acc + cur, 0));
	console.log(part2numbers);
	console.log(part2numbers.reduce((acc, cur) => acc + cur, 0));

}

function parseData() {
	for (let i = 0; i < data.length - 1; i++) {
		for (let j = 0; j < data[i].length; j++) {
			// if(!valueArr.includes(data[i][j])) {

			// adjusted for part 2
			if (['*'].includes(data[i][j])) {
				matches.push([data[i-1].slice(j - 3, j + 4), data[i].slice(j - 3, j + 4), data[i+1].slice(j - 3, j + 4)]);
			}
		}
	}
}

function checkMatches() {
	// console.log(matches);
	
	matches.forEach(match => {
		// updated for part 2
		let p2 = [...checkRow(match[0]), ...checkRow(match[1]), ...checkRow(match[2])];
		if (p2.length > 1) {
			part2numbers.push(p2.reduce((acc, cur) => acc * cur, 1));
		}
		// match.forEach(row => {
		// 	checkRow(row)
		// });
	});
}

function checkRow(row) {
	let val = {
		pos: [],
		num: []
	}
	// console.log(row);

	for(let i = 0; i < row.split('').length; i++) {
		if(!isNaN(row[i])) {
			val.pos.push(i)
			val.num.push(row[i])
		} else {
			val.pos.push('.');
			val.num.push('.');
		}
		
	}
	let positions = val.pos.join('').split('.');
	let numbers = val.num.join('').split('.');
	let part2 = [];
	positions.forEach(pos => {
		if (validPositions.includes(pos)) {
		 	// partNumbers.push(parseInt(numbers[positions.indexOf(pos)]));

			// added for part 2
			console.log('part2 before add', part2);
			part2.push(parseInt(numbers[positions.indexOf(pos)]));
			console.log('part2 after add', part2);
		}
	});
	// updated for part2
	return part2;
}

start();