// Constructor Function




// function BankAccount(name,balance=0){
//     this.name = name;
//     this.balance = balance;

//     this.deposit = (amount) => {
//         this.balance += amount;
//         return `${this.name} your balance is sucessfully deposit.`;
//     }
//     this.widthraw = (amount) => {
//         this.balance -= amount;
//         return `${this.name} your Just widthraw ${amount}.`;
//     }
// };



// let accounts = [];


// // Create Account
// let initName = document.getElementById("initName");
// let initBalance = document.getElementById("initBalance");
// let createBtn = document.getElementById("createBtn");

// // Deposit
// let depositName = document.getElementById("depositName");
// let depositBalance = document.getElementById("depositBalance");
// let depositBtn = document.getElementById("depositBtn");

// // Widthraw
// let widthrawName = document.getElementById("widthrawName");
// let widthrawBalance = document.getElementById("widthrawBalance");
// let widthrawBtn = document.getElementById("widthrawBtn");




// createBtn.addEventListener("click",()=>{
//     const createAccount = new BankAccount(initName.value, +initBalance.value);
//     accounts.push(createAccount);
//     console.log(accounts,"Account Has Been Created and Added to the database");
// });



// depositBtn.addEventListener("click",()=>{
//     for(let key in accounts){
//         if(accounts[key].name == depositName.value){
//             accounts[key].balance += +depositBalance.value;
//             console.log(accounts, `You just deposit ${+depositBalance.value} money`);
//         }
//     }
// });


// widthrawBtn.addEventListener("click",()=>{
//     for(let key in accounts){
//         if(accounts[key].name == widthrawName.value){
//             accounts[key].balance -= +widthrawBalance.value;
//             console.log(accounts, `You widthraw ${+depositBalance.value} money`);
//         }
//     }
// });




















// encaplusation mean warping the data and function in a component

class Student{ // class
    #firstName; #lastName;  // private 
    constructor(firstName,lastName,age,id,rollNo){
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.age = age;
        this.id = id;
        this.rollNo = rollNo;
    } // constructor

    fullName(){return `${this.#firstName} ${this.#lastName}`} // method


    static Info(){  // we use this can Student constructor
        return "This Object Is For Students and can inherit the teachers objects";
    }

}


let user1 = new Student("Daksh","Kishore",17,Date.now(),1);





class Teachers extends Student{ // inherit by extends
    constructor(firstName,lastName,age,id,rollNo,handelCls){
        super(firstName,lastName,age,id,rollNo); // get constructor from where i inherit using super method
        this.handelCls = handelCls;
    }

    static Info(){  // in Student and Teacher voth methos are same but usecase is different is called polymorphism
        return "This Static is Teacher Fun";
    }

}



let teacher1 = new Teachers("sara","janzaib",25,Date.now(),null,"class 8");  // creating constructor object

// when i creat a obj then automatically call constructor 