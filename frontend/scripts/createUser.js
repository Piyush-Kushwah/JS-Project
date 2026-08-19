const registerForm = document.querySelector("#register-form");
const fullnameInput = document.querySelector("#fullname");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    console.log("Form Submitted");

    const newUser = {
        fullname: fullnameInput.value,
        email: emailInput.value.toLowerCase(),
        password: passwordInput.value,
    };

    console.log(newUser);

    try {
        await fetch("https://js-project-backend-x68z.onrender.com/users", {
            method: "POST",
            body: JSON.stringify(newUser),
            headers: {
                "Content-Type": "application/json"
            }
        });

        window.location.href = "AllUsers.html";

    } catch (error) {
        console.log(error);
        alert("Error creating user");
    }
});