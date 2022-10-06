class Node {
 constructor(value) {
  this.value = value;
  this.next = null;
 }
}

class Stack {
 constructor() {
  this.top = null;
  this.bottom = null;
  this.length = 0;
 }

 peek() {
  return console.log(this.top)
 }

 push(value) {
  const newNode = new Node(value);
  if(this.length === 0) {
   this.top = newNode;
   this.bottom = newNode
  } else {
   const holdingPointer = this.top;
   this.top = newNode;
   this.top.next = holdingPointer;
  }
  this.length++;
  return console.log(this);
 }

 pop() {
  if(!this.top) {
   return console.log(null)
  }

  const holdingPointer = this.top;
  this.top = this.top.next;
  this.length--;
  return console.log(holdingPointer);
 } 

 isEmpty() {
  if(this.length === 0){
   return console.log(true)
  } else {
   console.log(false)
  }
 }
}

const myStack = new Stack();
myStack.isEmpty();
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
myStack.isEmpty()
myStack.peek()
myStack.pop();
myStack.pop();
myStack.pop();
myStack.isEmpty();