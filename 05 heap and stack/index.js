// primitive (stack)   :   reference (heap)





let a = "user123";
let b = a;
b = "client123";

// a => user123
// b => client123




let x = { name: "user123" };
let y = x;
y.name = "client123";

// x.name =>  client123;
// y.name =>  client123;