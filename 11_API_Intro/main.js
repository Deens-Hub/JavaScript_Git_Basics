let postsElement = document.querySelector('#posts');

// fetch is a built-in JavaScript function that allows us to make HTTP requests to a server and retrieve data. It returns a promise that resolves with the response from the server. In this case, we are using fetch to make a GET request to the JSONPlaceholder API and retrieve a list of posts. We then use the .then() method to handle the response and convert it to JSON format. Finally, we use another .then() method to iterate over the data and display each post in the postsElement. If there is an error, we catch it and log it to the console.
fetch('https://jsonplaceholder.typicode.com/posts')
// two .then() methods are used to handle the response from the fetch request. The first .then() method takes the response and converts it to JSON format using the .json() method. The second .then() method takes the JSON data and iterates over it using the forEach() method, creating a new div element for each post and appending it to the postsElement. If there is an error, we catch it and log it to the console.
    .then((response) => {return response.json()})
    .then(data => { data.forEach(post => {
        postsElement.innerHTML += `<div>
        <h2>${post.id} - ${post.title}</h2>
        <p>${post.body}</p>
        </div>`;
    }
    )})
    .catch(error => {console.log(error)});