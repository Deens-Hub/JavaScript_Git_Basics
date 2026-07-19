
let numbers=[1,2,3,4,5,6,7,8,9,10]

//map method is used to create a new array from an existing array by applying a function to each element of the original array. It does not modify the original array, but instead returns a new array with the results of the function applied to each element.
//map can be used to replace foreach method when we want to create a new array from an existing array. It is more efficient than using forEach method because it does not require creating a new array and pushing elements into it. Instead, it creates a new array with the results of the function applied to each element of the original array.
let doubledNumbers = numbers.map(item=>{
    document.getElementById('result').innerHTML += `<h1>${item*2}</h1>`
})


    