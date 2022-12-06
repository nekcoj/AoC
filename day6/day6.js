const fileReader = require("../utils/fileReader.js");

let data = null;

async function readData() {
  data = await fileReader("./day6/input");
}

async function start() {
  await readData();
  console.log(data);
  getFirstMarker();
}

start();

function getFirstMarker() {
  let marker = [];
  let stream = data[0].split("");
  console.log(stream);
  stream.forEach((char, index) => {
    if (index >= 13) {
      let set = Array.from(
        new Set([
          stream[index - 3],
          stream[index - 2],
          stream[index - 1],
          stream[index],
        ])
      );
      if (set.length === 14) {
        marker.push([char, index + 1]);
      }
    }
  });
  console.log(marker[0]);
}
