let date = new Date();

// console.log(date.toJSON());
// console.log(date.toDateString());
// console.log(date.toISOString());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleString());
// console.log(date.toString());



date.getDate();
date.getDay();
date.getFullYear();
date.getHours();
date.getMinutes();
date.getSeconds();
date.getMilliseconds();
date.getTime();




// Formats

let format1 = new Date("2007-08-25");
// console.log(format1.toDateString());

let format2 = new Date("08-25-2007");
// console.log(format2.toDateString());


let format3 = new Date();
let x = format3.toLocaleString("default",{
    weekday: "long",
    year: "2-digit",
    month: "2-digit",
    day: "2-digit"
})

console.log(x)