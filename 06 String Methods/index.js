/*

length                 :   Complete
includes()             :   Complete
startsWith()           :   Complete
endsWith()             :   Complete
indexOf()              :   Complete
lastIndexOf()          :   Complete
toUpperCase()          :   Complete
toLowerCase()          :   Complete
concat()               :   Complete
trim()                 :   Complete 
trimStart()            :   Complete
trimEnd()              :   Complete
join()                 :   Complete
split()                :   Complete
toString()             :   Complete
slice()                :   Complete
substring()            :   Complete
padStart()             :   Complete
padEnd()               :   Complete
search()               :   Complete
sort()                 :   Complete
reverse()              :   Complete
charAt()               :   Complete
charCodeAt()           :   Complete
fromCharCode()         :   Complete 
replace()              :   Complete
replaceAll()           :   Complete
repeat()               :   Complete
match()                :   Complete    /is/g
*/





let text = "A professional and experience developer.";

let makrArr = text.split(" ");
let indexVal = makrArr.indexOf("professional")
let selectedArr = makrArr.slice(indexVal,indexVal+1);
let strArr = selectedArr.join("").split("")
let addChar = [];
let fromChar = [];
for(let i=0; i<strArr.length; i++){
    addChar[i] = strArr[i].charCodeAt();
}
for(let i=0; i<addChar.length; i++){
    fromChar[i] = String.fromCharCode(addChar[i]);
}

console.log(addChar)
console.log(fromChar.join(""))