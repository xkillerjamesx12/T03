"use strict";
let displayValue = document.getElementById("displayValue");
let operations = document.querySelectorAll("#operators div");
let number = document.querySelectorAll(".number div");
let clear = document.getElementById('clear');
let equal = document.getElementsByClassName('.operator equal');

function numberOnClick() {
  displayValue.innerHTML = this.innerHTML;
}
function operationOnClick() {
  displayValue.innerHTML = this.innerHTML;
}

document.addEventListener('DOMContentLoaded', function() {

  let num_btn = number;
  let operation_btn = operations;
  let equal_btn = equal;
  for (let i = 0; i < num_btn.length; i++) {
    num_btn[i].addEventListener('click', numberOnClick);
  };
  for (let i = 0; i < operation_btn.length; i++) {
    operation_btn[i].addEventListener('click', operationOnClick);
  };
  
})