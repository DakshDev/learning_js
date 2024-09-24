// Singleton Object
let obj = new Object()

obj.name = "Daksh";
obj.fullname = "Daksh Kishore";





let obj1 = {1: "a", 2: "b"};
let obj2 = {3: "c", 4: "d"};


let newObj1 = Object.assign({},obj1,obj2);  // Assaign
let newObj2 = {...obj1, ...obj2};           // Spread

console.log(newObj1);
console.log(newObj2);





console.log(Object.keys(obj));      // return the obj keys
console.log(Object.values(obj));    // return the obj values
console.log(Object.isFrozen(obj));  // return true if obj is freeze else false
console.log(Object.entries(obj));   // ye key or value ko ek ek array me store kar ka deta ha