//Iniitialise the id's:
let submit = document.getElementById("submitBtn");
let userName = document.getElementById("userNameInput");
let email = document.getElementById("emailInput");
let password = document.getElementById("password");
let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let number1Validation = document.getElementById("number1Validation");
let number2Validation = document.getElementById("number2Validation");
let add = document.getElementById("add");
let sub = document.getElementById("sub");
let divide = document.getElementById("divide");
let multiply = document.getElementById("multiply");
let p = document.getElementById("result");



//Display username:
document.getElementById("hTag").innerHTML = localStorage.getItem("userName");

// Add event:
add.addEventListener("click", function () {
    if (number1.value.length == 0 || number2.value.length == 0) {
        alert("Make sure to fill in both the input fields!");
    }
    else {
        let inputNum1 = parseInt(number1.value);
        let inputNum2 = parseInt(number2.value);
        p.innerHTML = "Answer: " + ((inputNum1) + (inputNum2));
    }
});

//Add event using JQuery:
// $("add").click(function () {
//     if (number1.value.length == 0 || number2.value.length == 0) {
//         alert("Make sure to fill in both the input fields!");
//     }
//     else {
//         let inputNum1 = parseInt(number1.value);
//         let inputNum2 = parseInt(number2.value);
//         p.innerHTML = "Answer: " + ((inputNum1) + (inputNum2));
//     }
// });
//Add event using JQuery:


//Sub Event:
sub.addEventListener("click", function () {
    if (number1.value.length == 0 || number2.value.length == 0) {
        alert("Make sure to fill in both the input fields!");
    }
    else {
        let inputNum1 = number1.value;
        let inputNum2 = number2.value;
        p.innerHTML = "Answer: " + ((inputNum1) - (inputNum2));
    }
});

//Sub event using JQuery:
// $("sub").click(function () {
//     if (number1.value.length == 0 || number2.value.length == 0) {
//         alert("Make sure to fill in both the input fields!");
//     }
//     else {
//         let inputNum1 = number1.value;
//         let inputNum2 = number2.value;
//         p.innerHTML = "Answer: " + ((inputNum1) - (inputNum2));
//     }
// });
//Sub event using JQuery:



//Divide Event:
divide.addEventListener("click", function () {
    if (number1.value.length == 0 || number2.value.length == 0) {
        alert("Make sure to fill in both the input fields!");
    }
    else {
        let inputNum1 = number1.value;
        let inputNum2 = number2.value;
        p.innerHTML = "Answer: " + ((inputNum1) / (inputNum2));
    }
    });

    //Divide event using JQuery:
    // $("divide").click(function () {
    //     if (number1.value.length == 0 || number2.value.length == 0) {
    //         alert("Make sure to fill in both the input fields!");
    //     }
    //     else {
    //         let inputNum1 = number1.value;
    //         let inputNum2 = number2.value;
    //         p.innerHTML = "Answer: " + ((inputNum1) / (inputNum2));
    //     }
    // });
    //Divide event using JQuery:



    //Multiply Event:
    multiply.addEventListener("click", function () {
        if (number1.value.length == 0 || number2.value.length == 0) {
            alert("Make sure to fill in both the input fields!");
        }
        else {
            let inputNum1 = number1.value;
            let inputNum2 = number2.value;
            p.innerHTML = "Answer: " + ((inputNum1) * (inputNum2));
        }
});

//Multiply event using JQuery:
// $("multiply").click(function () {
//     if (number1.value.length == 0 || number2.value.length == 0) {
//         alert("Make sure to fill in both the input fields!");
//     }
//     else {
//         let inputNum1 = number1.value;
//         let inputNum2 = number2.value;
//         p.innerHTML = "Answer: " + ((inputNum1) * (inputNum2));
//     }
// });
//Multiply event using JQuery:


//Validations for buttons:

// add.addEventListener("input", function (e) {
//     let regexPattern = /^([a-zA-Z]{1,5})$/;
//     let addInput = e.target.value;
//     if (regexPattern.test(addInput) == true) {
//         number1Validation.style.display = "none";
//         // number2Validation.style.display = "none";
//     }
//     else {
//         number1Validation.style.display = "block";
//         // number2Validation.style.display = "block";
//     }
// });

















