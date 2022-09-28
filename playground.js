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

function printAllNumsThenSum(numbers) {
    console.log('these are the numbers:');
    numbers.forEach(function(number){
        console.log(number);
    })

    console.log('and these are their sums');
    numbers.forEach(function(firstNumber){
        numbers.forEach(function(secondNumber){
            console.log(firstNumber + secondNumber);
        })
    })
}

printAllNumsThenSum([1,2,3,4,5]) // O(n^2)