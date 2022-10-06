class CrazyQueue {
 constructor() {
  this.first = [];
  this.last = [];
 }

 enqueue(value) {
  const length = this.first.length;
  for (let i = 0; i < length; i++){
   this.last.push(this.first.pop());
  }
  this.last.push(value);
  return console.log(this);
 }

 dequeue() {
  const length = this.last.length;
  for(let i = 0; i < length; i++){
   this.first.push(this.last.pop());
  }
  this.first.pop();
  return console.log(this)
 }

 peek() {
  if(this.last.length > 0) {
   return console.log(this.last[0]);
  }
  return console.log(this.first[this.first.length - 1]);
 }
}

const myQueue = new CrazyQueue();

myQueue.peek();
myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
myQueue.peek();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.peek();