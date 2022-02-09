'use strict';

// HTML에서 element 끌어오기
const loginForm = document.querySelector("#login-form")
const loginInput = loginForm.querySelector("input")

const link = document.querySelector("a");

// userName check
function onLoginSubmit(event){
    // preventDefault: evnet의 기본행동 방지
    event.preventDefault();
    console.dir(loginInput.value);
} 

// submit event -> enter, button
loginForm.addEventListener("submit", onLoginSubmit);

// alert는 browser의 다른 동작을 막음, but ok를 누르는 순간 browser는 기본동작을 수행하게 됨.
function handleLinkClick(event){
    event.preventDefault();
    console.log(event);
}
link.addEventListener("click", handleLinkClick);

// handleLinkClick({information about the event that just happened})