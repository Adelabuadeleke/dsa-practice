// const strings = ['a', 'b', 'c', 'd'];

// // push
// strings.push('e'); //O(1)

// // pop
// strings.pop(); //O(1)

// // unshift
// strings.unshift('x') //O(n)

// // splice
// strings.splice(2,0,'aliens') //0(n)

// // console.log(strings);

// // Static(Fixed Size) & Dynamic Arrays*

// // Optional Classes in JS

// // reference type
// var object1 = { value: 10 }
// var object2 = object1
// var object3 = { value: 10 }

// // context vs scope
// const object4 = {
//  a: function() {
//   console.log(this);
//  }
// }

// // instantiation
// class Player {
//  constructor(name, type) {
//   // console.log('player',this)
//   this.name = name;
//   this.type = type;
//  }

//  introduce() {
//   console.log(`Hi i am ${this.name}, i'm a ${this.type}`)
//  }
// }

// class Wizard extends Player{
//  constructor(name, type) {
//   super(name, type)
//   // console.log('wizard', this)

//  }

//  play() {
//   console.log(`WEEEEEEEE i'm  a ${this.type}`);
//  }
// }

// const wizard1 = new Wizard('Shelly', 'Healer');
// const wizard2 = new Wizard('Shawn', 'Dark Magic');
// // wizard1.play()
// // wizard1.introduce()

// // implementing an array...
// class MyArray{
//  constructor() {
//   this.length = 0;
//   this.data = {}
//  }

//  get(index) {
//   return this.data[index]
//  }

//  push(item) {
//   this.data[this.length] = item;
//   this.length++;
//   return this.length;
//  }

//  pop() {
//   const lastitem = this.data[this.length - 1];
//   delete this.data[this.length-1];
//   this.length--;
//   return lastitem;
//  }

//  delete(index) {
//   const item = this.data[index];
//   this.shiftitems(index)
//  }

//  shiftitems(index) {
//   for(let i = index; i < this.length - 1; i++ ) {
//    this.data[i] = this.data[i + 1];
//   }
//   delete this.data[this.length - 1] ;
//   this.length--;
//  }
// }

// const newArray = new MyArray();
// newArray.push('hi');
// newArray.push('you');
// newArray.push('!');
// newArray.delete(0)
// newArray.push('are');
// newArray.push('nice');
// // newArray.pop();
// // newArray.pop();
// newArray.delete(1)
// console.log(newArray);

// // Reverse a string
// // --> Create a function  that reverses a string:
// // -->'Hi My name is Kamal:
// //  --> Reverse 



// function reverse(str) {
//  let revArr = []
//  let revStr = ""

//  if (!str || str.length < 2 || typeof str !== 'string'){
//   return 'hmm that is not good'
//  }
//  // put the letters in a stack
//  for (let i = 0; i < str.length; i++) {
//   // console.log(str.length)
//   revArr.push(str[i]);
//  }
//  // console.log(revArr)

//  // put letters into a var
//   for(let i = 0; i < str.length; i++) {
//    revStr += revArr.pop()
//   }
 
//  console.log(revStr)

// }

// function reverse2(str) {
//  return console.log(str.split('').reverse().join(''))
// }

// const reverse3 = str => [...str].reverse.join('');

// let string = 'Hi My name is Kamal'
// // reverse2(string)

function mergeSortedArrays(array1, array2) {
 const mergedArray = [];
 let array1item = array1[0];
 let array2item = array2[0];
 let i = 1;
 let j = 1;

 // check input
 if (array1.length === 0) {
  return array2;
 }

 if(array2.length === 0) {
  return array2;
 }

 while(array1item || array2item) {
  console.log(array1item, array2item)
  if(!array2 || array1item < array2item) {
   mergedArray.push(array1item)
   array1item = array1[i];
   i++;
  } else {
   mergedArray.push(array2item)
   array2item = array2[j];
   j++;
  }
 }

 return console.log(mergedArray);


 // return console.log(mergeSortedArrays)
}

mergeSortedArrays([0, 3, 4], [4, 6, 30])
