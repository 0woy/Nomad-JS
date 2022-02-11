'use strict';

// HTML에서 element 끌어오기
const loginForm = document.querySelector("#login-form")
const loginInput = loginForm.querySelector("input")
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME="hidden";

const USERNAME_KEY="username";

function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;

    // login 후 form -> hidden
    loginForm.classList.add(HIDDEN_CLASSNAME);

    //set username
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
 
    
} 

function paintGreetings(name){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText=`Hello ${name}`;
}

const saveUsername = localStorage.getItem(USERNAME_KEY);
console.log(saveUsername);

if(saveUsername === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
    
}
else{
    // show the greetings
    paintGreetings(saveUsername);
}