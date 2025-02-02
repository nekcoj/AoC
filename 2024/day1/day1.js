import { readData } from '../../utils/fileReader.js';

let data = await readData(2024, 1);

/*
Day 1 - Part 1
*/
function part1() {
    // console.log(data);
    // [ '3   4', '4   3', '2   5', '1   3', '3   9', '3   3' ]
    let first = [];
    let second = [];
    data.forEach(entry => {
        let nums = entry.split(' ');
        first.push(nums[0]);
        second.push(nums[nums.length - 1]);
    });
    
    first.sort();
    second.sort();
    
    // [ '3', '4', '2', '1', '3', '3' ]
    // [ '4', '3', '5', '3', '9', '3' ]
    // [ '1', '2', '3', '3', '3', '4' ]
    // [ '3', '3', '3', '4', '5', '9' ]
    
    let diff = [];
    
    for (let [index, num] of first.entries()) {
        diff.push(Math.abs(num - second[index]));
    }
    
    // console.log(diff);
    
    // [ 2, 1, 0, 1, 2, 5 ]
    
    let distance = diff.reduce((prev, curr) => prev + curr, 0)
    
    // console.log(distance);
    // 11
    // 1222801
}

