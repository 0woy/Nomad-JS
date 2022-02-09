'use strict';

const h1 = document.querySelector(".hello h1");

// with Css, change color
// string(active)를 2번 사용하고 있는데, 이는 error의 위험이 있음.
//  raw value: 개발자가 선택한 value -> 오탈자같은 실수를 발생할 수 있음.
function handleTitleClick(){
    const clickedClass ="clicked";
    if(h1.className === clickedClass){
        h1.className ="";
    }
    else{
        h1.className=clickedClass;
    }
}
 
h1.addEventListener("click", handleTitleClick);


