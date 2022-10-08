class Node {
 constructor(value){
  this.value = value;
  this.next = null;
  this.prev = null;
 }
}

class DoublyLinkedList {
 constructor(value) {
  this.head = new Node(value)

  this.tail = this.head;
  this.length = 1;
 }

 append(value) {
  const newNode = new Node(value)
  newNode.prev = this.tail;
  this.tail.next = newNode;
  this.tail = newNode;
  this.length++;
  // return console.log(this)
 }

 prepend(value){
  const newNode = new Node(value)

  newNode.next = this.head;
  this.head.prev = newNode
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
  const follower = leader.next;
  leader.next = newNode
  newNode.next = follower;
  newNode.prev = leader;
  this.length++
  // console.log(this)
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
  // const follower 
  const unwantedNode = leader.next;
  leader.next = unwantedNode.next;
  // if(leader.next == null) {
  //  console.log('it has no next')
  // }
  leader.next.prev = unwantedNode.prev
  this.length--;
  this.printList()
  console.log(this)
 }

}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1)
myLinkedList.insert(1, 99)
// myLinkedList.insert(20, 88)
myLinkedList.printList();
// myLinkedList.remove(2);
// myLinkedList.remove(2);
