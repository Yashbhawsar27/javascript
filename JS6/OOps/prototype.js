// normal methods 

class student {
    constructor()
    {
        console.log("constructor function")
    }
    hello()
    {
        console.log("hello", this.name)
    }
}

let a = new student();
a.name="yash seth";
a.hello();