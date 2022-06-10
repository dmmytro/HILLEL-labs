const number = 120;
console.log(`This number in binary is ${number.toString(2)}`);
console.log(`This number in hexademical ${number.toString(16)}`);


const secondNumber = prompt("Enter number");
alert(`Number + 2 = ${parseFloat(secondNumber) + 2}`)
alert(`Number - 2 = ${parseFloat(secondNumber) - 2}`)
alert(`Number * 2 = ${parseFloat(secondNumber) * 2}`)
alert(`Number / 2 = ${parseFloat(secondNumber) / 2}`)


const someStr = prompt("Enter string");
console.log(`String length: ${someStr.length}`);

let thirdNumber = 0.51000002;
console.log(`Fixed number: ${thirdNumber.toFixed(2)}`);
console.log(`Fixed number increased by 2:  ${(thirdNumber + 2).toFixed(2) }`);


const str = 'the quick brown fox jumps over the lazy dogs back';
const str_two = 'brown fox jumps';
console.log(str.indexOf(str_two));
console.log(str.toUpperCase());


const a = 1, b = 2, c = 3, d = 3;
console.log((a > b) || (b < c) || (c > d));
console.log((a < b) && (b < c) && (c <= d));


const str1 = '1';
const str2 = 1;
console.log(str1 == str2);
console.log(str1 === str2);


let height = 20;
let width = null;
let area = (height ?? 5) * (width ?? 10);
console.log(area);