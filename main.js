'use strict';

// HTML에서 element 끌어오기
const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");

// userName check
function onLoginSubmit(event){
    // preventDefault: evnet의 기본행동 방지
    event.preventDefault();
    console.log(loginInput.value);
}

// submit event -> enter, button
loginForm.addEventListener("submit", onLoginSubmit);

