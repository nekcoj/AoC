const fileReader = require("../utils/fileReader.js");

let data = null;

async function readData() {
  data = await fileReader("./day4/input");
}

function comparePairs(operation) {
  let overlaps = 0;
  data.forEach((pair) => {
    let [elfOne, elfTwo] = pair.split(",");
    let elfOneRange = getRange(elfOne.split("-"));
    let elfTwoRange = getRange(elfTwo.split("-"));
    if (
      elfOneRange[operation]((section) => elfTwoRange.includes(section)) ||
      elfTwoRange[operation]((section) => elfOneRange.includes(section))
    ) {
      overlaps++;
    }
  });
  return overlaps;
}

function getRange(arr) {
  let range = [];
  for (let i = parseInt(arr[0]); i <= parseInt(arr[1]); i++) {
    range.push(i);
  }
  return range;
}

async function start() {
  await readData();
  let fullPairs = comparePairs("every");
  let partialPairs = comparePairs("some");
  console.log(fullPairs);
  console.log(partialPairs);
}

start();
