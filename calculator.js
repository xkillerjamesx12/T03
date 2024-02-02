"use strict";
let displayValue = document.getElementById("displayValue");
let operations = document.getElementById("operators div");
let number = document.getElementsByClassName("number");
let clear = document.getElementById('clear');
let equal = document.getElementsByClassName('.operator equal');

function numberOnClick(digitBtns) {
    console.log(digitBtns);
 } 

document.addEventListener('DOMContentLoaded', function()
    {
        let digitBtns =number;
        for( let i=0; i<digitBtns.length; i++ ) {
            digitBtns[i].addEventListener('click', numberOnClick(digitBtns[i]));
        };
    });