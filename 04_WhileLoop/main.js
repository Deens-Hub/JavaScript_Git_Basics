
document.getElementById('startButton').addEventListener("click", function() {

    //Clear the result div before starting the loop
    document.getElementById('result').innerHTML = "";
    
    let totallap = parseInt(document.getElementById('numberInput').value);
    let currentlap = 1; 

    //While loop
    // = if we use only one equal sign it will assign the value to the variable and remove when the value is changed
    //+= append the lap number to the result div until the currentlap is less than or equal to totallap

    while(currentlap <= totallap)
    {
        document.getElementById('result').innerHTML += `<h1>Lap ${currentlap} completed </h1>`;
        currentlap++;
    }  

    console.log("You won");
}) 