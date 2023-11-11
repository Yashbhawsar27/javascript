var a=0
const Anim=()=> 
{
  console.log("Hello")
a=a+10;

if(a==200)
{
  clearInterval(id);
}
else
{

    var target= document.getElementById("test");
    target.style.marginLeft= a + 'px';
 }
}
var id=setInterval(Anim,90);
