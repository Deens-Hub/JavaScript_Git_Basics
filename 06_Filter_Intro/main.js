
let fruits = ["apple","banana","grapes","mango","orange"];

// let filteredfruits = fruits.filter(item=>{return item.includes("r")});

// filteredfruits.forEach(item=>{
//     document.getElementById("result").innerHTML += `<h1>${item}</h1>`
// });

document.getElementById('search').addEventListener('keyup',()=>{
    document.getElementById('result').innerHTML = '';

    let search = document.getElementById('search').value;

    let filteredfruits = fruits.filter(item=>{return item.includes(search)});
    

    filteredfruits.forEach(item=>{
        document.getElementById('result').innerHTML += `<h1>${item}</h1>`
    });
}
);