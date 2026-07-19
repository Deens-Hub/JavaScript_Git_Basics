 
 //Diffferent ways to define a function in JavaScript
 //1.function definition
//  function changeName() {
//             document.getElementById("paragraph1").innerHTML = "<b>Deenisha Harish Hadeera</b>"
//         }

//2.function expression
        // let changeName = function() {
        //     document.getElementById("paragraph1").innerHTML = "<b>Deenisha Harish Hadeera</b>"
        // }

        //3.arrow function
        let changeName = () => {
            document.getElementById("paragraph1").innerHTML = "<b>Deenisha Harish Hadeera</b>"
        }



        // document.getElementById("ChangeBtn").onclick = function() {
        //     changeName();
        // };

        document.getElementById("ChangeBtn").addEventListener("click", function() {
            changeName();
        })   