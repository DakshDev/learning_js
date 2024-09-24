/*
=============== Truthy Value =================

true
{}
[]
42
"0"
"false"
new Date()
-42
12n
3.14
-3.14
Infinity
-Infinity

=============== Falsy Value ==================

0
""
false
NaN
null
undefined
*/




let num = 200782523;
let convertNumToStr = String(num);

let str = "123abc";
let convertStrToNum = Number(str);

let num2 = 0;
let convertNumtoBoolaen = Boolean(num2)


console.log(convertNumtoBoolaen);



// for boolean
// 1    => true;
// -5   => true;
// -0.4 => true;
// 0    => false;