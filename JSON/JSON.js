// java script object notation is a 
// standard data format that is used to communicate
// over internet ( specially in API calling )

//  it is globally accepted data transfer
// formate


// serialization :- it is a process by which we can convert our programming 
// language object into bytes or Strings 

// SO that it can transfer over internet and untestable to other 
// programming language


// Deserialization : conversion of bytes or string into our programming 
// language object is called Deserialization
 

// javascript object 

// object ---------------> serialization 

//JSON.stringify(Object) it has used to send to json 




//-----------------------------------------------
// json deserialization 
//--------------------------------------------------
// json formate string 

var x = 3295;
var y=JSON.stringify(x);

console.log(typeof(x),typeof(y)) // string

a=true;
var arr=[2,3,4,33,44]

var u=JSON.stringify(a);
 var i = JSON.stringify(arr)
console.log(typeof(u))
console.log(typeof(i)) 

var z=JSON.parse(y);
console.log(typeof(z))
var q=JSON.parse(i)
console.log(q);