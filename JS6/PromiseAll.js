// bhot aare promise  ke liye
// if all promise resolve ---- then will be run
// if any promise reject ----- catch will be
let p1 = new Promise(function (resolve, reject) {
  console.log("First Promise");
  setTimeout(() => {
    console.log("the first promise has resolved");
    resolve(10);
  }, 1 * 1000);
});

let p2 = new Promise(function (resolve, reject) {
  console.log("Second Promise");
  setTimeout(() => {
    //  console.log('the Second promise has failed ');
    //reject(20);

    console.log("the Second promise has resolved ");

    resolve(20);
  }, 2 * 1000);
});

let p3 = new Promise(function (resolve, reject) {
  console.log("Third Promise");
  setTimeout(() => {
    console.log("the Third promise has resolved");
    resolve(30);
  }, 3 * 1000);
});

var total = 0;
Promise.all([p1, p2, p3])
  .then((result) => {
    for (var i in result) {
      total += result[i];
    }
    console.log(`Results: ${result}`);
    console.log(`Total: ${total}`);
  })
  .catch((error) => {
    console.log(`Error: ${error}`);
  });
//_________________________________________________________________________________
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log("===============================================================================")
// bhot aare promise  ke liye
// if all promise resolve ---- then will be run
// if any promise reject ----- catch will be
let promiseCall = function (returnData, message) {
  return function (resolve, reject) {
    setTimeout(() => {
      console.log(`The ${message} promise has resolved`);
      resolve(returnData);
    }, returnData * 1000);
  };
};

let prom1 = new Promise(promiseCall(10, "firstProm"));

let prom2 = new Promise(promiseCall(20, "secondProm"));

let prom3 = new Promise(promiseCall(30, "thirdProm"));



let prom4 = new Promise(function(resolve,reject)
{
    reject("the 4th promise has rejected");
});
var total = 0;
Promise.all([prom1, prom2, prom3,prom4])
  .then((result) => {
    for (var i in result) {
      total += result[i];
    }
    console.log(`Results: ${result}`);
    console.log(`Total: ${total}`);
  })
  .catch((error) => {
    console.log(`Error: ${error}`);
  });
