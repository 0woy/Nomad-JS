'use strict';

const title = document.querySelector(".hello h1");

function handleTitleClick(){
    title.innerText ="Grab me!"
    title.style.color ="blue";
}

function handleMouseEnter(){
    title.innerText ="Mouse is here!";
}

function handleMouseLeave(){
    title.innerText ="Mouse is gone!";
}


title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter",handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

//Window Event

//1. 화면 크기 조절시 발생하는 event
function handleWindowResize(){
    document.body.style.backgroundColor="tomato";
}
window.addEventListener("resize", handleWindowResize);


//2. copy event
function handleWindowCopy(){
    alert("copier!");
}
window.addEventListener("copy",handleWindowCopy);

// 3. Online, Offline event
function handleWindowOffline(){
    alert("SOS no WIFI");
}

function handleWindowOnline(){
    alert("All goood");
}
window.addEventListener("offline",handleWindowOffline);
window.addEventListener("online",handleWindowOnline);