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

class Node {
 constructor(value){
  this.value = value;
  this.next = null;
 }
}

class LinkedList {
 constructor(value) {
  this.head = new Node(value)

  this.tail = this.head;
  this.length = 1;
 }

 append(value) {
  const newNode = new Node(value)

  this.tail.next = newNode;
  this.tail = newNode;
  this.length++;
  // return console.log(this)
 }

 prepend(value){
  const newNode = new Node(value)

  newNode.next = this.head;
  this.head = newNode;
  this.length++;
  // return console.log(this)
 }
printList(){
 const array = [];
 let currentNode = this.head;
 while(currentNode !== null){
  array.push(currentNode.value);
  currentNode = currentNode.next;
 }
 return console.log(array);
}

 insert(index, value) {

 }

}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1)
// myLinkedList.insert(2, 99)
myLinkedList.printList();