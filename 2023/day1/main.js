const { readData } = require('../../utils/fileReader');

let data = null;
let regex = /([0-9])/g;

async function start() {
	data = await readData(2023, 1);
	// console.log(data);
	partA();
}

start();

function partA() {
	let values = getValues();
	//console.log(values);
	let sum = reducer(values);
	//console.log(sum);
}


function getValues() {
	let arr = [];
	data.forEach(line => {
		let values = [...line.matchAll(regex)];
		arr.push(`${values[0][0]}${values[values.length - 1][0]}`);
	});
	return arr;
}

function reducer(list) {
	return list.reduce((prev, curr) => convertValue(prev) + convertValue(curr), 0);
}

function convertValue(value) {
	let parsed = parseInt(value);
	if (parsed != NaN) {
		return parsed;
	}
}