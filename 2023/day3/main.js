const { readData } = require('../../utils/fileReader');

let valueArr = ['.', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
let validPositions = [
	'012', '123', '234', '345', '456', '12', '23', '34', '45', '2', '3', '4'
];
let matches = [];
let partNumbers = [];

async function start() {
	data = await readData(2023, 3);
	parseData();
	checkMatches();
	console.log(partNumbers.reduce((acc, cur) => acc + cur, 0));
}

function parseData() {
	for (let i = 0; i < data.length - 1; i++) {
		for (let j = 0; j < data[i].length; j++) {
			if(!valueArr.includes(data[i][j])) {
				matches.push([data[i-1].slice(j - 3, j + 4), data[i].slice(j - 3, j + 4), data[i+1].slice(j - 3, j + 4)]);
			}
		}
	}
}

function checkMatches() {
	// console.log(matches);
	
	matches.forEach(match => {
		match.forEach(row => {
			checkRow(row)
		});
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
	positions.forEach(pos => {
		if (validPositions.includes(pos)) {
		 	partNumbers.push(parseInt(numbers[positions.indexOf(pos)]));
		}
	})
}

function sum() {
	let sum = 0;
	partNumbers.forEach(num => {
		sum += num;
	});
	return sum;
}

start();