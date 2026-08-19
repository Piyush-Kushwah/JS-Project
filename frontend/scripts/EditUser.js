const editform = document.querySelector("#edit-form");
const fullnameInput = document.querySelector("#fullname");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
let params = new URLSearchParams(window.location.search);
let id = params.get("id");

async function getEditUser(){
   
    let resp = await fetch(`https://js-project-2-mite.onrender.com/users/${id}`);
    let data = await resp.json();
    console.log(data);

    fullnameInput.value = data.fullname;
    emailInput.value = data.email;
    passwordInput.value = data.password;
}

getEditUser();

editform.addEventListener("submit", async  (e) => {
    e.preventDefault();

    let updateData = {
        fullname: fullnameInput.value,
        email: emailInput.value.toLowerCase(),
        password: passwordInput.value,
    };

    await fetch(`http://localhost:5000.users/${id}`,{
        method: "put",
        body: JSON.stringify(updateData),
        headers: {
            "content-type" : "application/json"
        },

    });
    
    window.location.href = "AllUsers.html"
})