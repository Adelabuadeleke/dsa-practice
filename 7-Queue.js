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
  
 }

 enqueue(value){

 }

 dequeue(){

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

// Joy
// Matt
// Pavel
// Samir