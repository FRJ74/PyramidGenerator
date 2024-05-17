/* Declare & initialize variables*/

const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
    rows.push(character.repeat(i + 1));
};

let result = "";

for (const row of rows) {
    result = result + "\n" + row;
    
};

function padRow(name) {
    return character + name;
};

const call = padRow();
console.log(call);


