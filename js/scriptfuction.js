// "use strict";

// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     num = 10;
// }

// showFirstMessage('Hello World!');
// console.log(num);

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(11, 3));

// function ret() {
//     let num = 50;

//     // 



//     return num;
// }


// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function() {
//     console.log("Hello");
// };

// logger();

// const calc = (a, b) => a + b;

const usdCurr = 28;
const eurCurr = 32;
const discount = 0.9;

function convert(amount, curr) {

    return curr * amount;
}

function promotion(result) {
    console.log(result * discount);
}

const res = convert(500, usdCurr);
promotion(res);

function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return
    }
    console.log('Done');
}

test();
 
function sayName(name) {
    return console.log(`Привет, ${name}!`);
}

sayName('Anton');

function returnNeighboringNumbers(b) {
    let a = b - 1;
    let c = b + 1;
    let arr = [a, b, c];
    return console.log(arr);
}

returnNeighboringNumbers(5);

function getMathResult(a, b) {
    if(typeof(b) !== 'number' || b <= 0) {
        return a;
    } 
    let str = '';
    for(let i = 1; i <= b; i++){
        if(i === b) {
            str += `${i * a}`;
        } else {
            str += `${i * a}---`
        }
    }
    return str;
}

console.log(getMathResult(10, -5));