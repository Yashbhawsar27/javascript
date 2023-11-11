let arr = [ 2,3,4,53,2,2,4,677,32,43,424,2455434];

let  [...rest] = arr;

console.log(arr);



///////////

console.log(" -----------------------------");

let { a, b}= { a:1, b:5}
console.log(a,b);


console.log("===================================");


let arr1 = [2,5,34,3];
let obj1= { ...arr1};
console.log(obj1);  // object me badal de ga


const sum=(v1,v2,v3)=>
{

    return v1+v2+v3;
}
console.log(sum(...arr1))

console.log({...obj1})

for ( let key in obj1)
{

    console.log(key , obj1[key])
}