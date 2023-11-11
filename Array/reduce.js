var arr=[22,32,76,99];

var sum =arr.reduce(callback);

// cart ki value ko sum krna ho to

function callback( previous=0, current )
{
  return previous+current;
}

/* 
Asyncrouns programming 
set time out 
setInterval 
promise 
async/await


// XMl HTTPrequest --> API calling 

*/