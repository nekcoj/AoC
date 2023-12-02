const fileReader = require("../../utils/fileReader.js");

let data = null;

async function readData() {
  data = await fileReader("./day6/input");
}

async function start() {
  await readData();
  console.log(data);
  getFirstMarker(4);
  getFirstMarker(14);
}

start();

function getFirstMarker(numberOfUniqueCharacters) {
  let marker = [];
  let stream = data[0].split("");
  console.log(stream);
  stream.forEach((char, index) => {
    if (index >= numberOfUniqueCharacters - 1) {
      let spl = stream.slice(index - numberOfUniqueCharacters + 1, index + 1);
      let set = Array.from(new Set(spl));
      if (set.length === numberOfUniqueCharacters) {
        marker.push([char, index + 1]);
      }
    }
  });
  console.log(marker[0]);
}
