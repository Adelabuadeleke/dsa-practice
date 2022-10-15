let counter = 0;
function inception() {
 console.log(counter);
 if (counter > 3) {
  return console.log('done!');
 }
 counter++
 return inception();
}

// inception();

// Write two functions that finds factorial of any number. 
// One should use recursive, the other should just use a for loop.

function findFactorialRecursive(number) {
 if(number === 2) {
  return 2;
 }

 return number * findFactorialRecursive(number - 1)
}

function findFactorialiterative(number) {
 let answer = 1;

 if(number === 2){
  answer = 2;
 }
 for(let i = 2; i <= number; i++) {
  answer = answer * i;
 }

 return console.log(answer);
}

// findFactorialRecursive()

// Given a number N return the index value of the Fibonacci 
// sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of
// the  2 previous values, that means that for N=5 --> 2+3


// function fibonacciiterative(n){
//  let fib = [0, 1]
//  if (n <= 1) {
//   return console.log(fib.indexOf(n))
//  }
//  for (let i = 0; i < n; i++) {
//   let next = fib[fib.length - 2]
//   let next2 = fib[fib.length - 1] 

//   if(fib.includes(n)){
//    return console.log(fib.indexOf(n))
//   } else{

//    if(next2 > n) {
//     return console.log('number not included in fibonacci sequence')
//    }
//    let newNum = Number(next + next2)
//    // console.log(`${next} + ${next2} =  ${newNum}`)
//    // console.log(fib.length)
//    fib.push(newNum)
//   }
//  }
 
//  console.log(fib.indexOf(n), fib)
// }

function fibonacciiterative(n) {
 let arr = [0, 1]
 for(let i = 2; i < n +1; i++){
  arr.push(arr[i - 2] + arr[i - 1])
 }
 return arr[n]
}
// fibonacciiterative(14);

function fibonacciiterativeRecursion(n) {
 if (n <= 1) {
  return n
 }

 return fibonacciiterativeRecursion(n - 1) + fibonacciiterativeRecursion(n - 2)
}

function fibonacciMaster() {
 let cache = {};
 return function fib(n) {
  counter++
  if(n in cache) {
   return cache[n];
  } else {
   if(n < 2) {
    return n;
   } else {
    cache[n] = fib(n - 1) + fib(n -2);
    return cache[n];
   }
  }
 }
}

const fasterFib = fibonacciMaster();
console.log('DP', fasterFib(10));

console.log('we did ' + counter + ' calculations')

// console.log(fibonacciiterativeRecursion(8))
