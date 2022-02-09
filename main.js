'use strict';

// HTML에서 element 끌어오기
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

// userName check
function logInBtnClicked(){
    const userName = loginInput.value;
    if(userName=== ""){
        alert("Please write your name");
    }
    else if(userName.length > 15){
        alert("your name is too long");
    }
}

loginButton.addEventListener("click",logInBtnClicked);