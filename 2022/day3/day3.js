const fs = require("fs");
const readline = require("readline");
const input = "./day3/input";

let sampleData = [
  "vJrwpWtwJgWrhcsFMMfFFhFp",
  "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
  "PmmdzqPrVvPwwTWBwg",
  "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
  "ttgJtRGJQctTZtZT",
  "CrZsJsPPZsGzwwsLwLmpwMDw",
];

// priority a-z 1-26
// A-Z 27 - 52

let priority = [];

async function getPriority() {
  // Loop using sampleData
  /* sampleData.forEach((rucksack) => {
    let items = rucksack.split("");
    console.log(items);
    let compOne = Array.from(new Set(items.slice(0, items.length / 2)));
    let compTwo = Array.from(
      new Set(items.slice(items.length / 2, items.length))
    );
    console.log("Compartment 1:", compOne);
    console.log("Compartment 2:", compTwo);
    compOne.forEach((item) => {
      if (compTwo.includes(item)) {
        priority.push(item);
      }
    });
  }); */

  // Sample data part2
  /* sampleData.forEach((rucksack, index, arr) => {
    if ((index + 1) % 3 === 0) {
      let items = Array.from(new Set(rucksack.split("")));
      items.forEach((item) => {
        if (arr[index - 2].includes(item) && arr[index - 1].includes(item)) {
          priority.push(item);
        }
      });
    }
  }); */

  // Loop with input from file ()
  let data = [];
  let r = readline.createInterface({
    input: fs.createReadStream(input),
  });
  r.on("line", function (rucksack) {
    data.push(rucksack);
  });
  await new Promise((res) => r.once("close", res));
  data.forEach((rucksack, index, arr) => {
    if ((index + 1) % 3 === 0) {
      let items = Array.from(new Set(rucksack.split("")));
      items.forEach((item) => {
        if (arr[index - 2].includes(item) && arr[index - 1].includes(item)) {
          priority.push(item);
        }
      });
    }
  });
  console.log(priority);
  let prioritySum = 0;
  priority.forEach((itemType) => {
    let charValue = itemType.charCodeAt(0);
    prioritySum += charValue < 91 ? charValue - 38 : charValue - 96;
    console.log(charValue);
  });
  console.log(prioritySum);
}

getPriority();
