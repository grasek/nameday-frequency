const fs = require('fs');
const data = fs.readFileSync("data.txt", "utf-8");
const days = data.split("\n").map(e => e.split(", ")).flat()
const mostFrequentElement = (arr) => {
    return Object.entries(
        arr.reduce((a, b) => {
            a[b] = (a[b] || 0) + 1;
            return a;
        }, {})
    ).reduce((a, b) => a[1] > b[1] ? a : b);
};
console.log(mostFrequentElement(days))