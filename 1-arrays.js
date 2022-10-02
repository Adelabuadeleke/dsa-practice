const strings = ['a', 'b', 'c', 'd'];

// push
strings.push('e'); //O(1)

// pop
strings.pop(); //O(1)

// unshift
strings.unshift('x') //O(n)

// splice
strings.splice(2,0,'aliens') //0(n)

console.log(strings);

// Static(Fixed Size) & Dynamic Arrays*

// Optional Classes in JS

// reference type
var object1 = { value: 10 }
var object2 = object1
var object3 = { value: 10 }

// context vs scope
const object4 = {
 a: function() {
  console.log(this);
 }
}

// instantiation
class Player {
 constructor(name, type) {
  console.log('player',this)
  this.name = name;
  this.type = type;
 }

 introduce() {
  console.log(`Hi i am ${this.name}, i'm a ${this.type}`)
 }
}

class Wizard extends Player{
 constructor(name, type) {
  super(name, type)
  console.log('wizard', this)

 }

 play() {
  console.log(`WEEEEEEEE i'm  a ${this.type}`);
 }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');
wizard1.play()
wizard1.introduce()