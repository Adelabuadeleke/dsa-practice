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
const b = Set()

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

 set() {

 }

 get() {
  
 }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.get('grape');