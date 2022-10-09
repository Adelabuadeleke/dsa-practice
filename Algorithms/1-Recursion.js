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

findFactorialRecursive()