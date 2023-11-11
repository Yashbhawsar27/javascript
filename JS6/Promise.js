let complete = false;

let prom = new Promise (function (resolve, reject) {
   
     
   console.log("Fetching data, please wait.");
   setTimeout(()=>{

    
    if (complete) {
        resolve("I'm successful.");
   } else {
       reject("I'm failed");
   }
   },1000);
});

prom.then((message) => {
    console.log("Resolved:", message);
}).catch((message) => {
    console.log("Rejected:", message);
});