'use strict';

const h1 = document.querySelector(".hello h1");


//toggle: add and remove 
// Not repeat string, we can use string -> cicked.
function handleTitleClick(){
    h1.classList.toggle("clicked");
}
 
h1.addEventListener("click", handleTitleClick);


