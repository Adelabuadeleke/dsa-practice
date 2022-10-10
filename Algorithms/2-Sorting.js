const letters = ['a', 'd', 'z', 'e', 'r', 'b'];
const basket = [2, 65, 35, 2, 1, 7, 8];

const newBask = letters.sort((a, b)=>{
 return a.localeCompare(b)
});
const newLet = letters.sort();

console.log(newBask);
console.log(newLet);
