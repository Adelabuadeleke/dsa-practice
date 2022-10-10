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

// selection sort
function selectionSort(array) {
 const length = array.length;
 for(let i = 0; i < length; i++) {
  // set current index as minmum
  let min = i;
  let temp = array[i];
  for(let j = i+1; j < length; j++) {
   if(array[j] < array[min]){
    min = j;
   }
  }
  array[i] = array[min];
  array[min] = temp;
 }
 return array;
}

// insertion sort
function insertionSort(array) {
 const length = array.length;
 for(let i = 0; i < length; i++){
  if(array[i] < array[0]) {
   // move number to the first position
   array.unshift(array.splice(i, 1)[0]);
  } else {
   // find where number should go 
   for(let j = 1; j < i; j++) {
    if(array[i] > array[j-1] && array[i] < array[j]) {
     // move number to the right spot
     array.splice(j, 0, array.splice(i, 1)[0]);
    }
   }
  }
 }
}

// bubbleSort(numbers);
insertionSort(numbers)
console.log(numbers);