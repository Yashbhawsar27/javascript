//  methods 

class student {
    constructor()
    {
        console.log("constructor function")
    }
    static hello()
    {
        console.log("hello", this.name)
    }
}

let a = new student();
a.name="yash seth";
//a.hello(); ye se call krne pr error aa jaati hai


// hello(); ye se me bhi error aa rahi

student.hello();//ye say he ho ga bs call