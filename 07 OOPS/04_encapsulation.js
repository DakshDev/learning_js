



// Encaplusation means
// warping the data and function in a component
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




let emp1 = new Employ("Daksh","Kishore",Date.now());

console.log(emp1.id);
