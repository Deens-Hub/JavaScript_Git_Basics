
let fruits= ["Apple","Banana","Mango","Orange","Grapes"]


//foreach using function definition
// fruits.forEach(function(item){
//     document.getElementById('result').innerHTML += `<h1>${item}</h1>`;
// })

//foreach using arrow function
fruits.forEach((item)=>{
    document.getElementById('result').innerHTML += `<h1>${item}</h1>`;
})  
