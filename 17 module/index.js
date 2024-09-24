
async function nameFun() {
    let data = await fetch("https://randomuser.me/api/");
    let res = await data.json();

    return res;
}


let run = await nameFun();

console.log(run);
