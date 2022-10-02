let user = {
 age: 54,
 name: 'Kyle',
 magic:true,
 scream: function(){
  console.log('aaaaah!')
 }
}

user.age //O(1)
user.spel = 'abra kadabra'; // 0(1)
user.scream //O(1)

// O(n/k) --> collisions

const a = new Map()
const b = Set()