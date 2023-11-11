var arr =[

    {id :1 ,name : "yash"},
    { id :2, name:"yashraj"},
    { id :3, name:"Geeta" }
];

const idMatiching=(e)=>{
    var b= e.id==8;
    return b
}


var a= arr.find(idMatiching);

if(a==undefined)
{
    console.log("item not found");
}
else console.log(`a founded `);



// find function using arrow function


var result = arr.find( (e)=>{
     let namel= e.name=="naina";
  
     return namel;
} )

if(result==undefined)
console.log("result not found ");
else console.log("result is founded ")





var result2 = arr.find( (e)=>{
 let name2= e.name =="Geeta";
    return name2;
} )

if(result2==undefined)
console.log("result not found ");
else console.log("result is founded ", result2.name)
