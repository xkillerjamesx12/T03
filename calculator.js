"use strict";
let displayValue = document.getElementById("displayValue");
let operations = document.querySelectorAll(".operators div");
let number = document.querySelectorAll(".number div");
let clear = document.getElementById('clear');
let equal = document.querySelectorAll('.operator equal');
/*ansDisplay = false;*/
function numberOnClick() {
    console.log("this");
 } 
document.addEventListener('DOMContentLoaded', function()
    {
        let digitBtns =number;
        for( let i=0; i<digitBtns.length; i++ ) {
            digitBtns[i].addEventListener('click', digitOnClick);
        };
    });