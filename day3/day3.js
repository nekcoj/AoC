const fs = require("fs");
const readline = require("readline");
const input = "./day3/input";
/*
let sampleData = [
  "vJrwpWtwJgWrhcsFMMfFFhFp",
  "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
  "PmmdzqPrVvPwwTWBwg",
  "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
  "ttgJtRGJQctTZtZT",
  "CrZsJsPPZsGzwwsLwLmpwMDw",
];
*/
// priority a-z 1-26
// A-Z 27 - 52

let priority = [];

async function getPriority() {
  /* Loop using sampleData 
  sampleData.forEach((rucksack) => {
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
  // Loop with input from file ()
  let r = readline.createInterface({
    input: fs.createReadStream(input),
  });
  r.on("line", function (rucksack) {
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
  });
  await new Promise((res) => r.once("close", res));

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
