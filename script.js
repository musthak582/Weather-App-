//api=1879c61145cb075da82e6eff59cb6e4d

var inputval=document.querySelector("#cityinput");
var btn=document.querySelector("#add");
var city=document.querySelector("#cityoutput");
var description=document.querySelector("#description");
var temp=document.querySelector("#temp");
var wind=document.querySelector("#wind");
var wrongvalue=document.getElementById("wrong-value");

apik="1879c61145cb075da82e6eff59cb6e4d"

function convertion(val){
    return (val-273).toFixed(2)
}
// collect all informations using helpfull fetch methods

btn.addEventListener("click",function(){

    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
    .then(res=>res.json())
    .then(data=>{
        var nameval=data['name']
        var discrip=data['weather']['0']['description']
        var tempature=data['main']['temp']
        var wndspd=data['wind']['speed']
        
        city.innerHTML=`Weather of <span>${nameval}<span/>`
        temp.innerHTML=`Temperature: <span>${convertion(tempature)} C<span/>`
        description.innerHTML=`Sky Conditions:<span>${discrip}<span/>`
        wind.innerHTML=`Wind Speed:<span>${wndspd}km/h<span/>`
    })
    //.catch(err=> alert('You enterd wrong value'))
    .catch((err)=>{
        wrongvalue.innerHTML="You enterd wrong value";

    })


})