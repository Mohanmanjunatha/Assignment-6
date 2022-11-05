let submit = document.getElementById("submitBtn");
let userName = document.getElementById("userNameInput");
let email = document.getElementById("emailInput");
let password = document.getElementById("password");
let initial = location.href = "index.html";

//Submit using Javasript:
submit.addEventListener("click", function () {
    if (userName.value.length == 0 || email.value.length == 0 || password.value.length == 0) {
        alert("Fill in all the details");
        initial;
    }
    else {
        let value = "Hello " + document.getElementById("userNameInput").value + ",";
        localStorage.setItem("userName", value);
    }
});
//Submit using Javasript:


//Submit Button using JQuery:
// $("submitBtn").click(function () {
//     if (userName.value.length == 0 || email.value.length == 0 || password.value.length == 0) {
//         alert("Fill in all the details");
//         initial;
//     }
//     else {
//         let value = "Hello " + document.getElementById("userNameInput").value + ",";
//         localStorage.setItem("userName", value);
//     }
// });
//Submit Button using JQuery:


//Validation:

let userNameValidation = document.getElementById("userNameValidation");
userName.addEventListener("input", function (e) {
    let regexPattern = /^([a-zA-Z]{1,11})$/;
    let userNameInput = e.target.value;
    if (regexPattern.test(userNameInput) == true) {
        userNameValidation.style.display = "none";
    }
    else {
        userNameValidation.style.display = "block";
    }
});

let emailValidation = document.getElementById("emailValidation");
email.addEventListener("input", function (e) {
    let regexPattern = /^[\w.+\-]+@northeastern\.edu$/;
    let inputEmail = e.target.value;
    if (regexPattern.test(inputEmail) == true) {
        emailValidation.style.display = "none";
    }
    else {
        emailValidation.style.display = "block";
    }
});

let passwordValidation = document.getElementById("passwordValidation");
password.addEventListener("input", function (e) {
    let regexPattern = /^([A-Za-z0-9_-]{1,15})$/;
    let passwordInput = e.target.value;
    if (regexPattern.test(passwordInput) == true) {
        passwordValidation.style.display = "none";
    }
    else {
        passwordValidation.style.display = "block";
    }
});





