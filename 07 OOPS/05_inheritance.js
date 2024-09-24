





// inheritance means
// aap pehle jo code likha hua hai us ka reference lekar use kar sakte hain.
// that you can use the code written earlier by referencing.
class Employ{
    constructor(firstname,lastname,id){
        this.firstname = firstname;
        this.lastname = lastname;
        this.id = id;
    }

    fullName(){
        return  `${this.firstname} ${this.lastname}`;
    }

    
}



class SubEmp extends Employ{
    constructor(firstname,lastname,id,subName){
        super(firstname,lastname,id);
        this.subName = subName;
    }

    subFullName(){
        return super.fullName();
    }

    subEmpFun(){
        return "i am running";
    }
}


let subEmp1 = new SubEmp("Daksh","Kishore",Date.now(),"TempUser");

console.log(subEmp1.subFullName());