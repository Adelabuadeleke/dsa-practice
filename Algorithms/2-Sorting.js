const letters = ['a', 'd', 'z', 'e', 'r', 'b'];
const basket = [2, 65, 35, 2, 1, 7, 8];

const newBask = letters.sort((a, b)=>{
 return a.localeCompare(b)
});
const newLet = letters.sort();

// console.log(newBask);
// console.log(newLet);

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 8];

// Bubble Sort
function bubbleSort(array) {
 const length = array.length;
 for  (let i = 0; i < length; i++ ){
  for(let j = 0; j < length; j++){
   if(array[j] > array[j + 1]) {
    // swap numbers 
    let temp = array[j];
    array[j] = array[j+1];
    array[j + 1] = temp;
   }
   
  }
 }
}

bubbleSort(numbers);
console.log(numbers);