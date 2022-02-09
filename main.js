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

//Event를 Listen하는 2가지 방법
title.onclick = handleTitleClick;
title.addEventListener("mouseenter",handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);


//window Event
function handleWindowResize(){
    document.body.style.backgroundColor="tomato";
}

window.addEventListener("resize", handleWindowResize);