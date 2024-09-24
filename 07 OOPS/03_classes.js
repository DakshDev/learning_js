

class SignData{
    constructor(fname,lname,age,cell,mail){
        this.firstName = fname;
        this.lastName = lname;
        this.age = age;
        this.cell = cell;
        this.mail = mail;
    }


    fullName(){
        return this.firstName +" "+this.lastName;
    }

    submit(){
        alert(this.name +": you data is submited sucessfully");
    }

    done(name){
        this.name = name;
    }
}




let user1 = new SignData("Daksh","Kishore",17,75435426,"example@mail.com");
user1.done("Daksh");
user1.submit()
let user2 = new SignData("Krrish","Kishore",17,65324674,"example@mail.com");