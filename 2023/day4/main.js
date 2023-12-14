  const { readData } = require('../../utils/fileReader');

  let data = null;
  let winningNumbers = [];
  let yourNumbers = [];
  let points = [];

  async function start() {
    data = await readData(2023, 4, false);
    parseData();
    checkNumbers();
    console.log('Total points: ', points.reduce((acc, cur) => acc + cur, 0));
  }

  function parseData() {
    let parsed = data.map(line => {
      return line.split(': ')[1].split(' | ');
    });
    
    parsed.forEach(row => {
      winningNumbers.push(row[0].split(' ').filter(el => el !== ''));
      yourNumbers.push(row[1].split(' ').filter(el => el !== ''));
    })
    console.log('Winning numbers:', winningNumbers);
    console.log('Your numbers:', yourNumbers);
  }

  function checkNumbers() {
    for (let i = 0; i < yourNumbers.length; i++) {
      let scratchCardWinningNumbers = [];
      for (let j = 0; j < yourNumbers[i].length; j++) {
        if (winningNumbers[i].includes(yourNumbers[i][j])) {
          scratchCardWinningNumbers.push(yourNumbers[i][j]);
        }
      }
      scratchCardWinningNumbers.length ? calculatePoints(scratchCardWinningNumbers) : null;
    }
  }

  function calculatePoints(winningNumbers) {
    let p = 1;
    for(let i = 1; i < winningNumbers.length; i++) {
      p = p * 2;
    }
    console.log('Points: ', p);
    points.push(p);
  }

  start();