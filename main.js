'use strict';

const h1 = document.querySelector(".hello h1");

// with Css, change color
// ClassList : NOT replace className only add clicked class.
function handleTitleClick(){
    const clickedClass = "clicked";
    if(h1.classList.contains(clickedClass)){
        h1.classList.remove(clickedClass);
    }
    else{
        h1.classList.add(clickedClass);
    }
}
 
h1.addEventListener("click", handleTitleClick);


