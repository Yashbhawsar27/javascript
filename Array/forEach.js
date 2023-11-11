var arr=[7,9,12];

arr.forEach(doubleValue);  //work on array and return null

function doubleValue(element , index , array)
{
    array[index]=element*2;
}




console.log(arr);
var arr2=[3,3,2,3,2,0,233];

    arr2.forEach((element,index,array)=>array[index]=element*10)
console.log(arr2)