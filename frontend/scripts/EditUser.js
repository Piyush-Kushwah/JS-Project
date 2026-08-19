const editform = document.querySelector("#edit-form");
const fullnameInput = document.querySelector("#fullname");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

let params = new URLSearchParams(window.location.search);
let id = params.get("id");

async function getEditUser() {
    try {
        let resp = await fetch(
            `https://js-project-backend-x68z.onrender.com/users/${id}`
        );

        let data = await resp.json();

        console.log(data);

        fullnameInput.value = data.fullname;
        emailInput.value = data.email;
        passwordInput.value = data.password;

    } catch (error) {
        console.log(error);
    }
}

getEditUser();

editform.addEventListener("submit", async (e) => {
    e.preventDefault();

    let updateData = {
        fullname: fullnameInput.value,
        email: emailInput.value.toLowerCase(),
        password: passwordInput.value,
    };

    try {
        await fetch(
            `https://js-project-backend-x68z.onrender.com/users/${id}`,
            {
                method: "PUT",
                body: JSON.stringify(updateData),
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );

        window.location.href = "AllUsers.html";

    } catch (error) {
        console.log(error);
        alert("Error updating user");
    }
});