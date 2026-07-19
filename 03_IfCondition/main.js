let weathervalue="cloudy";

//Oprators: &&, ||, !
//loose eaqual to (==), strict equal to (===), not equal to (!=), strict not equal to (!==)
//if and else if and else statements

if(weathervalue==="raining"||weathervalue==="hot")
{
    document.getElementById("result").innerHTML="Take an umbrella";
}
else if(weathervalue==="sunny")
{
    document.getElementById("result").innerHTML="Wear sunglasses";
}
else
{
    document.getElementById("result").innerHTML="Nothing needed";
}