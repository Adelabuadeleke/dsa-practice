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

 append(value) {
  const newNode = {
   value: value,
   next: null
  }

  this.tail.next = newNode;
  this.tail = newNode;
  this.length++;
  return console.log(this)
 }

 prepend(value){
  const newNode = {
   value: value,
   next: null
  }

  newNode.next = this.head;
  this.head = newNode;
  this.length++;
  return console.log(this)

  this.head
 }

}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.prepend(16);
// console.log(myLinkedList);