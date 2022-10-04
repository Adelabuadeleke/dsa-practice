// 10-->5-->16
// let myLinkedList = {
//  head: {
//   value: 10,
//   next:{
//    value: 5,
//    next:{
//     value: 16,
//     next: null
//    }
//   }
//  }
// }

class LinkedList {
 constructor(value) {
  this.head = {
   value: value,
   next: null
  }

  this.tail = this.head;
  this.length = 1;
 }
}

const myLinkedList = new LinkedList(10);

console.log(myLinkedList);