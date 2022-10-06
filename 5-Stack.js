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

 }

 isEmpty() {

 }

}

const myStack = new Stack();
myStack.push('google');