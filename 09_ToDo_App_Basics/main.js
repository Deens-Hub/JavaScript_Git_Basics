// user can create tasks
// user can delete a task
// user can able to search for a task
// user can update a task as complete and undo

// Common array
//let tasks = [];

// get the tasks from local storage if it exists, otherwise create an empty array
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// getElementById is used to select an element by its id attribute. In this case, we are selecting the element with the id of 'result' and storing it in the resultElement variable. We can then use this variable to manipulate the DOM and display the tasks on the screen.
//let resultElement=document.getElementById('result');

// querySelector is used to select the first element that matches the specified CSS selector. In this case, we are selecting the element with the id of 'result' and storing it in the resultElement variable. We can then use this variable to manipulate the DOM and display the tasks on the screen.
let resultElement=document.querySelector('#result');

// based on the array passed to the renderTasks function, we can create a div for each task and display it on the screen. We can also add a delete button for each task that calls the deleteTask function when clicked.
function renderTasks(array){
    // reset the result element
    resultElement.innerHTML = '';

    // loop through the tasks array and create a div for each task
    // foreach can be used to loop through only an array and perform an action on each element of the array. It does not return a new array, but instead returns undefined. It is used to perform an action on each element of the array, such as displaying it on the screen or modifying it in some way.
    // event handling using attribute in html is not a good practice as it can lead to security issues such as cross-site scripting (XSS) attacks. It is better to use event listeners in JavaScript to handle events, as it allows for better separation of concerns and makes the code more maintainable and secure.
    // array.forEach((item,index)=>{resultElement.innerHTML += `<div> 
    // <h1><input type="checkbox" onchange="toggleComplete(${item.id})" ${item.isCompleted ? 'checked' : ''}> ${item.name} - ${item.isCompleted ? 'Completed' : ''}</h1>       
    // <button onclick="deleteTask(${item.id})">Delete</button>
    // </div>`})


    // document.createElement is used to create a new element in the DOM. It takes the tag name of the element as an argument and returns a reference to the newly created element. In this case, we are creating a new div element for each task in the array and appending it to the result element.  
    // div.querySelector is used to select an element within the div element that we just created. It takes a CSS selector as an argument and returns the first element that matches the selector. In this case, we are selecting the input element and the button element within the div element and adding event listeners to them to handle the change and click events respectively.
    array.forEach((item,index)=>{
        let divElement = document.createElement('div');
        divElement.innerHTML = `
            <h1>
                <input type="checkbox"  ${item.isCompleted ? 'checked' : ''}> 
                ${item.name} - ${item.isCompleted ? 'Completed' : ''}
            </h1>       
            <button>Delete</button>
        `;

        divElement.querySelector('input').addEventListener('change',()=>{
            toggleComplete(item.id);
        });

        divElement.querySelector('button').addEventListener('click',()=>{
            deleteTask(item.id);
        }); 
        resultElement.appendChild(divElement);
    });

}

// call the rendertasks here to display the tasks on the screen when the page is loaded. This will ensure that the tasks are displayed on the screen even if the user refreshes the page or closes and reopens the browser.
renderTasks(tasks);

// add event listener to the add button and get the value from the input field and push it to the tasks array and call the renderTasks function to display the tasks on the screen
document.getElementById('addBtn').addEventListener('click',()=>{
    let value=document.getElementById('taskInput').value;

    // create an object with the task name and isCompleted property and push it to the tasks array
    let obj={
        id: Date.now(),
        name:value,
        isCompleted:false
    }

    //tasks.push(value);
    // based on the object created above, we can push it to the tasks array and call the renderTasks function to display the tasks on the screen
    tasks.push(obj);
    // store the tasks array in local storage so that it can be retrieved when the page is refreshed
    localStorage.setItem('tasks',JSON.stringify(tasks));
    renderTasks(tasks);
});

// delete task function that takes the index of the task to be deleted and removes it from the tasks array and calls the renderTasks function to update the screen
// splice method is used to remove an element from an array at a specific index. It takes two arguments, the first is the index of the element to be removed and the second is the number of elements to be removed. In this case, we are removing one element at the specified index.
function deleteTask(taskId){

    // In this case, we are creating a new array of tasks that do not have the specified taskId. The filter method does not modify the original array, but instead returns a new array with the elements that pass the test.
     tasks= tasks.filter(item=>item.id !=taskId);

    // store the tasks array in local storage so that it can be retrieved when the page is refreshed
    localStorage.setItem('tasks',JSON.stringify(tasks));

    //tasks.splice(index,1);
    renderTasks(tasks);
}


document.getElementById('search').addEventListener('keyup',()=>{
    let searchValue=document.getElementById('search').value;
    // Filter tasks based on search value
    // item.name.includes(searchValue) is used to check if the task name includes the search value. It returns true if the task name includes the search value and false if it does not. The filter method creates a new array with all elements that pass the test implemented by the provided function. In this case, we are creating a new array of tasks that include the search value in their name.
    let filteredTasks = tasks.filter(item => {return item.name.includes(searchValue)});  
    // Render filtered tasks
    resultElement.innerHTML = '';

    // loop through the filtered tasks array and create a div for each task
    // filteredTasks.forEach((item,index)=>{
    //     resultElement.innerHTML += `<div> 
    //     <h1>${item}</h1>    
    //     <button onclick="deleteTask(${index})">Delete</button>
    //     </div>`});

    // based on the array of filtered tasks, we can call the renderTasks function to display the tasks on the screen
    renderTasks(filteredTasks);
});

// toggle complete function that takes the index of the task to be toggled and updates the isCompleted property of the task object in the tasks array and calls the renderTasks function to update the screen
function toggleComplete(taskId){
    //item.id == taskId is used to check if the task id matches the specified taskId. If it does, we toggle the isCompleted property of the task object and return the updated task object. If it does not match, we return the original task object. The map method creates a new array with the results of calling a provided function on every element in the calling array. In this case, we are creating a new array of tasks with the updated isCompleted property for the specified task.
    tasks=tasks.map(item=>{
        if(item.id == taskId){
            item.isCompleted = !item.isCompleted;
            return item;
        }
        else{
            return item;
        }
})
localStorage.setItem('tasks',JSON.stringify(tasks));
renderTasks(tasks);
}