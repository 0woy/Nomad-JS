'use strict';

// HTML에서 element 끌어오기
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

// userName check
function logInBtnClicked(){
    const userName = loginInput.value;
    console.log(userName);
}

loginButton.addEventListener("click",logInBtnClicked);