


// slice didn't change the main array
let newArr1 = [1,2,3,4,5];
let x = newArr1.slice(1,3)
// console.log(x, newArr1);


// Splice chnage the main array
let newArr2 = [1,2,3,4,5];
let y = newArr2.splice(1,3)
// console.log(y, newArr2);





// Child Array ko hata kr ek level ma store kr deta ha
let flat1 = [1,2,[3,7],5,[6,[8]]];
console.log(flat1.flat(Infinity));





console.log(Array.isArray("I am Array"));
console.log(Array.from("1h"));
num = 100, num2 = 200, num3 = 300;
console.log(Array.of(num, num2, num3));
