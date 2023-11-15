
fetch("D:/javaScript/fetchApi/student_data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    for (var x in data) {
      var a = `${data[x].name} - ${data[x].age} - ${data[x].gender}`;
      console.log(a); // Assuming you want to log each student's information
    }
  })
  .catch((error) => console.log(error + " cannot find data"));
