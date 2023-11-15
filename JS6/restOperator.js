// function sum(num1, num2)
// {
//     console.log(num1+num2);
// }

// sum(20,30);

// sum(20,30,40);

// sum(20,30,40,50);

// function sum()
// {
//     let sum=0;

//     for(let i=0;i<arguments.length;i++)
//     {
//         sum+=arguments[i];
//     }
//   console.log(sum)
// }

// // ye to chal jaaye ga pr  yadi string hua to ni chale ga

// function sum1(num1, num2)
// {
//     console.log(num1+num2);
// }

// sum(20,30);

// sum(20,30,40);

// sum("yash","rohit",20,30,40,50); // ye sahi output ni dega string bana dega

// sum(20,3000,"yash","rohit"); // ye sahi de ga

// sum("yash","rohit",20,30,40,50); // ye sahi output ni dega string bana dega

//---------------------------------------------------------------------------------
// yaddi mujhe string ko chod kr baaki ka sum krna ho ga to

// sum("yash","rohit",20,30,40,50); // ye sahi output ni dega string bana dega

add("first", "BSC", 33, 11, 22, 2, 1144, 23);


//rest operator ko last ke alwa kahi or ni daal sakte error aati hai 
function add(name, course,...args) {
  console.log(arguments); // objects me value aaaye gi

  let sum = 0;

  for (let i in args) {
    sum += args[i];
  }
  console.log(`${name} , ${course}`)
}
// rest opertor ka use array banane ke liye hota hai 

