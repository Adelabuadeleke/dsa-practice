// const nemo = ['nemo'];
// // const large = new Array(100000).fill('nemo');
// function findNemo(array) {
//     // let t0 = performance.now()
//     for(let i = 0; i < array.length; i++)  {
//         if(array[i] === 'nemo'){
//             console.log('Found NEMO!');
//             break;
//         }
//     }
//     // let t1 = performance.now()
//     console.log('took findNemo ' + (t1 - t0) +'ms');
// }

// findNemo(nemo); // O(n) --> Linear time
// let boxes = [0, 1, 2, 3, 4, 5];

// function logFirstTwoBoxes(boxes) {
//     console.log(boxes[0]); // O(1)
//     console.log(boxes[1]) // O(1)
// }

// logFirstTwoBoxes(boxes) //O(2) --> Constant time

// log all pairs of array
// const boxes = ['a', 'b', 'c', 'd', 'e'];

// function logPairs(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         for(let j = 0; j < arr.length; j++){
//             console.log(arr[i], arr[j])
//         }
//     }
// }

// logPairs(boxes);

// function printAllNumsThenSum(numbers) {
//     console.log('these are the numbers:');
//     numbers.forEach(function(number){
//         console.log(number);
//     })

//     console.log('and these are their sums');
//     numbers.forEach(function(firstNumber){
//         numbers.forEach(function(secondNumber){
//             console.log(firstNumber + secondNumber);
//         })
//     })
// }

// printAllNumsThenSum([1,2,3,4,5]) // O(n^2)

// Given two arrays, create a function that let's user know (true/false) whether these two arrays contain any common items
// Example:
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
// should return false.
//-------------------------------------------------------------
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['a', 'y', 'x'];
// should return true.

// 2 parameters - arrays
// return true or false

// function containsCommonitems(arr1, arr2) {
//     for(let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if(arr1[i] === arr2[j]){
//                 return console.log(true);
//             }
//         }
//     }
//     return console.log(false) ;
// }


// containsCommonitems(array1, array2); 
// O(a*b) time complexity
// O(1) space complexity

// array1 ===> obj {
// a:true,
// b:true,
// c:true,
// x:true,
// }
// array2[i] === obj.properties


// function containsCommonitems2(arr1, arr2) {
//     let map = {};
//     for(let i = 0; i < arr1.length; i++) {
//         if(!map[arr1[i]]){
//             const item = array1[i];
//             map[item] = true;
//         }
//     }

//     for(let j = 0; j < arr2.length; j++) {
//         if(map[arr2[j]]) {
//             return console.log(true)
//         }
//     }
//     return console.log(false)
//     // console.log(map)
// }

// containsCommonitems2(array1, array2); //O(a + b) ==> Time complexity

function containsCommonitems3(arr1, arr2) {
    return arr1.some(item => arr2.includes(item))
}

containsCommonitems3(array1, array2);