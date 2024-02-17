"use strict";
let displayValue = document.getElementById('displayValue');
let operations = document.querySelectorAll('#operators div');
let number = document.querySelectorAll('#num');
let clear = document.querySelectorAll('#clear');
let equal = document.querySelectorAll('.equal');
let dot = document.querySelectorAll('#dot');

function numberOnClick() {
	let currentDisplay = displayValue.innerHTML
	if(currentDisplay === '0'){
  	console.log("zero")
  	displayValue.innerHTML = this.innerHTML;
  } else{
  	console.log("non zero");
  	displayValue.innerHTML += this.innerHTML;
  };
}

function operationOnClick() {
  displayValue.innerHTML += this.innerHTML;
}

function equalOnClick() {
  displayValue.innerHTML += this.innerHTML;
}

function clearOnClick() {
  displayValue.innerHTML += this.innerHTML;
}

function dotOnClick() {
  let currentDisplay = displayValue.innerHTML
	if(currentDisplay.includes('.')){} else{
  	displayValue.innerHTML += this.innerHTML;}
}


document.addEventListener('DOMContentLoaded', function() {

  let num_btn = number;
  let operation_btn = operations;
  let equal_btn = equal;
  let clear_btn = clear;
  let dot_btn = dot;
  
  for (let i = 0; i < clear_btn.length; i++) {
    clear_btn[i].addEventListener('click', clearOnClick);
  };
  
  for (let i = 0; i < num_btn.length; i++) {
    num_btn[i].addEventListener('click', numberOnClick);
  };
  
  for (let i = 0; i < operation_btn.length; i++) {
    operation_btn[i].addEventListener('click', operationOnClick);
  };
  
  for (let i = 0; i < equal_btn.length; i++) {
    equal_btn[i].addEventListener('click', equalOnClick);
  };
  
  for (let i = 0; i < dot_btn.length; i++) {
    dot_btn[i].addEventListener('click', dotOnClick);
  };
})