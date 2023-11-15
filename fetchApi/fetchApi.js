// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((response)=>response.json())
// .then((data)=>console.log(data))
// .catch((error)=>console.log(error+"can not found data"));


// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((response)=>response.json())
// .then((data)=>{
//     for(var x in data) 
//     {
//         console.log(data[x].title, data[x].userId );
//     }
// })
// .catch((error)=>console.log(error+"can not found data"));
fetch("./student_data.json")
.then((response) => response.json())
  .then((data) => {
    console.log(data);

    for (var x in data) {
      var a = `${data[x].name} - ${data[x].age} - ${data[x].gender}`;
      console.log(a); // Assuming you want to log each student's information
    }
  })
  .catch((error) => console.log(error + " cannot find data"));
