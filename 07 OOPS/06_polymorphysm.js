

// Polymorphysm = many forms
// both method are same but both usecase is different



class Animal{
    constructor(name){
        this.name = name;
    }
    eat(){  // same
        return this.name + ": eat food";
    }
}



class tiger extends Animal{
    constructor(name,subName){
        super(name);
        this.subName = subName;
    }
    eat(){  // same
        return this.subName + ": eat deer and " + super.eat() ;
    }
}



let tig = new tiger("shahzaib","baldeep");

console.log(tig.eat());
