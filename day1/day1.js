const fs = require("fs");
const readline = require("readline");
const input = "./input";

// Globals
let counter = 0;
let elves = {};

async function countCalories() {
  let r = readline.createInterface({
    input: fs.createReadStream(input),
  });
  r.on("line", function (line) {
    line === ""
      ? (counter = counter + 1)
      : elves[counter]
      ? elves[counter].push(parseInt(line))
      : (elves[counter] = [parseInt(line)]);
  });
  await new Promise((res) => r.once("close", res));
  console.log("Counter:", counter, " elves.");
  Object.entries(elves).forEach(([key, value]) => {
    elves[key] = value.reduce((a, b) => a + b, 0);
  });
  console.log(elves);

  let sorted = Object.values(elves).sort((a, b) => (a < b ? 1 : -1));
  console.log(sorted.slice(0, 3).reduce((a, b) => a + b, 0));
}

countCalories();
