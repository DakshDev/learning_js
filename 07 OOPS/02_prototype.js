




function BankAccount(name,balance=0){
    this.name = name;
    this.balance = balance;
    this.accountId = Date.now();
};



BankAccount.prototype.deposit = function(amount){
    this.balance += amount;
    return `${this.name} your balance is sucessfully deposit.`;
};

BankAccount.prototype.widthraw = function(amount){
    this.balance -= amount;
    return `${this.name} your Just widthraw ${amount}.`;
};




let user1 = new BankAccount("Daksh",500);


console.log(user1.balance);
