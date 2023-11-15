let name= "yashraj";
let course="Btech";

var obj1={
    name,
    course,
};

console.log(obj1);
//////////////////////////////////////


//////////////////////////////////////
let n= "name";

let obj2=
{
    [n]:"Sohail",
    course:"bsc"

};

console.log(obj2);
console.log(obj2.name);



let n1= "name";

let obj4=
{
    [n+" of student"]:"Sohail",
    course:"bsc"

};

console.log(obj4);


/////////////////////////////////////////////////////////


let n2= "name";

let obj5=
{
    [n+"ofstudent"]:"Sohail", // of student me gap krne pr error aa rhai hai
    course:"bsc",
    
    details: function()
    {
   return `${this.nameofstudent} is ${this.course}`;
    }
};

console.log(obj5);
console.log(obj5.details());
///////////////////////////////////////
///////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////////
/*

 new way to create funciton inside object
*/


let n3= "name";

let obj6=
{
    [n+"ofstudent"]:"yash from obj6", // of student me gap krne pr error aa rhai hai
    course:"bsc",
    
    details()
    {
        return `${this.nameofstudent} is ${this.course}`;
    }
};

console.log(obj6.details())

console.log("new way to call funtion ",obj6[`details`]())



let fname="riktika";
let lname="pal";
let courses ="BSC";

function student1 ( fname, lname, courses)
{
    
    let fullname=fname+" "+lname;
    return {fullname , courses};
}

console.log(student1(fname, lname, courses));
let fun2 =student1 ( fname, lname, courses);
console.log(fun2.fullname);
console.log(fun2.courses);