// High Order Function and Callbacks






// ek function ka under ek or function as a argument pass kiatho ussa high order function kheta ha
function add(a,b, cb){
    let res = a + b;
    cb(res); // jis function ko call kia jata ha high order function ka under ussa callback kheta ha
}


add(5,5, function(val){
    console.log(val);
});