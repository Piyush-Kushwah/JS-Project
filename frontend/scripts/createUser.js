const registerForm = document.querySelector("#register-form");
const fullnameInput = document.querySelector("#fullname");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

registerForm.addEventListener("submit", async (e)=>{
    e.preventDefault(); // --> stops browser's default behaviour
    console.log("Form Submitted");  

    const newUser = {
        fullname: fullnameInput.value,
        email : emailInput.value.toLowerCase(),
        password : passwordInput.value,
    };

    console.log(newUser);

    //! Send NewUser To Database
    await fetch("https://js-project-2-mite.onrender.com/users" , {
        method : "POST",
        body : JSON.stringify(newUser),
        headers : {
            "content-type" : "application/json"
        }
    })

    //! Navigate To All User Page
    window.location.href = "AllUsers.html"
    
});

