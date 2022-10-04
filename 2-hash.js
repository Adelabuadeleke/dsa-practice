let user = {
 age: 54,
 name: 'Kyle',
 magic:true,
 scream: function(){
  console.log('aaaaah!')
 }
}

user.age //O(1)
user.spel = 'abra kadabra'; // 0(1)
user.scream //O(1)

// O(n/k) --> collisions

const a = new Map()
const b = new Set()

// hash table
class HashTable {
 constructor(size) {
  this.data = new Array(size);
  [['grape', 100000]]
 }
 
  _hash(key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++){
   hash = (hash + key.charCodeAt(i) * i) %
   this.data.length;
  }
  return hash;
 }

 set(key, value) {
  let address = this._hash(key);
  if(!this.data[address]) {
   this.data[address] = [];
   this.data[address].push([key, value])
   console.log(this.data)
  }
   this.data[address].push([key, value])
   return this.data
 }
 

 get(key) {
  let address = this._hash(key);
  const currentBucket = this.data[address];
  if(currentBucket) {
   for(let i = 0; i < currentBucket.length; i++) {
    if(currentBucket[i][0] === key) {
     return console.log(currentBucket[i][1])
    }
   }
  } 
  return undefined
 }

 keys(){
  const keysArray = []
  for(let i = 0; i < this.data.length; i++) {
   if(this.data[i]) {
    keysArray.push(this.data[i][0][0])
   }
  }
  return console.log(keysArray)
 }

}

// const myHashTable = new HashTable(50);
// myHashTable.set('grapes', 10000);
// myHashTable.set('apples', 54);
// myHashTable.set('oranges', 2);
// myHashTable.get('apples');
// myHashTable.keys()

// Google Question
// Given an array = [2,5,1,2,3,5,1,2,4];
// returns 2

// Given an array = [2,1,1,2,3,5,1,2,4];
// returns 1

// Given an array = [2,3,4,5];
// returns undefined

function firstRecurringCharacter(input) {
 for(let i = 0; i < input.length; i++){
  for(let j = i + 1; j < input.length; j++){
   if(input[i] === input[j]) {
    return console.log(input[i])
   }
  }
 }

 return console.log(undefined)
} //O(n^2)

function firstRecurringCharacter2(input){
 let map = {};
 for(let i = 0; i < input.length; i++ ){
  if(map[input[i]] !== undefined){
   return console.log(input[i])
  } else {
   map[input[i]] = i
  }
 console.log(map);
  
 }

 return console.log(undefined)
} //O(n)

firstRecurringCharacter([2,5,1,2,3,5,1,2,4])