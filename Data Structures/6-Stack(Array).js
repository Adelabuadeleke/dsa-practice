class Node {
 constructor(value) {
  this.value = value;
  this.next = null;
 }
}

class Stack {
 constructor() {
  this.array = [];
 }

 peek() {
  return console.log(this.array[this.array.length - 1]);
 }

 push(value) {
  this.array.push(value)
  return console.log(this);
 }

 pop() {
  this.array.pop();
  return console.log(this);
 } 

 isEmpty() {
  if(this.array.length === 0){
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