const fileReader = require("../../utils/fileReader.js");

let data = null;

async function readData() {
  data = await fileReader("./day5/input");
}
let sampleStacks = {
  1: ["Z", "N"],
  2: ["M", "C", "D"],
  3: ["P"],
};

let stacks = {
  1: ["Z", "T", "F", "R", "W", "J", "G"],
  2: ["G", "W", "M"],
  3: ["J", "N", "H", "G"],
  4: ["J", "R", "C", "N", "W"],
  5: ["W", "F", "S", "B", "G", "Q", "V", "M"],
  6: ["S", "R", "T", "D", "V", "W", "C"],
  7: ["H", "B", "N", "C", "D", "Z", "G", "V"],
  8: ["S", "J", "N", "M", "G", "C"],
  9: ["G", "P", "N", "W", "C", "J", "D", "L"],
};

async function start() {
  await readData();
  moveCrates("part2");
}

function moveCrates(part) {
  let moves = [];
  data.forEach((line) => {
    moves.push(
      line
        .replace(
          /(\w+ )(?<first>\d+)( \w+ )(?<second>\d+)( \w+ )(?<third>\d+)/gm,
          "$<first> $<second> $<third>"
        )
        .split(" ")
    );
  });
  moves.forEach((move) => {
    eval(part)(move);
  });
  let topStack = [];
  Object.values(stacks).forEach((stack) => {
    topStack.push(stack[stack.length - 1]);
  });
  console.log(topStack.join(""));
}

function part1(move) {
  for (let i = 0; i < move[0]; i++) {
    stacks[move[2]].push(stacks[move[1]][stacks[move[1]].length - 1]);
    stacks[move[1]].length = stacks[move[1]].length - 1;
  }
}

function part2(move) {
  stacks[move[2]].push(
    ...stacks[move[1]].slice(
      stacks[move[1]].length - move[0],
      stacks[move[1].length - 1]
    )
  );
  stacks[move[1]].length -= move[0];
}
start();
