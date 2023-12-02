const { readData } = require('../../utils/fileReader');

let data = null;
let regex = /(?=(([0-9])|(one)|(two)|(three)|(four)|(five)|(six)|(seven)|(eight)|(nine)))/gm;
let valueMap = {
	'one': 1,
	'two': 2,
	'three': 3,
	'four': 4,
	'five': 5,
	'six': 6,
	'seven': 7,
	'eight': 8,
	'nine': 9
}

async function start() {
	data = await readData(2023, 1);
	// console.log(data);
	let values = getValues();
	console.log(values);
	let sum = reducer(values);
	console.log(sum);
}

start();

function getValues() {
	let arr = [];
	data.forEach(line => {
		let values = line.matchAll(regex);
		let temp = [];
		for (const val of values) {
			temp.push(val[1]);
		}
		arr.push(`${convertValue(temp[0])}${convertValue(temp[temp.length - 1])}`);
	});
	return arr;
}

function reducer(list) {
	return list.reduce((prev, curr) => parseInt(prev) + parseInt(curr), 0);
}

function convertValue(value) {
	let parsed = parseInt(value);
	if (!isNaN(parsed)) {
		return parsed;
	}
	return valueMap[value];
}