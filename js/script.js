'use strict';

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num <= 55);

// for (let i = 1; i < 8; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }
//     console.log(i);
// }

// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j);
//     }
// }

// // *   
// // **
// // *** 
// // ****
// // *****
// // ******

// let result = '';
// const lenght = 7;

// for (let i = 1; i < lenght; i++) {

//     for (let j = 0; j < i; j++) {
//         result +='*';
//     }

//     result += '\n';
// }

// console.log(result);

// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 3; k++) {
//             if (k === 2) break first;
//             console.log(`Third level: ${k}`);
//         }
//     }
// }

// for (let i = 5; i < 11; i++){
//     console.log(i);
// }

// for (let i = 20; i > 9; i--) {
//     if (i === 13) break;
//     console.log(i)
// }

// for (let i = 2; i < 11; i++) {
//     if (!(i%2 === 0)) continue;
//     console.log(i);
// }

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//     continue;
//     } else {
//         console.log(i);
//     }
// }

// let i = 2;

// while (i < 16) {
//     i++;
//     if (i % 2) 
//     console.log(i);
// }


// const arr = [];

// for (let i = 5; i < 11; i++){
//     arr[i - 5] = i;
// }

// console.log(arr);
// return arr;

// const arr = [];

// for (let i = 5; i < 11; i++) {
//     arr[i - 2] = i;
// }
// console.log(arr);

// const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];

// result.push(...arr);

//     console.log(result);

//     const data = [5, 10, 'Shopping', 20, 'Homework'];

//     for (let i = 0; i < data.length; i++) {
//      if (typeof(data[i]) === 'number') {
//         data[i] *= 2;
//     } else if (typeof(data[i]) === 'string' ) {
//         data[i] += '- done';
//     } 
// }
// console.log(data);

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];

// for(let i = data.length - 1; i >= 0; i--) {
    
//  result.push(data[i]);
// } 
//    console.log(result);

// let result = '';
// const lines = 6;

// for (let i = lines - 1; i > 0; i--) {
//     for (let j = 0; j < lines - i ; j++) {
//     result += ' ';
//     }
//     for (let k = 0; k < 2 * i - 1 ; k++) {
//         result +='*';
//     }
//     result += '\n'; 
// }

// console.log(result);

// let result = '';
// const length = 5;

// for (let i = 0; i < length; i++) {
//   for (let j = 0; j < length - i - 1; j++) {
//     result += ' ';
//   }
//   for (let k = 0; k < 2 * i + 1; k++) {
//     result += '*';
//   }
//   result += '\n';
// }

// console.log(result);


const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];

for (let i = data.length - 1; i >= 0 ; i--) {
    result.push(data[i]);
}
console.log(result);

























