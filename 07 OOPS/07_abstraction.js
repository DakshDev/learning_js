




// Abstraction
// Hiding the complex details form the enduser



class Vehical{
    #name; #type;
    constructor(name,type){
        this.#name = name;
        this.#type = type;
    }

    static txt(){
        return "Can access by the base class";
    }

    info() {
        return `${this.#name} ${this.#type};`
    }
}


class bike extends Vehical{
    constructor(name,type,model){
        super(name,type);
        this.model = model;
    }
}


let bike1 = new bike("hayabusa","Bike","lC300");
console.log(bike1.info());