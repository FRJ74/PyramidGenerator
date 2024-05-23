/* Declare & initialize variables*/

const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i += 1) {
    rows.push(padRow(i+1, count));
};

let result = "";

for (const row of rows) {
    result = result + "\n" + row;
    
};

function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
};




