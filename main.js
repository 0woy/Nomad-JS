'use strict';

// HTML에서 element 끌어오기
const loginForm = document.querySelector("#login-form")
const loginInput = loginForm.querySelector("input")
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME="hidden";

function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;

    // login 후 form -> hidden
    loginForm.classList.add(HIDDEN_CLASSNAME);

    //set username
    localStorage.setItem("username", username);

    greeting.innerText=`Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    
} 

// submit event -> enter, button
loginForm.addEventListener("submit", onLoginSubmit);

// handleLinkClick({information about the event that just happened})