// Global Scope
let x = "hello";
console.log(x);



if(true){
    // local scope
    let x = "hello";
    console.log(x);
}













// Types of Fun Decration
function one(){
    return "Hello World";
}
const two = function (){
    return "Hello World"
}
const three = () => {
    return "Hello World"
}
const four =  () => ("Hello World");







// Add the value
const addFun = (num1, num2, ...args) => {
    let add = 0;
    if(!args.length == 0){
        args.forEach(e => {
            add += e;
        })
        return add;
    }
    
    return num1 + num2;
}
console.log(addFun(5,55));
