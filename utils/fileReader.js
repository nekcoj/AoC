const fs = require("fs");
const readline = require("readline");

async function fileReader(filename) {
  let data = [];
  let r = readline.createInterface({
    input: fs.createReadStream(filename),
  });
  r.on("line", function (line) {
    data.push(line);
  });
  await new Promise((res) => r.once("close", res));
  return data;
}

async function readData(year, day) {
  return await fileReader(`./${year}/day${day}/input`);
}

module.exports = {fileReader, readData};
