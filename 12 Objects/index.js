// Singleton Object
// Constructor Object
// Literal Object





// Ways of creating Object
let obj1 = Object.create({})
let obj2 = new Object({})
let obj3 = {};






let sym = Symbol("Key1")

let obj = {
    name: "Daksh",
    "full Name": "Daksh Kishore",
    age: 17,
    arr: [1,2,3,4],
    [sym]: "myKey"
}

// Ways For Executing Object
console.log(obj.name);
console.log(obj["full Name"]);
console.log(obj[sym]);
console.log(obj);





// Freeze The Object and Can't Modified it
Object.freeze(obj);

obj.name = "TuTu";
console.log(obj.name);