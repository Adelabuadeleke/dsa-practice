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
  if(index >= this.length){
   return this.append(value)
  }

  const newNode = new Node(value);
  const leader = this.traverseToindex(index - 1);
  const holdingPointer = leader.next;
  leader.next = newNode
  newNode.next = holdingPointer;
  this.length++
  return this.printList();
 }

 traverseToindex(index) {
  let counter = 0;
  let currentNode = this.head;
  while(counter !== index) {
   currentNode = currentNode.next;
   counter++;
  }
  return currentNode;
 }

 remove(index) {
  const leader = this.traverseToindex(index - 1);
  const unwantedNode = leader.next;
  leader.next = unwantedNode.next;
  this.length--;
  this.printList()
 }

 reverse() {
  if(!this.head.next){
   return this.head
  }

  let first = this.head;
  this.tail = this.head;
  let second = first.next;

  while(second){
   const temp = second.next;
   second.next = first;
   first = second;
   second = temp;
  }
  this.head.next = null;
  this.head = first; 
  return console.log(this);
 }

}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1)
myLinkedList.insert(2, 99)
myLinkedList.insert(20, 88)
myLinkedList.printList();
myLinkedList.remove(2);
myLinkedList.remove(2);
myLinkedList.reverse();