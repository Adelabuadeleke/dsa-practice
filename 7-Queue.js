class Node {
 constructor(value) {
  this.value = value;
  this.next = null;
 }
}

class Queue {
 constructor(){
  this.first = null;
  this.last = null;
  this.length = 0;
 }

 peek(){
  return console.log(this.first)
 }

 enqueue(value) {
  const newNode = new Node(value)
  if(this.length === 0){
   this.first = newNode;
   this.last = newNode;
   this.length++;
  } else {
   const holdingPointer = this.last;
   console.log(holdingPointer);
   holdingPointer.next = newNode;
   this.last = newNode;
   this.length++;
  }

  return console.log(this);
 }

 dequeue(){
  if(this.length === 0) {
   return console.log('cannot dequeue an empty Queue!')
  } else if (this.first === this.last) {
   this.first = null;
   this.last = null;
   this.length--;
  } else {
   const holdingPointer = this.first.next;
   delete this.first;
   this.first = holdingPointer;
   this.first.next = holdingPointer.next;
   this.length--
  }
  return console.log(this);
 }

 isEmpty(){
  if(this.length === 0) {
   return console.log(true)
  } else{
   return console.log(false)
  }
 }
}

const myQueue = new Queue();
myQueue.isEmpty();
myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
myQueue.enqueue('Samir');
myQueue.peek();
myQueue.dequeue();
// Joy
// Matt
// Pavel
// Samir