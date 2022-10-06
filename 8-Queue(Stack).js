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
   return cosole.log(this.last[0]);
  }
  return this.first[this.first.length - 1];
 }
}