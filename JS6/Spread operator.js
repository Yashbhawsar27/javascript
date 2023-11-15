function Sum(name, ...args)//....args rest operator 
{
   console.log(`--------argumets object me change kr deta hai ----------------`);
   console.log(arguments);

   console.log(`hello ${name} :`)
   let sum=0;
   for(let i in args)
   {
    sum+=args[i];
   }
   console.log(sum)

}
let arr=[20,40,54,30];
//array ko as argument send krna ho tab 
// spread operator ka use hota hai 
// only calling ke time use hota hai 
Sum("rahul",...arr);

//...arr are ko spread kr ke multiple arugment me conver 
// kr deta hai 

console.log(`------------------------------`);

console.log(`------------------------------`);

console.log(`------------------------------`);

console.log(`------------------------------`);

console.log(`----------------- arry ni raha -------------`);
console.log(...arr);
console.log(`---------------------------------------------------`)

console.log(`------------than phir se array ban gya------------------`);

console.log([...arr]); // cloning ho rahi hai 

var arr2=arr;
console.log(`copy ban gayi same arr ki ===`,arr2);
arr.push(50);
console.log(arr2); // is me bhi 50  aa jaaye ga

var arr3= [...arr];
arr.push(80);
console.log(`80 push krne ke baad arr---->${arr}`)
console.log(" pr arr3 me 80 ni aaye ga",arr3);// me me ni aaye ga 80


arr4=[9,3,2,44,2,4,2234];
arr5=[56,22,44214,787,55479,9,0];
arr6=arr4.concat(arr5);
console.log(arr6,`arr4 and arr5 ko concate krne pr`);

console.log(`----------------------------`);
console.log(`--------------new way to concate-------------`);

var arr7=["nikhil",...arr5,...arr6,90];

console.log(arr7);

console.log(`----------------------------`);
console.log(`----------------------------`);
console.log(`----------------------------`);
console.log(`----------------------------`);
console.log(`----------------------------`);
console.log(`----------- object ko marge krna -----------------`);
var obj1 = {
   name: "Rahul",
   age: 20,
   city: "Delhi"
};

var obj2 = {
   name: "Pritam",
   age: 22,
   city: "Noida"
};

var obj3 = { ...obj1, ...obj2 };
console.log(obj3);
