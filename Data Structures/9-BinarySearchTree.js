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
  if(!this.root) {
   return console.log(false)
  }

  let currentNode = this.root;
  while(currentNode){
   if(value < currentNode.value) {
    currentNode = currentNode.left;
   } else if(value > currentNode.value) {
    currentNode = currentNode.right;
   } else if (currentNode.value = value) {
    return console.log(currentNode)
   }
  }
  return console.log(false)
 }

 remove(value){
  if(!this.root) {
   return console.log(false);
  }

  let currentNode = this.root;
  let parentNode  = null;
  while(currentNode){
   if(value < currentNode.value){
    currentNode = currentNode.left;
   } else if(value > currentNode.value){
    currentNode = currentNode.right;
   } else if(currentNode.value === value) {

    // Option 1: No right child
    if(currentNode.right === null) {
     if(parentNode === null) {
      this.root = currentNode.left;
     } else {
      if(currentNode.value < parentNode.value) {
       parentNode.left = currentNode.left;
      } else if(currentNode.value > parentNode.value) {
       parentNode.right = currentNode.left
      }
     }
     // Option 2:Right child with no left child
    } else if(currentNode.right.left === null){
     currentNode.right.left = currentNode.left;
     if(parentNode === null){
      this.root = currentNode.right;
     } else {
       if(currentNode.value < parentNode.value) {
       parentNode.left = currentNode.left;
      } else if(currentNode.value > parentNode.value) {
       parentNode.right = currentNode.right
      }
     }
     // Option 3:Right child that has left child
    } else {
     let leftmost = currentNode.right.left;
     let leftmostParent = currentNode.right;
     while(leftmost.left !== null) {
      leftmostParent = leftmost;
      leftmost = leftmost.left;
     }

     // parent's left subtree is now leftmost's right subtree
     leftmostParent.left = leftmost.right;
     leftmost.left = currentNode.left;
     leftmost.right = currentNode.right;

     if(parentNode === null) {
      this.root = leftmost;
     } else {
      if(currentNode.value < parentNode.value) {
       parentNode.left = leftmost;
      } else if(currentNode.value > parent.value) {
       parentNode.right = leftmost
      }
     }
    }
    return console.log(true)
   }
  }
 }

 breathFirstSearch() {
  let currentNode = this.root;
  let list = [];
  let queue = [];
  queue.push(currentNode);
  while(queue.length > 0) {
    currentNode = queue.shift();
    list.push(currentNode.value);
    if(currentNode.left) {
      queue.push(currentNode.left);
    }
    if(currentNode.right){
      queue.push(currentNode.right);
    }
  }
  return console.log(list);
 }

 breathFirstSearchRecursive(queue, list) {
    if(!queue.length) {
      return list
    }
    let currentNode = queue.shift();
    list.push(currentNode.value)
    if(currentNode.left) {
      queue.push(currentNode.left);
    }
    if(currentNode.right){
      queue.push(currentNode.right);
    }
    return this.breathFirstSearchRecursive(queue, list);
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
tree.lookup(9)
// tree.remove(20)
tree.breathFirstSearch()
tree.breathFirstSearchRecursive([tree.root], [])
// JSON.stringify(traverse(tree.root))

function traverse(node) {
 const tree = {value: node.value};
 tree.left = node.left === null ? null :
 traverse(node.left);
 tree.right = node.right === null ? null :
 traverse(node.right);
 return console.log(tree);
}