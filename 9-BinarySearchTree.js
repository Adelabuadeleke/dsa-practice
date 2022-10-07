class Node {
 constructor(value){
  this.value = value;
  this.right = null;
  this.left = null;
 }
}

class BinarySearchTree {
 constructor(){
  this.root = null;
 }

 insert(value) {
  const newNode = new Node(value)
  
  if(!this.root) {
   this.root = newNode;
  } else {
   let currentNode = this.root;
   while(true){
    if(value < currentNode.value){
     if(!currentNode.left){
      currentNode.left = newNode;
      return console.log(this)
     }
     currentNode = currentNode.left
    } else {
     if(!currentNode.right) {
      currentNode.right = newNode;
      return console.log(this)
     }
     currentNode = currentNode.right
    }
   }
   // currentNode.next = value
  }
  
  return console.log(this);
 }

 lookup(value) {

 }

 remove(value){

 }
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
JSON.stringify(traverse(tree.root))

function traverse(node) {
 const tree = {value: node.value};
 tree.left = node.left === null ? null :
 traverse(node.left);
 tree.right = node.right === null ? null :
 traverse(node.right);
 return console.log(tree);
}