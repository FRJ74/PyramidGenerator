/* Declare & initialize variables*/

const character = "#";
const count = 8;
const rows = [];

// TODO: Use a different kind of loop.

/*for (let i = 1; i <= count; i ++) {
    rows.push(padRow(i, count));
};*/

let result = "";
let continueLoop = false;
let done = 0;

while (continueLoop) {
  done++;
};

for (const row of rows) {
    result = result + "\n" + row;
    
};

function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
};




