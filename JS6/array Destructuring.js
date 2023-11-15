let user =["yash", 14, "Noida",["Male",5000]];

let [ name, age, city="mumbai", [gender, salary]]=user;  

// mumbai ni mile ga noida aaye ga
// mumbai ke liye last me likhna hoga 
// niche example bhi hai
console.log(name);
console.log(city);

console.log(age);
console.log(gender);
console.log(salary);


/*

new way 
*/

let personDetails = ["yash", 14, "Noida", ["Male", 5000]];

let [personName, personAge, , [personGender, personSalary], personCity = "mumbai"] = personDetails;

console.log(personName);
console.log(personCity);
console.log(personAge);
console.log(personGender);
console.log(personSalary);

