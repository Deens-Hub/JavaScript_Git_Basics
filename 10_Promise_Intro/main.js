
// promise is a built-in JavaScript object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. A promise can be in one of three states: pending, fulfilled, or rejected. When a promise is fulfilled, it means that the asynchronous operation has completed successfully and the promise has a resulting value. When a promise is rejected, it means that the asynchronous operation has failed and the promise has a reason for the failure.
// promises are used to handle asynchronous operations in JavaScript, such as making API calls, reading files, or performing any operation that takes time to complete. They allow us to write asynchronous code in a more readable and maintainable way, avoiding callback hell and making it easier to handle errors.
// function CheckOrder(){
//     return new Promise((resolve, reject) => {
//        let orderId=document.querySelector('#order-id').value;
//             if (orderId === "12345") {
//                 resolve("Your order is ready!");
//             } else {
//                 reject("Your order is not ready yet.");
//             }
//         });
// }


// async function is a function that returns a promise. It allows us to write asynchronous code that looks synchronous, making it easier to read and understand. In this case, we are using an async function to check the order status and return a promise that resolves with a success message if the order is ready, or rejects with a failure message if the order is not ready.
// difference between a regular function and an async function is that a regular function executes synchronously and returns a value, while an async function executes asynchronously and returns a promise. In this case, we are using an async function to check the order status and return a promise that resolves with a success message if the order is ready, or rejects with a failure message if the order is not ready.
async function CheckOrder(){
    let orderId=document.querySelector('#order-id').value;
    if (orderId === "12345") {
        return "Your order is ready!";
    } else {
        throw "Your order is not ready yet.";
    }       
}

// querySelector is used to select the first element that matches the specified CSS selector. In this case, we are selecting the element with the id of 'checkBtn' and adding an event listener to it that listens for a click event. When the button is clicked, the CheckOrder function is called and returns a promise. If the promise is fulfilled, the success message is displayed in the result element. If the promise is rejected, the failure message is displayed in the result element.
// difference between querySelector and getElementById is that querySelector can select elements using any CSS selector, while getElementById can only select elements by their id attribute. In this case, we are using querySelector to select the element with the id of 'checkBtn' and adding an event listener to it that listens for a click event. When the button is clicked, the CheckOrder function is called and returns a promise. If the promise is fulfilled, the success message is displayed in the result element. If the promise is rejected, the failure message is displayed in the result element.
// document.querySelector('#checkBtn').addEventListener('click', () => {
//     CheckOrder()
//         .then((success) => {   
//             document.querySelector('#result').innerHTML = success; 
//         })
//         .catch((failure) => {
//             document.querySelector('#result').innerHTML = failure; 
//         }); 
// });


// async/await is a syntactic sugar that makes it easier to work with promises. It allows us to write asynchronous code that looks synchronous, making it easier to read and understand. In this case, we are using async/await to call the CheckOrder function and wait for the promise to be fulfilled or rejected. If the promise is fulfilled, the success message is displayed in the result element. If the promise is rejected, the failure message is displayed in the result element.  
// await can only be used inside an async function. It pauses the execution of the function until the promise is fulfilled or rejected, and then returns the resulting value or throws an error. In this case, we are using await to call the CheckOrder function and wait for the promise to be fulfilled or rejected. If the promise is fulfilled, the success message is displayed in the result element. If the promise is rejected, the failure message is displayed in the result element.
document.querySelector('#checkBtn').addEventListener('click', async () => {
    try {
        const success = await CheckOrder();
        document.querySelector('#result').innerHTML = success;
    } catch (failure) {
        document.querySelector('#result').innerHTML = failure;
    }
});     