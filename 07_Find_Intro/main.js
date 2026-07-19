
let emails = ["test@gmail.com","test1@gmail.com","test2@gmail.com","test3@gmail.com","test4@gmail.com"]

document.getElementById('chkbtn').addEventListener('click',()=>{
    let currentEmail = document.getElementById('input').value
    let email=emails.find(item=>{return currentEmail===item})

    if(email===undefined){
        document.getElementById('result').innerHTML = "Email not found"
    } else {
        document.getElementById('result').innerHTML = "Email found"
    }
})